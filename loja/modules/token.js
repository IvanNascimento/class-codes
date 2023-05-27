const jwt = require("jsonwebtoken");
const { Request, Response, NextFunction } = require("express");

const { SALT, AUTHENTICATION_SECRET } = require("../config/constants");

/**
 *
 * @param {JSON} data
 * @returns
 */
function login(data) {
  return jwt.sign(data, AUTHENTICATION_SECRET, {
    expiresIn: "1h",
  });
}

/**
 *
 * @param {string} token
 * @returns
 */
async function validateToken(token) {
  try {
    let decoded = jwt.verify(token, AUTHENTICATION_SECRET);
    return {
      valid: true,
      decoded,
    };
  } catch (err) {
    return {
      valid: false,
      expired: err.expiredAt ? true : false,
      error: err,
    };
  }
}

/**
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
async function verifyToken(req, res, next) {
  // let token = req.get('Authentication');
  let token = req.cookies;

  token = token.slice(token.indexOf("="));

  let validated = await validateToken(token);
  if (validated.valid) {
    // console.log(valid);
    req.user = validated.decoded;
    next();
  } else {
    if (validated.error.expiredAt) {
      res.status(401).send({
        message: "Error",
        datail: "expired token",
        extra: "Login to continue",
      });
    } else {
      res.status(401).send({
        message: "Error",
        datail: "expired token",
        extra: "Login to continue",
      });
    }
  }
}

module.exports = { login, validateToken, verifyToken };
