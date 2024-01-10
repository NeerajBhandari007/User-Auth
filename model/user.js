const mongoose=require('mongoose');
const {Schema}=mongoose;

const userSchema=new Schema({
    user:{
        type: String, 
      } ,
    password:"String"
})

exports.user=mongoose.model("users",userSchema);