const productModel=require("../models/product");
const productVarient=require("../models/productVarient");
exports.addVarient=async (req,res)=>{
    try{
    //fetch data from the body
    const {productid,varientName,varientPrice,varientDescription}=req.body;
    //here is another way of saving data in db
    const varient=new productVarient({
        productid,varientName,varientPrice,varientDescription
    });
    //save like in db
    const savedVarients=await varient.save();
    //ab hme post wale db ke ander change karna hai ki ha iss post pe like hua hai aur phi jo naya
    //findandupdate do operator pehla post ki id liya hai jisko wo find karega then uske likes array ko is like se update karega
    //push ke bad jo maine productvarient lika hai usko wahi likhna hai jo nam product ke model me defined ho
    //apne man se nhi 
    //we use push to add or update 
    const updatedProduct=await productModel.findByIdAndUpdate(productid,{$push:{productVarient:savedVarients._id}},{new:true})
    .populate("productVarient")
    .exec();
    
    res.json({
        post:updatedProduct,
        message:`product varient is created inside product of id ${productid}`
    });
    }
    catch(error){
       return res.status(500).json({
        error:"error while add varient in product",
       })
    }
}  
//removing a varient
exports.removeVarient= async (req,res)=>{
    try{
        const{productid,varientid}=req.body;
        //below code means jids bhi entry me ye dono parameter match kr jayenge use delete kr do 
        const deletedVarient=await productVarient.findOneAndDelete({productid:productid,_id:varientid});
        //we use pull to remove something
        //update the product collection after deleting varient 
        //jiski id deleted varient ke id kme equal ho 
        const updatedProduct=await productModel.findByIdAndUpdate(productid,{$pull:{productVarient:deletedVarient._id}},{new:true});
        res.json({
            post:updatedProduct,
            message: `varient of product id ${productid} is successfully removed `
        });
    }
    catch(error){
        return res.status(400).json({
            error:"error while removing product varient",
        })
    }
}
//update varient of a  particular product 
exports.updateProductVarient = async (req,res)=>{
    try {
       //another way of getting id 
       
       //gettind the update title and body form req body;
       const {productid,varientid,varientName,varientPrice,varientDescription}=req.body;
       const varientProduct=await productVarient.findByIdAndUpdate(
          {_id:varientid},
          //db me title and des ye wala dal do 
          {varientName,varientPrice,varientDescription,updatedAt:Date.now()},
          ///make this updatedvarient in product 
       )
     const varientUpdatedProduct=await productModel.findByIdAndUpdate(productid,{$push:{productVarient:varientProduct._id}},{new:true})
    .populate("productVarient")
    .exec();
       res.status(200).json({
          success:true,
          data:varientUpdatedProduct,
          message:` varient updated successsfuly`,
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