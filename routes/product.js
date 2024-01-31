  const express=require("express");
  //to create route we need router
  const router=express.Router();
  //import controller
  const {createProduct}=require("../controllers/createproduct");
  const {getProduct, getProductById,getProductByName,getProductByDescription}=require('../controllers/getProduct');
  const {updateProduct}=require("../controllers/updateProduct");
  const {deleteProduct}=require("../controllers/deleteProduct");
  const {addVarient,removeVarient,updateProductVarient}=require("../controllers/varientController")
  //define api routes
  //this is the way to create post route
  //this way we map createTodo controller with route
  router.post("/createproduct",createProduct);
  //map the api
  router.get("/getproduct",getProduct);
  //thus is the way to write id
  //phir jo bhi id aap fetch karna chahe wo iss id ke andr aa ajyegi
  router.get("/getproductbyid/:id",getProductById);
  router.get("/getproductbyname",getProductByName);
  router.get("/getproductbydescription",getProductByDescription);
  router.put("/updateproduct/:id",updateProduct);
  router.put("/updateproductvarient",updateProductVarient);


  router.delete("/deleteproduct/:id",deleteProduct);
  router.post("/product/addvarient",addVarient);
  router.delete("/product/removevarient",removeVarient);

  module.exports=router;