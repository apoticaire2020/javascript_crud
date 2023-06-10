require('dotenv').config();
const mongoose = require('mongoose');



async function connectDb(){
      await mongoose.connect(process.env.MongoUrl);
      console.log("Db connecté") 
      
 };

module.exports = {connectDb } // accolade obligatoire
 