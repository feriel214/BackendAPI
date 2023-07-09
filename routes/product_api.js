const express = require("express")
const router = express.Router()

//get ALL Products 
router.get("/allProduct",(req,res)=>{
  res.send({"message":"getr all all products works fine "})
})

//get product by id 
router.get("/getProduct/:id",(req,res)=>{
    res.send({"message":"get product by id works fine "})
})

module.exports = router