const express = require("express");
const app = express();

const routes_product=require("./routes/product_api");

app.use(routes_product);

app.use(express.json());


app.listen(3000,() => console.log("Server listening at port 3000"));




