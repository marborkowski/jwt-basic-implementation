'use strict';

const winston = require('winston');

module.exports =  new winston.Logger({
  transports: [
    new winston.transports.Console({
      handleExceptions: true,
      humanReadableUnhandledException: true,
      colorize: true,
      level: 'silly',
      timestamp: true,
    })
  ]
});
