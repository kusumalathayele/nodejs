
let express=require("express")
let a=express()
let bcrypt=require("bcrypt")
let fs=require("fs")
let jwt=require("jsonwebtoken")
a.use(express.json())
var saltrounds=10;
var secretkey="kusuma"
a.get("/register",(req,res)=>{
    var pass=req.body.password
    let obj=(req.body.dob)
    bcrypt.hash(pass,saltrounds,(err,hash)=>{
        if(err){
            console.log("error");
        }
        function generateToken(obj){
            const token=jwt.sign({obj:req.body.dob}, secretkey, { expiresIn: '1m' })
            return token
        }
        fs.writeFile("bfile.json",JSON.stringify({username:req.body.username,dob:generateToken(obj),password:hash}),(err,data)=>{
            if(err){
                res.send("error")
            }else{
                res.json({username:req.body.username
                    ,password:hash,
                    dob:generateToken(obj)})
            }
        })
    })
    }).listen(3000,()=>{
    console.log("port is running");
})


