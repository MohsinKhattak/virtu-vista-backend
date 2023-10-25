"use strict";

const { initializeServer } = require("./src/loaders");
const dotenv = require("dotenv");
const config = require("./src/config");
const dotenvExpand = require("dotenv-expand");

dotenvExpand.expand(dotenv.config());
initializeServer(config.serverConfig.port || 3000);
