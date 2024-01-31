const express = require('express');
const app=express();
require("dotenv").config();
//load config from env
const PORT=process.env.PORT||4000;
//middleware to parse json body request
app.use(express.json());
//import routes for todo api
const productRoutes=require("./routes/product");
app.use("/api/v1",productRoutes);
//start server
app.listen(PORT,()=>{
    console.log(`server started successfully at ${PORT}`);
})
//connect database
const dbConnect=require("./config/database");
dbConnect();
//default route
app.get("/",(req,res)=>{
    res.send(`This is home page`);
})