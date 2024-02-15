

var a=require("http")
var b=require("url")
var d=require("fs")
 a.createServer((req,res)=>{
var c=b.parse(req.url,true)
console.log(c);
if(c.pathname=="/register" && req.method=="GET"){
    res.write("hello")
    res.end()
}else if(c.pathname=="/register" && req.method=="POST"){

var body="";
req.on("data",(chunk)=>{
    body+=chunk.toString();
})
req.on("end",()=>{
    console.log(body);
    d.writeFile("./index2.html",body,(err)=>{
        console.log(err)
        res.write("hii")
        res.end()
    })
    
})
}else{
    res.write("error credentials")
    res.end();
}

 }).listen(3003,()=>{
    console.log("port is runnig");
 })