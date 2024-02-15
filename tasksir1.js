let express=require("express")
app=express()
const {LocalStorage}=require("node-localstorage")

app.use(express.json())
const  localstorage= new LocalStorage("./localtask1")
app.get("/users",(req,res)=>{
    localstorage.setItem("value1",JSON.stringify(req.body))
    const store=localstorage.getItem("value1")
    res.json({store})
}).listen(3000,()=>{
    console.log("port is runnig");
})