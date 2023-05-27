const express = require("express");
const path = require("path");

const Router = express.Router();

// Index
Router.get("/home", (req, res, next) => {
  try {
    res.status(200).sendFile(`/views/index.html`, {
      root: `${__dirname}/..`,
    });
  } catch (e) {
    console.log(e);
    res.status(400).send({
      message: "Error",
      details: e.message,
    });
  }
});

Router.get("/about", (req, res, next) => {
  try {
    res.status(200).sendFile("/views/about.html", {
      root: `${__dirname}/..`,
    });
  } catch (e) {
    console.log(e);
    res.status(400).send({
      message: "Error",
      details: e.message,
    });
  }
});

Router.get("/products", (req, res, next) => {
  try {
    res.status(200).sendFile("/views/products.html", {
      root: `${__dirname}/..`,
    });
  } catch (e) {
    console.log(e);
    res.status(400).send({
      message: "Error",
      details: e.message,
    });
  }
});

Router.get("/login", (req, res, next) => {
  try {
    res.status(200).sendFile("/views/login.html", {
      root: `${__dirname}/..`,
    });
  } catch (e) {
    console.log(e);
    res.status(400).send({
      message: "Error",
      details: e.message,
    });
  }
});

Router.get("/cadastro", (req, res, next) => {
  try {
    res.status(200).sendFile("/views/cadastro.html", {
      root: `${__dirname}/..`,
    });
  } catch (e) {
    console.log(e);
    res.status(400).send({
      message: "Error",
      details: e.message,
    });
  }
});

module.exports = Router;
