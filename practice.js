


let express=require("express")
let fs=require("fs")
let b=express()
b.use(express.json())
let c=[]
b.get("/",(req,res)=>{
    fs.readFile("./taskindex.json",(err,data)=>{
        console.log(JSON.parse(data));
        res.json(data)
    })
})
b.post("/root",(req,res)=>{
    c.push(req.body)
    fs.writeFile("./taskindex.json",JSON.stringify(c),(err,data)=>{
        res.send("successfully send")
 })
})

.listen(3006,()=>{
    console.log("port is runnig");
})