"use strict";

const dotenv = require("dotenv");
const dotenvExpand = require("dotenv-expand");

dotenvExpand.expand(dotenv.config());

const { PORT, DATABASE_URI     } = process.env;

const serverConfig = {
  port: PORT,
};

const databaseConfig = {
  uri: DATABASE_URI,
};


 

exports.serverConfig = serverConfig;
exports.databaseConfig = databaseConfig;
 
