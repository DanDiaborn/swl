const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const Units = require("../models/Units");
const CommandCards = require("../models/CommandCards");
const Upgrades = require("../models/Upgrades");

const PORT = process.env.PORT || 3001;

const app = express();

const start = async () => {
  try {
    app.use(cors());
    app.use(express.json());
    await mongoose.connect("mongodb+srv://DanSher:tziO4kvuG0lQIvoN@cluster0.c9ughq4.mongodb.net/".concat("swl"));

    app.get("/:faction/:type", (req, res) => {
      switch (req.params.type) {
        case "Units":
          Units.find({ $or: [{ "faction": req.params.faction }, { "faction": "Generic" }] }).sort('type expNum name').then(result => {
            res.json(result);
          })
          break;
        case "CommandCards":
          CommandCards.find({ $or: [{ "faction": req.params.faction }, { "faction": "Generic" }] }).sort('expNum leader name').then(result => {
            res.json(result);
          })
          break;
        case "Upgrades":
          Upgrades.find({ $or: [{ "faction": req.params.faction }, { "faction": "Generic" }] }).sort('type date restrictions name').then(result => {
            res.json(result);
          })
          break;
        default:
          break;
      }
    })

    app.post("/:type", (req, res) => {
      console.log(req.body.faction);
      switch (req.params.type) {
        case "Units":
          let postUnit = new Units({
            name: req.body.name,
            faction: req.body.faction,
            expNum: req.body.expNum,
            type: req.body.type,
            link: req.body.link
          })
          postUnit.save()
          res.json({ message: req.params.type + " has been updated" });
          break;
        case "CommandCards":
          let postCard = new CommandCards({
            name: req.body.name,
            faction: req.body.faction,
            leader: req.body.leader,
            expNum: req.body.expNum,
            link: req.body.link
          })
          postCard.save()
          res.json({ message: req.params.type + " has been updated" });
          break;
        case "Upgrades":
          let postUpgrade = new Upgrades({
            name: req.body.name,
            faction: req.body.faction,
            type: req.body.type,
            date: req.body.date,
            link: req.body.link
          })
          postUpgrade.save()
          res.json({ message: req.params.type + " has been updated" });
          break;
        default:
          break;
      }
    })

    app.listen(PORT, () => {
      console.log('server started');
    });
  }
  catch (e) {
    console.log(e);
  }
}

// app.get("/:testshit", (req, res) => {
//   try {
//     res.json(+req.params.testshit + 1);
//   }
//   catch (e) {
//     res.json('fail');
//   }
// })

// app.listen(PORT, () => {
//   console.log('server started');
// });

start();