// let express=require("express")
// var a=express()
// a.use(express.json())
// let users=[{username:"madhu",pasword:123456,dob:6/11/2002},{username:"kusu",pasword:123456,dob:5/11/2002}]
// a.get("/users",(req,res)=>{
//     res.json(users)
// })
// a.listen(3003,()=>{
//     console.log("server is going")
// })

// let a=require("express");
// let b=a();
// let c=require("fs")
// let bb={
//     username:"kusuma latha",
//     password:"kl46",
//     dob:2002
// }
// b.get("/",(req,res)=>{
//     c.writeFile("kusu.js",JSON.stringify(bb),(err)=>{
//         if(err){
//             res.send("not ok");
//         }
//         else{
//             res.send("all ok");
//         }
//     })
// })
// b.listen(3004,()=>{
//     console.log("sky");
// })