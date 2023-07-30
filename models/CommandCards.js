const mongoose = require("mongoose");

const { Schema } = mongoose;

const CommandCardsSchema = new Schema({
  name: String,
  faction: String,
  leader: String,
  expNum: String,
  link: String
}, { collection: 'CommandCards' });

module.exports = mongoose.model('CommandCards', CommandCardsSchema);
