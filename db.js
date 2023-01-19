const mongoose = require('mongoose');

const env= "mongodb+srv://akanksha:naDknUDyQixtavEs@cluster0.6rwfwof.mongodb.net/bugs?retryWrites=true&w=majority"

module.exports=()=>{
    const connectionParams={
        useNewUrlParser:true,
        useUnifiedTopology:true,
    };

    try{
        mongoose.connect(process.env.DB, connectionParams)
        console.log("Connected to db sucessfully")
    }
    catch(error){
        console.log(err)
        console.log("Connection failed")
    }
}