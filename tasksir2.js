


let express=require("express")
app=express()
let {LocalStorage}=require("node-localstorage")
app.use(express.json())
const localstorage= new LocalStorage("./localtask1")
app.post("/register",(req,res)=>{
    localstorage.setItem("value2",JSON.stringify(req.body))
  const store = localstorage.getItem("value2")
  res.json({store})
}).listen(3000,()=>{
    console.log("port is running");
}) 