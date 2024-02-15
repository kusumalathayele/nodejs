// for single file


// let express=require("express")
// let a=express();
// let multer=require("multer")
// const storage=multer.diskStorage({
//     destination:(req,file,cb)=>{
//         cb(null,"./files")
//     },
//     filename:(req,file,cb)=>{
//         cb(null,Date.now+"--"+file.originalname)
//     }
// })
// const upload=multer({storage:storage})
// a.get("/",upload.single("image"),(req,res)=>{
//     console.log(req.file);
//     res.send("success")
// }).listen(3006,()=>{
//     console.log("port is running");
// })


/////////////////////////////////////////////////////////////

let express=require("express")
let a=express();
let multer=require("multer")
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"./files")
    },
    filename:(req,files,cb)=>{
        cb(null,Date.now+"--"+files.originalname)
    }
})
const upload=multer({storage:storage})
a.get("/",upload.array("image"),(req,res)=>{
    console.log(req.files);
    res.send("success")
}).listen(3006,()=>{
    console.log("port is running");
})

