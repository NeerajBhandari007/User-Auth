require("dotenv").config();
const express=require('express');
const server=express();
const userController=require("./controller/user")
const userRouter = require('./routes/user')
const userInforouter = require('./routes/userInfo')
const mongoose =require("mongoose")
const passport=require("passport");
const session =require("express-session")
const LocalStrategy=require("passport-local").Strategy;
const model=require("./model/user")
const User=model.user;



server.use(express.json());
server.use(express.urlencoded({extended:true}))


server.use(
    session({
      secret: "SESSION_KEY",
      resave: false, // don't save session if unmodified
      saveUninitialized: true, // don't create session until something stored
    })
);





server.use(passport.initialize());
server.use(passport.session());


passport.use(new LocalStrategy({ usernameField: "user" },
    async function(user, password, done) {
      //console.log("entered strategy");
      //console.log({user, password});
      try{
        const userexist =await User.findOne({user:user});
        
        if (!userexist) { return done(null, false); }
        if (userexist.password!==password) { return done(null, false); }

        return done(null,userexist)
      }
      catch(err){
        return done(err);
      }
    }
  ));




passport.serializeUser(function (user, cb) {
  //console.log("serialize");
  //console.log(user);

  process.nextTick(function () {
    return cb(null, {user});
  });
});

passport.deserializeUser(function (user, cb) {
  //console.log("deserialize");
  //console.log(user);
  process.nextTick(function () {
    return cb(null, {user});
  });
});


server.use(express.static('public'));
server.post('/login',passport.authenticate('local'), userController.loginUser)
      .post('/logout',function logout(req,res){
        req.logout(function(err) {
          if (err) { return next(err); }
          res.json("logged out sucessfully");
        });
        //console.log("logged out sucessfully")
      })
      .get('/check',(req,res)=>{
        if(req.user){
          //console.log("user hai bro")
          res.json("user hai Bro")
        }else{
          //console.log("No user Bro")
          res.json("No user Bro")
        }
      })




server.use('/users',userRouter.router);
server.use('/userInfo',userInforouter.router);


main().catch((err)=>{
  //console.log(err);
})
async function main(){
  await mongoose.connect(process.env.MONGODB_URL);
  console.log('database connected')
}

server.get("/", (req, res) => {
  res.json({ status: "success" });
});

    


server.listen(process.env.PORT,()=>{
    console.log("server started")
})

