var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  db.sale_event.findAll({
    where : {
      city : "Minneapolis"
    }
  }).then(function (data) {
    var hbsObject = {
      sale: data 
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/sale", function(req, res) {
  db.sale_event.create(req.body).then(function(dbSale) {
    res.json(dbSale);
  });
});

// Create all our routes and set up logic within those routes where required.
router.get("/listing/:id", function (req, res) {
  db.sale_event.findAll({
    where : {
      id : req.params.id
    }
  }).then(function (data) {
    var hbsObject = {sale: data[0]}
    console.log(hbsObject);
    res.render("sale", hbsObject);
  });
});

// // update the devoured status
// router.put("/api/burgers/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   burger.update({
//     devoured: req.body.devoured
//   }, condition, function(result) {
//     if (result.changedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// // Delete devoued items when requested.
// router.delete("/api/burgers/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   burger.delete(condition, function(result) {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// Export routes for server.js to use.
module.exports = router;
