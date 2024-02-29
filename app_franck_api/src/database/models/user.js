const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  //<== main informations
  user_inscription_date: { type: Date },

  user_first_name: { type: String, required: true }, 
  user_last_name: { type: String, required: true }, 
  user_phone: { type: Number, required: true}, 
  user_identifiant: { type: String, required: true }, 
  user_password: { type: String, required: true }, 
});

const UserModel = mongoose.model("User", userSchema, "user");

module.exports = UserModel;
