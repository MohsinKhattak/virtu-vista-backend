"use strict";

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("../routes");
const { connectWithMongoDB } = require("./database");

const initializeServer = (serverPort) => {
  const backend = express();

  const corsOptions = {
    origin: "*",
  };

  backend.use(cors(corsOptions));

  backend.use(bodyParser.json({ limit: "50mb" }));
  backend.use("/api/job-post", routes.JobPostRoutes);
  backend.use("/api/virtual-assistant", routes.VARoutes);
  connectWithMongoDB()
    .then(() => {
      backend.listen(serverPort);
      console.log("Server started listening on port", serverPort);
    })
    .catch((error) => {
      console.error(error);
    });
};

exports.initializeServer = initializeServer;
