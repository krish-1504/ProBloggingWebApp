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
//CREATE A POST
app.post("/post/create",async(req,res)=>{
    const post = await Post.create(req.body);
    res.send(post);
})
//UPDATE A POST BY ID
app.post("/post/update/:id",async(req,res)=>{
    const post = await Post.findById(req.params.id);
    if(!post){
        res.status(404).json({
            success: false,
            message:"Product Not Found"
        });
    }
    post = await Product.findByIdAndUpdate(req.params.id, req.body);

    res.status(200).json({
        success:true,
        post,
    });
})
//DELETE A POST BY ID
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
// READ ALL POST
app.get("/post/allpost",async(req,res)=>{
    const post = await Post.find();
    if(!post){
        res.status(404).json({
            success: false,
            message:"Product Not Found"
        });
    }
    res.status(200).json({
        success: true,
        post
    });
})
// READ A POST BY ID
app.post("/post/:id",async(req,res)=>{
    const post = await Post.findById(req.params.id);
    if(!post){
        res.status(404).json({
            success: false,
            message:"Product Not Found"
        });
    }
    res.status(200).json({
        success: true,
        post
    });
});

app.listen(3001);