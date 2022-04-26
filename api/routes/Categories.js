const router = require("express").Router();
const Category= require("../models/Category")


router.post("/", async(req, res)=>{
try{
let category = new Category(req.body)
await category.save(category)
res.status(200).json(category)

} catch(err){
    res.status(500).json(err)
}

})




router.get("/", async(req, res)=>{
    try{
    let category = await Category.find()
res.status(200).json(category)
    } catch(err){
        res.status(500).json(err)
    }
    
    })
    

module.exports =router