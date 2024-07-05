const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");

async function adminMiddleware(req, res, next) {
  // Admin auth logic
  // Check token from header and validate
  //   Bearer <token>
  const token = req.headers.authorization;
  const jwtToken = token.split(" ")[1];

  const verify = jwt.verify(jwtToken, JWT_SECRET);

  if (verify.username) {
    next();
  } else {
    res.status(403).json({
      msg: "Not Authenticated!!",
    });
  }
}
module.exports = adminMiddleware;
