//    simple api creating in express

// let express=require("express")
// var port=3006
// let app=express();

// app.get("/",(req,res)=>{
// res.send("hello")
// })
// app.listen(port,()=>{
//     console.log("hii islistening");
// })


///................................................
// for routes

// let express=require("express")
// let app=express();
// app.get("/",(req,res)=>{
//     res.send("hello world")
// })
// app.get("/roots",(req,res)=>{
//     res.send("hello roots")
// }).listen(3006,()=>{
//     console.log("port is working");
// })


// for routes in diff http methods

// let express=require("express")
// let app=express();
// app.get("/",(req,res)=>{
//     res.send("hello world")
// })
// app.post("/",(req,res)=>{
//     res.send("hello roots")
// }).listen(3006,()=>{
//     console.log("port is working");
// })
//...................................................




/////////////////////////////////////////////////////////////////////////////////////////////////////////////

        // middle ware
//....................................................
        // using app.use(exprsss.json());

// let express=require("express")
// let app=express();
// app.use(express.json());
// app.get("/",(req,res)=>{
//     res.send("hello world")
//     console.log(req.body);
// }).listen(3006,()=>{
//     console.log("port is working");
// })        
//..................................................

// app.use(req,res,next)
// let express=require("express")
// let app=express();
// app.use((req,res,next)=>{
//     var body=""
//     req.on("data",(chunk)=>{
//         body+=chunk.toString();
//     })
//     req.on("end",()=>{
//         console.log(body);
//     })
// })
// app.get("/",(req,res)=>{
//     res.send("hello world")
//     console.log(req.body);
// }).listen(3006,()=>{
//     console.log("port is working");
// })       

//....................................................................
// to store the data in body in an array which is register

// let express=require("express")
// let app=express();
// app.use(express.json());
// var register=[]
// app.get("/",(req,res)=>{
//     res.send("hello world")
//     console.log(req.body);
// })
// app.post("/",(req,res)=>{
//     register.push(req.body)
//     res.json(register)
// }) .listen(3006,()=>{
//     console.log("port is working");
// })  

//.................................................................

let express=require("express")
let app=express();
let fs=require("fs")
app.use(express.json());
var register=[]
app.get("/",(req,res)=>{
    fs.readFile("expressfile.js",(err,data)=>{
        res.status(200).json(JSON.parse(data));
    })
})
app.post("/",(req,res)=>{
    register.push(req.body)
    fs.writeFile("expressfile.js",JSON.stringify(register),(err)=>{
        res.json("successfully registered")
    })
}) .listen(3006,()=>{
    console.log("port is working");
}) 