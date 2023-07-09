const express = require("express")
const router = express.Router()
//le router comprend le format json 
router.use(express.json());
//get ALL Products 
router.get("/allProduct",(req,res)=>{
  res.send({"message":"getr all all products works fine "})
})

//get product by id 
router.get("/getProduct/:id",(req,res)=>{
    res.send({"message":"get product by id works fine "})
})

//POST
router.post("/createProduct", (req, res) => {
    console.log("request",req.body)
    res.send({ message: "Product created successfully" });
  })
  //PUT
  router.put("/updateProduct/:id", (req, res) => {
    //lecture id mel paramas
     const IdProduct=req.params.id;
     console.log("id product ",IdProduct);
    //lecture donne mel body
    console.log("request body MAJ",req.body)
    res.send({ message: "Product updated successfully" });
  })

  //Delete product 

module.exports = router




//Request
/**
  GET{}
  post{NAME :"iphone13" ,price:1200, mat:159}
  put/:id  {NAME :"iphone13" ,price:1500, mat:159}

  request : Body 
  request : params(na9rawha mel url )
 */


























