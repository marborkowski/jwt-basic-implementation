'use strict';

const jwt = require('jsonwebtoken');
const config = require('config');

module.exports.authenticate = function () {
  return new Promise(function (resolve, reject) {
    const user = {
      id: '123',
      email: 'marborkowski@some.email.service.in',
      active: true
    };

    jwt.sign(
      user,
      config.get('jwt.secret'),
      {
        expiresIn: 30,
        header: {
          z: '123'
        }
      },
      (err, token) => {
        if (err) {
          return reject(new Error(err.message));
        }

        resolve(token);
      }
    );
  });
}

module.exports.verify = function (token) {
  return new Promise(function (resolve, reject) {
    if (token) {
      jwt.verify(token, config.get('jwt.secret'), function(err, decoded) {
        if (err) {
            return reject(new Error('Invalid token!'));
        }
        resolve(decoded);
      });
    } else {
      reject(new Error('No token.'));
    }
  });
}
