  //import the model
  const productModel=require("../models/product");
  //define route handler which handles the route
 exports.createProduct = async (req,res)=>{
    try {
        //extract title and description from req body
        const{productName,productPrice,productDescription}=req.body;
        //create a new todo object and insert it ina deata base
        //for insert we writetodo.create()
        const response=await productModel.create({productName,productPrice,productDescription});
        //send a json with a success
        res.status(200).json(
            {
                success:true,
                data:response,
                message:"created successfully"
            }
        );

        
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
  