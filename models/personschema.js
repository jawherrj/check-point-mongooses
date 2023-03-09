const mongoose = require("mongoose");
const { Schema } = mongoose;

const persschema = new Schema({
  name: { type: String, required: true },
  age: Number,
  favorateFood: [String],
});

const PersonModel = mongoose.model('User', persschema)

module.exports=PersonModel
