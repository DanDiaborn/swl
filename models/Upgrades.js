const mongoose = require("mongoose");

const { Schema } = mongoose;

const UpgradesSchema = new Schema(
  [
    {
      date: String,
      name: String,
      faction: String,
      type: String,
      link: String,
      type: String
    }
  ]
  // commandCards: {
  //   id: mongoose.ObjectId,
  //   CommandCards: [{
  //     expNum: String,
  //     leader: String,
  //     name: String
  //   }]
  // },
  // units: {
  //   id: mongoose.ObjectId,
  //   Units: [{
  //     expNum: String,
  //     type: String,
  //     name: String
  //   }]
  // },
  // upgrades: {
  //   id: mongoose.ObjectId,
  //   Upgrades: [{
  //     comms: [{
  //       name: String,
  //       expNum: String
  //     }]
  //   }]
  // }
  , { collection: 'Upgrades' });

module.exports = mongoose.model('Upgrades', UpgradesSchema);
