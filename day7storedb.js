
// let express=require("express")
// let app=express()
// let con=require("./db.js")
// app.get("/",(req,res)=>{
//     con.query("create database kusuma",(err,data)=>{
//         console.log(data);
//         console.log(err)

//         res.send("database created")
//     })
//     res.send("hello world")
// })
// app.listen(3006,()=>{
//     console.log("port is running");
// })

//////////////////////////////////////////////////////////////////////////

// let express=require("express")
// let app=express()
// let con=require("./db.js")
// app.use(express.json());
// app.get("/register",(req,res)=>{
//     console.log(req.body);
//     con.query("create database kusuma",(err,data)=>{
//         console.log(data);
//         console.log(err)
//           res.status(200).json({
//             "status":200,
//             data:data
//           })
//     })
// })
// app.listen(3006,()=>{
//     console.log("port is running");
// })

///////////////////////////////////////////////////////////////////

let express=require("express")
let app=express()
let con=require("./db.js")
app.use(express.json());
app.get("/sky",(req,res)=>{
  console.log(req.body);
  // var sql="CREATE TABLE coders (Lastname varchar(255),FirstName varchar(255))"
    // con.query(sql,(err,data)=>{
      con.query("insert into kusuma.coders set ?",req.body,(err,data)=>{
        console.log(err);
        console.log(data);
        res.status(200).json({
          "status":200,
        })
    })
})
app.get("/users",(req,res)=>{
con.query("SELECT * FROM kusuma.coders",(err,data)=>{
  if(err){
    res.status(400).send(err);
  }else{
    res.status(200).json(data)
  }
})

})
app.listen(3006,()=>{
    console.log("port is running");
})