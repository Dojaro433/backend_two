const express = require("express");

const app = express();

const conn = require("./db");
const trairs = require("./models/trairs");

const pors = require("./routes/trairs");





conn.connection.on("connected", (err) =>{


   if(err){

    console.error(err);  
   }
   else{

    console.log("Connected to MongoDb");
   }



});

app.use(express.json());

app.use("/trairs", require("./routes/trairs"));








app.listen(9000, () =>{


 console.log(" Node.js Server has Started");


})

