const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

async function userMiddleware(req, res, next) {
  //   Bearer <token>
  const token = req.headers.authorization;
  const jwtToken = token.split(" ")[1];

  const verify = jwt.verify(jwtToken, JWT_SECRET);

  if (verify.username) {
    req.username = verify.username
    next();
  } else {
    res.status(403).json({
      msg: "Not Authenticated!!",
    });
  }
}

module.exports = userMiddleware;
