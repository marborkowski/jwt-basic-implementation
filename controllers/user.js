'use strict';

const express = require('express');
const router = express.Router();
const user = require('../services/user');

router.get('/authenticate', async function (req, res) {
  const token = await user.authenticate();
  res.json({ token: token });
});

router.post('/verify', async function (req, res) {
  const token = req.body.token || req.query.token || req.headers['x-access-token'];

  try {
    const verify = await user.verify(token);
    res.json({ verification: verify });
  } catch (e) {
    res.json({ error: e.message });
  }
  
});

module.exports = router;
