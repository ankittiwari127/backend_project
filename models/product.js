const mongoose =require("mongoose");
const productSchema =new mongoose.Schema(
    {
        productName:{
            type:String,
            required:true,
            maxLength:50,
        },
        productDescription :{
            type:String,
            required:true,
        },
        productPrice :{
            type:Number,
            required:true,
        },
        productVarient:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"varient"
           }],
        createdAt:{
            type:Date,
            required:true,
            default:Date.now()
        },
        updatedAt:{
            type:Date,
            required:true,
            default:Date.now(),
        }

    }
); 
//todo ke naam se is model ko access kahi bhi karenge
module.exports=mongoose.model("product",productSchema);