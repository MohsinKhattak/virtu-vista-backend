'use strict';

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const config = require('../config');
const dotenvExpand = require('dotenv-expand');

dotenvExpand.expand(dotenv.config());

const connectWithMongoDB = async () => {
  try {
    await mongoose.connect(config.databaseConfig['uri'], {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
 
    console.log('Database Connected');
    return mongoose;
  } catch (error) { 
    console.log('Error Connecting Database');
    console.error(error);
  }
};

module.exports = {
  connectWithMongoDB,
};
