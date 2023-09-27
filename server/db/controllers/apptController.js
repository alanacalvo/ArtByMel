const express = require("express");
const Appt = require("../models/appt-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send({
    message: "this works",
  });
});

router.post("/", (req, res) => {
  Appt.create(req.body)
    .then((appts) => {
      res.send(appts);
    })
    .catch(console.error);
});

module.exports = router;
