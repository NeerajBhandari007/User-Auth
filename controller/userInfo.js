const model=require("../model/userInfo")
const Info=model.userInfo;

exports.createInfo = (req, res) => {
    const Infoo= new Info(req.body)
    try{
      Infoo.save();
      res.status(201).json(Infoo);
    }catch(err){
      res.status(401).json(err);
    }
  };