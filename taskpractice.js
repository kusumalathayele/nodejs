
// task 1

// let express=require("express")
// let a= express()
// const {LocalStorage}=require("node-localstorage")
// a.use(express.json())

// let local=new LocalStorage("./localfile")
// a.get("/users",(req,res)=>{
//     local.setItem("value2",JSON.stringify(req.body))
//     const store=local.getItem("value2")
//     res.json({store})
// }).listen(3000,()=>{
//     console.log("port is running");
// })

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// task 2

// let express=require("express")
// app=express()
// let {LocalStorage}=require("node-localstorage")
// app.use(express.json())
// const localstorage= new LocalStorage("./localfile")
// app.post("/register",(req,res)=>{
//     localstorage.setItem("value3",JSON.stringify(req.body))
//   const store = localstorage.getItem("value3")
//   res.json({store})
// }).listen(3000,()=>{
//     console.log("port is running");
// }) 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// task 3

// const express = require("express");
// const { LocalStorage } = require("node-localstorage");
// const app = express();
// const localstorage = new LocalStorage("./localfile");

// app.use(express.json());
// app.post("/login", (req, res) => {
//     const data = JSON.parse(localstorage.getItem("value4")) 
//     const { username, password } = req.body;
//     const validation = data.find((val) => val.username === username && val.password === password);
//     if (validation) {
//         res.send("user already exists");
//     } else {
//         data.push(req.body);
//         localstorage.setItem("value4", JSON.stringify(data, null, 2));
//         res.send("registration successful");
//     }
// });
// app.listen(3000, () => {
//     console.log("port is running");
// });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// task 4

// math.js - User-defined module
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

module.exports = { add, subtract };
