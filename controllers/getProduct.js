//for get routes we create another controller gettodo.js
//and import this controller in routes 
const productModel=require("../models/product");
  //define route handler which handles the route
 exports.getProduct = async (req,res)=>{
    try {
        //fetch all todo items from the database
        const products=await productModel.find({});
        //using empty bracket we cna find all the items in db
        //response 
        res.status(200)
        .json({
            success:true,
            data:products,
            message:"entire product data",
        })
        
        
    } catch (error) {
        console.error(error);
        console.log(error);
        res.status(500).json({
            success:false,
            data:"server error",
            message:error.message,
        })
    }

 }
  //another way to fetch item on basis of id 
  exports.getProductById = async (req,res)=>{
    try {
        //extract todo item on bases of id 
        const id =req.params.id;
        const product=await productModel.findById({_id:id});
        //if data not found
        if(!product){
            return res.status(404).json({
                success:false,
                message:"No data is found",
            })
        }
        //data found
        res.status(200)
        .json({
            success:true,
            data:product,
            message:`product data of ${id} id is found`,
        })
        
        
    } catch (error) {
        console.error(error);
        console.log(error);
        res.status(500).json({
            success:false,
            data:"server error",
            message:error.message,
        })
    }

 }
 exports.getProductByName = async (req,res)=>{
    try {
        //extract todo item on bases of id 
        const {productName} =req.body;
    
            const product = await productModel.findOne({ productName: productName });
            if (product) {
              res.json({
             success:true,
             product:product,
             message:"we find the product of this name "
              
              });
            } else {
              res.status(404).json({ message: `Product of name ${productName} is not found` });
            }
         
          }
        
     catch (error) {
        console.error(error);
        console.log(error);
        res.status(500).json({
            success:false,
            data:"server error",
            message:error.message,
        })
    }

 }
 //get product by description 
 exports.getProductByDescription = async (req,res)=>{
    try {
        //extract todo item on bases of id 
        const {productDescription} =req.body;
    
            const product = await productModel.findOne({ productDescription: productDescription });
            if (product) {
              res.json({
             success:true,
             product:product,
             message:"we find the product of this name "
              
              });
            } else {
              res.status(404).json({ message: `Product of description ${productDescription} is not found` });
            }
         
          }
        
     catch (error) {
        console.error(error);
        console.log(error);
        res.status(500).json({
            success:false,
            data:"server error",
            message:error.message,
        })
    }

 }
