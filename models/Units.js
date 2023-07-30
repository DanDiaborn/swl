const mongoose = require("mongoose");

const { Schema } = mongoose;

const UnitsSchema = new Schema({
  name: String,
  faction: String,
  expNum: String,
  type: String,
  link: String
}, { collection: 'Units' });

module.exports = mongoose.model('Units', UnitsSchema);
