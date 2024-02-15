

// let express=require("express")
// let a=express()
// let jwt=require("jsonwebtoken")
// var secretkey="kusuma"
// const obj=[{id:1,username:"latha",dob:25-10-2002}];

// function generateToken(obj){
// const token = jwt.sign({ id: obj.id, username:obj.username, dob:obj.dob }, secretkey, { expiresIn: '1m' });
// return token;
// }
// a.get("/",(req,res)=>{
//     // const s=generateToken(obj)
//     // res.json(s)
//     res.json({token:generateToken(obj)})
// }).listen(3000, () => {
//     console.log("Server is running");
// })


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// To regenerate a token back to its original element or content depends on how the token was generated

let express=require("express")
let a=express()
const jwt = require('jsonwebtoken');

const payload={userId:"123456",username:"kusuma"};
const secretKey = 'your_secret_key';
a.get("/",(req,res)=>{
    // const token = jwt.sign({userId:payload.userId,username:payload.username}, secretKey, { expiresIn: '1h' });
    const token=jwt.sign(payload, secretKey, { expiresIn: '1h' })
    console.log('Generated Token:', token);
    res.json(token)

    jwt.verify(token, secretKey,function(err,decoded){
        console.log('Decoded Payload:', decoded);
    })
})
a.listen(3006,()=>{
    console.log("port is running");
})

