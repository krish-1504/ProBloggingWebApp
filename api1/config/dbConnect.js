const mg = require("mongoose");

const dbConnect = ()=>{
    mg.connect('mongodb://localhost:27017/ProBlogging').then(()=>{
        console.log("Database Connected")
    }).catch((err)=>{
        console.log(err);
    });
}

module.exports = dbConnect;