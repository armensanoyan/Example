const jwt = require("jsonwebtoken");
const TOKEN = process.env.TOKEN;

const verifyUser = (req, res, next) => {
  debugger;
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, TOKEN, (err, decoded) => {
      if (err) {
        res.status(401).json({ message: "Invalid token" });
      } else {
        req.userId = decoded.userId;
        next();
      }
    });
  } else {
    res.status(401).json({ message: "No token provided" });
  }
};

module.exports = verifyUser;
