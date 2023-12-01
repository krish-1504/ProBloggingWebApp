const exp = require('express');
const app = exp();
const dbConnect = require("./config/dbConnect");
const Post = require('./model/post');
const cors = require("cors")
const postControllers = require("./controllers/postController")

app.use(cors());
app.use(exp.json());
app.use(exp.urlencoded({ extended: true }));
dbConnect();

app.use(postControllers);


app.get("/",(req,res)=>{
    res.send("hiiiiii")
})






app.listen(3000);