var express = require("express");
var usersList = require("../module/schema");
var router = express.Router();

router.post("/login", async (req, res) => {
  try {
    var loginCd = await usersList.findOne({
      email: req.body.email
    });
    console.log(loginCd);
    if (loginCd) {
        if (loginCd.email === req.body.email && loginCd.password === req.body.password) {
          res.json({
            data: loginCd,
            status:201
          });
        } else {
          res.json({ 
            status:204,
            message:"Email or Password was Incorrect" 
        });
        }
    }
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
