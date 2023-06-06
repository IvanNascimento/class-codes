const { PORT } = require("../constants/constants");

const redirect = require("express")();

// HTTP > HTTPS Server
redirect.use((req, res, next) => {
  if (req.hostname === "localhost") {
    if (req.url == "/") {
      res.status(308).redirect(`https://loja.${req.hostname}:${PORT}/home`);
    } else {
      res
        .status(308)
        .redirect(`https://loja.${req.hostname}:${PORT}${req.url}`);
    }
  } else {
    if (req.url == "/") {
      res.status(308).redirect(`https://${req.hostname}:${PORT}/home`);
    } else {
      res.status(308).redirect(`https://${req.hostname}:${PORT}${req.url}`);
    }
  }
});

module.exports = {
  redirect,
};
