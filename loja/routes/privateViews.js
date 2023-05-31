const express = require("express");

const Router = express.Router();

// Authentication
Router.use((req, res, next) => {
  res.status(403).send({
    message: "Unauthorized",
    details: "Authentication required",
  });
  // next();
});

Router.get("/admin", (req, res, next) => {
  res.send({
    message: "Success",
  });
});

// Error handling
Router.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({
    message: "Error",
    details: err.message,
  });
});

module.exports = Router;
