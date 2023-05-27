// Bibliotecas
const express = require("express");
const { rateLimit } = require("express-rate-limit");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const https = require("https");
const fs = require("fs");
const vhost = require("vhost");
const { AUTHORIZATION, HOST, PORT } = require("./constants/constants");
const path = require("path");

// Inicialização de variáveis
const server = express();
const redirect = express();
const application = express();
const http = express();
const notfound = express();

// HTTP > HTTPS Server
http.use((req, res, next) => {
  if (req.url == "/") {
    res.redirect(`https://${req.hostname}:${PORT}/home`);
  } else {
    res.redirect(`https://${req.hostname}:${PORT}${req.url}`);
  }
});

// 404 server
notfound.use((req, res, next) => {
  res.status(404).send({
    message: "Error",
    details: `${req.url} not Found`,
    extra: {
      method: req.method,
      url: req.url,
    },
  });
});

// Limit the number of requisitions of a IP
application.use(
  rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 60,
    legacyHeaders: false,
    message: {
      message: "Error",
      detail: "Rate limit exceeded",
    },
    statusCode: 429,
  })
);

application.use(express.json());
application.use(
  express.urlencoded({
    extended: true,
  })
);

// CORS Configuration
application.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
    credentials: true,
  })
);

application.use("/home", express.static(path.join(__dirname, "public")));

// API Online ?
application.get(`/online`, (req, res, next) => {
  res.status(200).send({
    message: "Success",
    detail: "Online",
  });
});

// Authentication system
application.use((req, res, next) => {
  if (req.get("Authorization") == AUTHORIZATION) {
    next();
  } else {
    res.status(403).send({
      message: "Error",
      details: "Access denied",
      extra: "Authentication required",
    });
  }
});

// 404
application.use((req, res, next) => {
  res.status(404).send({
    message: "Error",
    detail: "Page not Found",
    extra: {
      url: req.url,
      method: req.method,
    },
  });
});

// Error handling
application.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({
    message: "Error",
    detail: "Internal error",
  });
});

// HTTP > HTTPS
redirect.use(vhost("localhost", http));
redirect.use(vhost("*.localhost", http));

// Loja
server.use(vhost("loja.localhost", application));

// Not Found
server.use(vhost("localhost", notfound));
server.use(vhost("*.localhost", notfound));

try {
  // HTTPS
  const HTTPSOptions = {
    key: fs.readFileSync("./https/key.pem"),
    cert: fs.readFileSync("./https/cert.pem"),
  };
  https.createServer(HTTPSOptions, server).listen(PORT, HOST);
  console.log(`Server running on ${HOST}:${PORT}`);
} catch (e) {
  // HTTP
  server.listen(PORT, HOST, () => {
    console.log(`Server running on ${HOST}:${PORT}`);
  });
} finally {
  redirect.listen(80, HOST, () => {
    console.log("HTTP Redirect listening");
  });
}
