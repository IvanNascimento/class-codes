const { Router } = require("express");
const { Op, Model, ModelStatic } = require("sequelize");

/**
 *
 * @param {ModelStatic<Model} model
 */
function getAll(model) {
  let route = Router();

  route.get("/all", (req, res, next) => {
    let excluded = ["include", "limit", "offset", "order", "date"];

    let filter = {
      where: {},
      order: [["id", "DESC"]],
      attributes: {
        exclude: ["password"],
      },
      include: [],
    };

    if (req.query.include) {
      let include = req.query.include;
      if (include == "all") {
        filter.include = {
          all: true,
          attributes: {
            exclude: ["password"],
          },
        };
      } else if (include.startsWith("[")) {
        let list = include.slice(1, -1).split(",");
        for (let i in list) {
          filter.include.push({
            association: list[i],
            attributes: {
              exclude: ["password"],
            },
          });
        }
      } else {
        filter.include = {
          association: req.query.include,
          attributes: {
            exclude: ["password"],
          },
        };
      }
    }

    if (req.query.limit) {
      let limit = req.query.limit;
      if (limit !== "-1") {
        filter.limit = parseInt(req.query.limit);
      }
    } else {
      filter.limit = 100;
    }

    if (req.query.offset) {
      filter.offset = parseInt(req.query.offset);
    }

    if (req.query.date) {
      let date = req.query.date;
      if (date["before"]) {
        filter.where["date"] = {
          ...filter.where["date"],
          [Op.lt]: date["before"],
        };
      }
      if (date["after"]) {
        filter.where["date"] = {
          ...filter.where["date"],
          [Op.gt]: date["after"],
        };
      }
    }

    if (req.query.order) {
      if (req.query.order == "-1") {
        filter.order = [["id", "ASC"]];
      } else if (typeof req.query.order == "object") {
        for (let i of Object.keys(req.query.order)) {
          filter.order.push([i, req.query.order[i]]);
        }
      }
    }

    for (let o of Object.keys(req.query)) {
      if (!excluded.includes(o)) {
        if (req.query[o].startsWith("[")) {
          let arr = req.query[o].slice(1, -1).split(",");
          filter.where = {
            ...filter.where,
            [o]: {
              [Op.in]: arr,
            },
          };
        } else {
          filter.where[o] = req.query[o];
        }
      }
    }

    model
      .findAndCountAll(filter)
      .then((results) => {
        res.status(200).send({
          message: "Success",
          data: {
            results: results.rows,
            limit: filter.limit ? filter.limit : "-1",
            offset: filter.offset ? filter.offset : 0,
            rows: results.count,
          },
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(404).send({
          message: "Error",
          error: err.message,
        });
      });
  });

  return route;
}

/**
 *
 * @param {ModelStatic<Model} model
 */
function getOne(model) {
  let route = Router();

  route.get("/one", (req, res, next) => {
    let filter = {
      where: {},
      attributes: {
        exclude: ["password"],
      },
      include: [],
    };

    for (let o of Object.keys(req.query)) {
      if (o !== "include") {
        if (req.query[o].startsWith("[")) {
          let arr = req.query[o].slice(1, -1).split(",");
          filter.where = {
            ...filter.where,
            [o]: {
              [Op.in]: arr,
            },
          };
        } else {
          filter.where[o] = req.query[o];
        }
      } else {
        let include = req.query.include;
        if (include == "all") {
          filter.include = {
            all: true,
            attributes: {
              exclude: ["password"],
            },
          };
        } else if (include.startsWith("[")) {
          let list = include.slice(1, -1).split(",");
          for (let i in list) {
            filter.include.push({
              association: list[i],
              attributes: {
                exclude: ["password"],
              },
            });
          }
        } else {
          filter.include = {
            association: req.query.include,
            attributes: {
              exclude: ["password"],
            },
          };
        }
      }
    }

    model
      .findOne(filter)
      .then((result) => {
        res.status(200).send({
          message: "Success",
          data: result,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(404).send({
          message: "Error",
          error: err.message,
        });
      });
  });

  return route;
}

/**
 *
 * @param {ModelStatic<Model} model
 */
function create(model) {
  let route = Router();

  route.post("/", (req, res, next) => {
    model
      .create(req.body)
      .then((result) => {
        if (model.name == "Transaction") {
          if (req.body.Products) {
            req.body.Products.forEach((product) => {
              result["addProduct"](product.id);
            });
          }
        }
        res.status(201).send({
          message: "Success",
          data: result,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(422).send({
          message: "Error",
          error: err.message,
        });
      });
  });

  return route;
}

/**
 *
 * @param {ModelStatic<Model} model
 */
function update(model) {
  let route = Router();

  route.put("/:id", (req, res, next) => {
    model
      .update(req.body, {
        where: {
          id: req.params.id,
        },
      })
      .then((result) => {
        res.status(200).send({
          message: "Success",
          data: result,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(400).send({
          message: "Error",
          error: err.message,
        });
      });
  });

  return route;
}

/**
 *
 * @param {ModelStatic<Model} model
 */
function del(model) {
  let route = Router();

  route.delete("/:id", (req, res, next) => {
    model
      .destroy({
        where: {
          id: req.params.id,
        },
      })
      .then((result) => {
        res.status(204).send();
      })
      .catch((err) => {
        console.log(err);
        res.status(400).send({
          message: "Error",
          error: err.message,
        });
      });
  });

  return route;
}

/**
 *
 * @param {ModelStatic<Model} model
 */
function delBulk(model) {
  let route = Router();

  route.delete("/bulk", (req, res, next) => {
    let list = req.body.list.slice(0, 50);
    model
      .destroy({
        where: {
          id: list,
        },
        limit: 50,
      })
      .then((result) => {
        res.status(201).send({
          message: "Success",
          data: {
            deletedRows: result,
          },
        });
      })
      .catch((err) => {
        res.status(400).send({
          message: "Error",
          error: err.message,
        });
      });
  });

  return route;
}

/**
 *
 * @param {ModelStatic<Model} model
 */
function ApplyAll(model) {
  let router = Router();

  router.use(getAll(model));
  router.use(getOne(model));
  router.use(create(model));
  router.use(update(model));
  router.use(del(model));
  router.use(delBulk(model));

  return router;
}

module.exports = {
  getAll,
  getOne,
  update,
  del,
  delBulk,
  create,
  ApplyAll,
};
