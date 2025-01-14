const jwt = require("jsonwebtoken");
const secret_key = process.env.SECRET_KEY;

function signPayload(payload) {
  return jwt.sign(payload, secret_key);
}

function verifyToken(token) {
  return jwt.verify(token, secret_key);
}

module.exports = {
  signPayload,
  verifyToken,
};
