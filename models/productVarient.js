const mongoose=require("mongoose");
//route handler
const productVarient=new mongoose.Schema({
   //here we know  kis post pe like kiya hai
    productid:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"product"
   } ,
   //kisne like kiya
   varientName:{
   type:String,
   required:true
   },
   varientPrice:{
      type:Number,
      required:true,
  },
   varientDescription:{
    type:String,
    required:true
   },
   //kya comment kiya
   
});
module.exports=mongoose.model("varient",productVarient);