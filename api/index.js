const express = require('express')

const app = express()
const dotenv =require("dotenv")
const mongoose = require("mongoose")
const authRoute =require("./routes/auth")
const userRouter =require("./routes/usersro")
const postRouter =require("./routes/posts")
const CategoryRoute=require("./routes/Categories")
const reviewRouter = require("./routes/review")
const cors = require("cors");
const path = require('path')
const multer =require('multer')
dotenv.config();
app.use(express.urlencoded({extended: true}))
app.use(express.json())

//we make the public folder to this iamges
app.use("/images", express.static(path.join(__dirname, "/images")))

 mongoose.connect(
    process.env.MONGO_URL,
    async(err)=>{
        if(err) throw err;
        console.log("conncted to db")
    }
)

app.use(cors());

// multer
const storage = multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null, "images")
    },

    filename:(req, file, cb)=>{
        cb(null, req.body.name)
    },

});


const upload =multer({storage: storage})

app.post("/api/upload", upload.single("file"), (req,res)=>{
    res.status(200).json("file has been uploaded")
})


app.use("/api/auth", authRoute)
app.use("/api/user", userRouter)
app.use("/api/posts", postRouter)
app.use("/api/category", CategoryRoute)
app.use("/api/reviews", reviewRouter)




app.listen(process.env.PORT || 5000, ()=>console.log("backend server is runing"))
