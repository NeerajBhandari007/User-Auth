const mongoose=require('mongoose');
const {Schema}=mongoose;

const userInfoSchema=new Schema({
    name:String,
    email:String,
    company:String,
    phone:Number,
    message:String
})

exports.userInfo=mongoose.model("userInfo",userInfoSchema);