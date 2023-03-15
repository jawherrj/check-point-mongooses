const express = require("express");
const conctDB = require("./data base/db");
const PersonModel = require("./models/personschema");
require("dotenv").config({ path: "./config/.env" });
const app = express();
port = process.env.Port || 7000;
conctDB();
app.listen(port, (e) =>
  e ? console.log(e) : console.log(`server is conected on port ${port}`)
);
const run = async () => {
  await PersonModel.collection.insertOne({
    name: "orangatanguegggggg",
    age: 350,
    favorateFood: ["bananaggggg", "lazaniya"],
  });
};
//run()
const apeslearnmongoose = async () => {
  await PersonModel.collection.insertMany([
    {
      name: "chimpanzie",
      age: 28,
      favorateFood: ["banana", "zera3a"],
    },
    {
      name: "me",
      age: 32,
      favorateFood: ["makla", "kol"],
    },
    {
      name: "saadan",
      age: 35,
      favorateFood: ["banana"],
    },
  ]);
};
//  apeslearnmongoose()

const find_ape = async () => {
  const find = await PersonModel.find();
  console.log(find);
};
//find_ape()

const find_oneape = async () => {
  const findone = await PersonModel.findOne({ name: "chimpanzie" });
  console.log(findone);
};
//find_oneape()
const find_oneapeID = async () => {
  const findbyid = await PersonModel.findById("6411c2c543cad4b15f05dc4c");
  console.log(findbyid);
};
//find_oneapeID()

PersonModel.findOne({ name: "saadan" }).then((user) => {
    user.favorateFood.push("Hamburger");
    user.markModified("favorateFood");
    user.save();
  });

const findAndUpdate = async () => {
  const findandupdate = await PersonModel.findOneAndUpdate(
    { name: "chimpanzie" },
    { name: "Tarnished" }
  );
};
//findAndUpdate()

const findAndremove = async () => {
  const remove = await PersonModel.findByIdAndRemove(
    "6411c2c543cad4b15f05dc4b"
  );
};

//findAndremove()

const removemany = async () => {
  const removemany = await PersonModel.remove({ name: "me" });
};
//removemany()

PersonModel.find({
  favorateFood: "Hamburger",
})
  .sort({ name: 1 })
  .limit(2)
  .select("-age")
  .exec()
  .then((res) => {
    console.log(res);
  });
