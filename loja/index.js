// Bibliotecas
const express = require("express");
const vhost = require("vhost");
const cors = require("cors");
const { rateLimit } = require("express-rate-limit");
const https = require("https");
const fs = require("fs");
const path = require("path");

// Constants
const { AUTHORIZATION, HOST, PORT } = require("./constants/constants");

// Modulos
const { db, models, GenViews } = require("./models/index");

// Rotas
const { notfound } = require("./apps/notfound");
const { redirect } = require("./apps/redirect");
const views = require("./routes/publicViews");

// Inicialização de variáveis
// Servers
const httpServer = express();
const httpsServer = express();
// Apps
const main = express();

// Limit the number of requisitions of a IP
main.use(
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

main.use(express.json());
main.use(
  express.urlencoded({
    extended: true,
  })
);

// CORS Configuration
main.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
    credentials: true,
  })
);

// Archives
main.use("/css", express.static(path.join(__dirname, "public/css")));
main.use("/js", express.static(path.join(__dirname, "public/js")));

main.get("/", (req, res, next) => {
  res.status(308).redirect("/home");
});

main.use("/", views);

// API Online ?
main.get(`/online`, (req, res, next) => {
  res.status(200).send({
    message: "Success",
    detail: "Online",
  });
});

// Authentication system
main.use((req, res, next) => {
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

main.use("/api", (req, res, next) => {
  res.status(501).send({
    message: "Error",
    details: "Not Implemented",
  });
});

// 404
main.use((req, res, next) => {
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
main.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({
    message: "Error",
    detail: "Internal error",
  });
});

// HTTP to HTTPS
httpServer.use(vhost("localhost", redirect));
httpServer.use(vhost("*.localhost", redirect));

// Loja
httpsServer.use(vhost("loja.localhost", main));

// Not Found
httpsServer.use(vhost("localhost", notfound));
httpsServer.use(vhost("*.localhost", notfound));

try {
  // HTTPS
  const HTTPSOptions = {
    key: fs.readFileSync("./https/key.pem"),
    cert: fs.readFileSync("./https/cert.pem"),
  };
  https.createServer(HTTPSOptions, httpsServer).listen(PORT, HOST);
  console.log(`HTTPS Server running on https://${HOST}:${PORT}`);

  httpServer.listen(80, HOST, () => {
    console.log("HTTP Redirect server listening");
  });
} catch (e) {
  console.log(e);
  // HTTP
  httpsServer.listen(PORT, HOST, () => {
    console.log(`HTTP Server running on http://${HOST}:${PORT}`);
  });
}
