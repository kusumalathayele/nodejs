


var a=require("http")
var b=require("url")
a.createServer((req,res)=>{
    let c=b.parse(req.url,true)
    console.log(c);
    console.log(c.query);
    if(c.pathname=="/register" && req.method=="GET"){
     res.write("method is get");
     res.end()
}else if(c.pathname=="/register" && req.method=="POST"){
     res.write("method is post");
     res.end()
}else{
    res.write("wrong credentials");
    res.end()
}

}).listen(3003,()=>{
    console.log("hii server is running on 3003");
})
