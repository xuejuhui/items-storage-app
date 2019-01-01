const express = require("express");
const router = express.Router();
const db = require("../../models");

router.get("/", (req, res) => {
  db.Items.find().then(items => {
    res.json(items);
  });
});

router.post("/", (req, res) => {
  let newItems = new db.Items({
    title: req.body.title,
    description: req.body.description
  });
  newItems
    .save()
    .then(items => {
      res.json(items);
    })
    .catch(err => {
      res.send(err);
    });
});

router.put("/:id", (req, res) => {
  let id = req.params.id;
  let updateItem = {
    title: req.body.title,
    description: req.body.description
  };
  db.Items.updateOne({ _id: id }, updateItem)
    .then(item => res.json({ item: item }))
    .catch(err => res.send(err));
});

router.delete("/:id", (req, res) => {
  let id = req.params.id;
  db.Items.findById(id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
