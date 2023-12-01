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

app.post("/post/create",async(req,res)=>{
    const post = await Post.create(req.body);
    res.send(post);
})

app.delete("/post/delete/:id",async(req,res)=>{
    const post = await Post.findById(req.params.id);
    if(!post){
        res.status(404).json({
            success: false,
            message:"Product Not Found"
        });
    }
    await post.deleteOne();
    res.status(200).json({
        success: true,

    });
})
app.post("/post/update/:id",async(req,res)=>{
    let post = await Post.findById(req.params.id);
    if(!post){
        res.status(404).json({
            success: false,
            message:"Product Not Found"
        });
    }
    post = await Post.findByIdAndUpdate(req.params.id, req.body);

    res.status(200).json({
      post,
    });
})




app.listen(3000);