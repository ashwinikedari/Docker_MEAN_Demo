const mongoose = require("mongoose");
const mongoUri= process.env.MONGO_URL ||'mongodb://127.0.0.1:27017/imagica'
console.log('mongo url', mongoUri)
mongoose
  .connect(
    // "mongodb://AshwiniKedari:Ashwini123@database:27017/imagica?authSource=admin&readPreference=primary&ssl=false"
    // "mongodb+srv://ashwinikedari:Ashwini123@angular-node-mongo.5fbgm.mongodb.net/imagica?retryWrites=true&w=majority"
    // "mongodb://database:27017/imagica"
    mongoUri
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((error) => {
     console.log("Connection failed!",error);
  });
module.exports = {mongoose};