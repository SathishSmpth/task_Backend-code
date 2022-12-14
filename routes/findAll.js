var express = require("express");
var usersList = require("../module/schema");
var router = express.Router();

router.post("/givedate", async (req, res) => {
  try {
    var dataOnGivenDate = await usersList.find({
      date: req.body.date
    }); 
    if (dataOnGivenDate[0]) {
      res.json({
        data: dataOnGivenDate,
        status:200
      });
    } else {
      res.json({
        status:404,
        message: "Data was not found on given Date",
      });
    }
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
