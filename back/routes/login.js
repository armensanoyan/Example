var express = require("express");
var router = express.Router();
const User = require("../models").sequelize.models.User;
const jsonwebtoken = require("jsonwebtoken");
require("dotenv").config();
const TOKEN = process.env.TOKEN;

/* GET users listing. */
router.post("/", async function (req, res, next) {
  const password = req.body.password;
  const username = req.body.username;
  const user = await User.findOne({
    where: { firstName: username, password: password },
  });
  if (user) {
    const token = jsonwebtoken.sign({ userId: user.id }, TOKEN);
    user.setDataValue("token", token);
    res.send(JSON.stringify(user));
  } else {
    res.send({ error: "Invalid username or password" });
  }
});

module.exports = router;
