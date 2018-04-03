'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('config');

const logger = require('./services/logger');

app.set('port', process.env.PORT || config.get('port'));
app.use(bodyParser.json());

app.use(require('./controllers'));

app.listen(
  app.get('port'),
  () => logger.info(`http://localhost:${app.get('port')}`)
);
