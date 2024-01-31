const productModel=require("../models/product");
//define route handler which handles the route
exports.updateProduct = async (req,res)=>{
  try {
     //another way of getting id 
     const {id}=req.params;
     //gettind the update title and body form req body;
     const {productName,productPrice,productDescription}=req.body;
     const product=await productModel.findByIdAndUpdate(
        {_id:id},
        //db me title and des ye wala dal do 
        {productName,productPrice,productDescription,updatedAt:Date.now()},
     )
     res.status(200).json({
        success:true,
        data:product,
        message:`updated successsfuly`,
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
