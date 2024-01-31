const ProductModel=require("../models/product");
  //define route handler which handles the route
 exports.deleteProduct = async (req,res)=>{
    try {
        const {id}= req.params;
        await ProductModel.findByIdAndDelete({_id:id});
        res.status(200).json(
            {
                success:true,
                message:"deleted successfully"
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
  