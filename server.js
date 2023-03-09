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
// apeslearnmongoose()

const find_ape =async ()=>{
 await PersonModel.collection.find()

}
//find_ape()

const find_oneape =async ()=>{
    await PersonModel.collection.findOne({name:'chimpanzie'},function (err,res)
    {
        if (err) {
            console.log(err)
        } else {
            console.log('results:', res)
        }
    }
   )
   }
  // find_oneape()
const find_oneapeID =async ()=>{
    
    await PersonModel.collection.findById("640390ca956030665382eb7f",function (err,res)
    {
        if (err) {
            console.log(err)
        } else {
            console.log('results:', res)
        }
    }
   )
   }
//  find_oneapeID()

PersonModel.collection.findOne({ name: "chimpanzie" }).then((user) => {
    user.favorateFood.push("Hamburger");
    user.markModified("favorateFood");
    user.save((err) => console.log(err));
  });


 


 PersonModel.collection.findOneAndUpdate(
    { name: "chimpanzie" },
    { name: "Tarnished" },
    null,
    function (err, docs) {
      if (err) {
        console.log(err);
      } else {
        console.log("Original Doc : ", docs);
      }
    }
  );



 PersonModel.collection.findByIdAndRemove("640390ca956030665382eb7f", function (err, ape) {
    if (err){
        console.log(err)
    }
    else{
        console.log("Removed User : ", ape);
    }
});

PersonModel.collection.remove({name:"me"}, function (err, ape) {
  if (err){
      console.log(err)
  }
  else{
      console.log("Removed User : ", ape);
  }
});
const many_apes =async ()=>{
    
  await PersonModel.collection.find({
    favorateFood:"burritos"
  },function (err,res)
  {
      if (err) {
          console.log(err)
      } else {
          console.log('results:', res)
      }
  }
 ).sort({name:1}).limit(2).select("-age").exec().then(res=>{
  console.log(res)
 })
 }
 many_apes()