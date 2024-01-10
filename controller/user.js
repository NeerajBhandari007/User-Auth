const model=require("../model/user")
const users=model.user;
const passport=require("passport");
exports.createUser = (req, res) => {
    const user= new users(req.body)
    try{
      user.save();
      res.status(201).json(user);
    }catch(err){
      res.status(401).json(err);
    }
  };
  
  exports.getAllUsers = async (req, res) => {
    const user=await users.find();
    
    res.status(201).json(user);
  };
  
  
  exports.loginUser=(req,res)=>{
    console.log("login sucessfull")
    res.json(req.user);
  }

