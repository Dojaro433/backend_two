const mongoose = require("mongoose");




const userSchema = new mongoose.Schema(


{

Name:"String",
Surname:"String",
password:"String",
mobNumber:Number


}






)

  module.exports = mongoose.model("trairs", userSchema)