const exp = require('express');
const app = exp();
const dbConnect = require("./config/dbConnect");
const Post = require('./model/post');
const cors = require("cors")

app.use(cors());
app.use(exp.json());
app.use(exp.urlencoded({ extended: true }));
dbConnect();



app.get("/",(req,res)=>{
    res.send("hiiiiii")
})

app.post("/post",async(req,res)=>{
    const post = await Post.create(req.body);
    res.send(post);
})

app.delete("/post/:id",async(req,res)=>{
    const post = await Post.findById(req.params.id);
    if(!post){
        res.send("Product Not Found");
    }
    await post.deleteOne();
    res.status(200).json({
        success: true,

    });
})




app.listen(3000);