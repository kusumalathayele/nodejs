

let express=require("express")
let bcrypt=require("bcrypt")
let a=express();
var plainpassword="kusuma"
var saltrounds=10
a.get("/",(req,res)=>{
    bcrypt.hash(plainpassword,saltrounds,(err,hash)=>{
        if(err){
            res.send(err)
        }else{
            res.json(hash)
        }
    })
})
a.listen(3006,()=>{
    console.log("port is running");
})

///////////////////////////////////////////////////////////////////////////

 // Comparing the original password with the hashed password

 
//  const express = require("express");
//  const app = express();
//  const bcrypt = require("bcrypt");
 
//  const password = "kusuma";
//  const saltround = 10;
//  app.get("/", (req, res) => {
//      bcrypt.hash(password, saltround, (err, hash) => {
//          if (err) {
//             console.log("error");
//          }else{
//             // res.json(hash)
//          }

//      bcrypt.compare(password, hash, (err, result) =>{
//              if (err) {
//              res.send("Error comparing passwords");
//              console.log("Error comparing passwords");
//              }
//               if(result){
//                 res.send(result);
//                 console.log(result);
//              }else{
//                 console.log("Password does not match!");
//              }
//          });
//      });
//  });
 
//  app.listen(3006, () => {
//      console.log("Port is running");
//  });
 