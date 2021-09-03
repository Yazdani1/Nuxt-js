const express = require("express");
const router = express.Router();
const Portal = require("../model/Portal");

router.post("/post", (req, res) => {
  var portalData = Portal(req.body);

  Portal.create(portalData)
    .then((portalPost) => {
      res.json({
        post: portalPost,
        message: "Post successfull",
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/getData", (req, res) => {
  Portal.find({})
    .sort({ date: "DESC" })
    .then((allData) => {
      res.json(allData);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.delete("/delete/:id", (req, res) => {
  const deleteQuery = { _id: req.params.id };

  Portal.findByIdAndDelete(deleteQuery)
    .then((deletedData) => {
      res.json({ message: "Data Deleted Successfully" });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/details/:id", (req, res) => {
  const detailsQuery = { _id: req.params.id };

  Portal.findOne(detailsQuery)
    .then((details) => {
      res.json(details);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.put("/edit/:id", (req, res) => {
  const editQuey = { _id: req.params.id };
  Portal.updateOne(editQuey, {
    $set: {
      title: req.body.title,
      des: req.body.des,
    },
  })
    .then((updated) => {
      res.json(updated);
    })
    .catch((err) => {
      console.log(err);
    });
});

//latest post

router.get("/latestpost", (req, res) => {
  Portal.find({})
    .sort({ date: "DESC" })
    .limit(5)
    .then((latestPostdata) => {
      res.json(latestPostdata);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
