
async function sendData(){
    const email=document.getElementById("username").value
    const pass=document.getElementById("password").value
    const obj={
        user: email,
        password:pass
    }
    try{
        const res=await axios.post("/login",obj)
        //console.log(res.data);
        window.location.replace("/Home.html")
    }catch(err){
        alert("wrong credentials")
    }
}

async function createUser(){
    const email=document.getElementById("username").value
    const pass=document.getElementById("password").value
    const repeat_pass=document.getElementById("again_password").value
    if(pass===repeat_pass){
        const obj={
            user: email,
            password:pass
        }
        try{
            const res=await axios.post("/users/",obj)
            window.location.replace("/")
            //console.log(res.data);
        }catch(err){
            //console.log(err)
        }
    }else{
        alert("password not matching")
    }
    
}

async function logOut(){
    try{
        const res=await axios.post("/logout")
        //console.log(res.data);
        window.location.replace("/")
    }catch(err){
        //console.log(err);
    }
}

async function createMessage(){
    const namee=document.getElementById("name").value
    const mail=document.getElementById("email").value
    const comp=document.getElementById("company").value
    const pho=document.getElementById("phone").value
    const mes=document.getElementById("message").value
    
    
    const obj={
        name: namee,
        email:mail,
        company:comp,
        phone:pho,
        message:mes
    }
    try{
        const res=await axios.post("/userInfo",obj)
        //console.log(res.data);
        location.reload();
        alert("Message Submitted Our Team will Contact You")

    }catch(err){
        //console.log(err);
    }
}