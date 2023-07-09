const express = require("express");
const app = express();

const routes_product=require("./routes/product_api");

app.use(routes_product);

app.get("/about", (req, res) => {
    res.send("About route");
});
//api get 
app.get("/hello",(req,res)=>{
res.send("hello  from get api ")
})
const users=[
    {"name":"fyras","adresse":"Mahdia"},
    {"name":"youssef","adresse":"Mahdia"}
]
app.get("/all/users",(req,res)=>{
    res.send(users)
})

// route
/**
 * 7000
 //gestion users 
    GET:    /getallusers
    PUT:    /updat/users/{id}
    POST:    /adduser
    GET:    /getuser/{id}


 //gestion des produits 
 //gestion des commandes 
 //gestion des factures    



 */

app.listen(3000,() => console.log("Server listening at port 3000"));




