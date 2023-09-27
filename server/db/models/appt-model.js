// const mongoose = require('../connection.js');
const mongoose = require("mongoose");
const { Schema } = mongoose;

const ApptSchema = new Schema({
  apptType: String,
  location: String,
  name: String,
});

const Appt = mongoose.model("Appt", ApptSchema);

module.exports = Appt;
