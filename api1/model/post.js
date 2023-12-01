const mg = require("mongoose");


const postSchema = mg.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    images:[
        {
            public_id:{
                type:String,
            },
            url:{
                type:String,
            },
        },
    ],
    category:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }

})

module.exports = mg.model('Post',postSchema);