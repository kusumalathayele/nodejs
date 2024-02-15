

let express=require("express")
app=express()
const {LocalStorage}=require("node-localstorage")
app.use(express.json())

const localstorage = new LocalStorage("./localfile")

app.get("/",(req,res)=>{
 localstorage.setItem("value",JSON.stringify(req.body))
    const storedvalue = localstorage.getItem("value")
    res.send({storedvalue})
    }).listen(3000,()=>{
        console.log("port is running");
    })




