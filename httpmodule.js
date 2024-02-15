// var a=require("./index.js")
// console.log(a);

// var a=require("./index.js");
// console.log(a.a());


// var a=require("http")
// console.log(a);
// a.createServer((req,res)=>{
//  res.write("hii: world");
//  res.end()
// }).listen(3003,()=>{
//     console.log("hii server is running on 3003");
// })
//..................................................................
// here we give the path 

// var a=require("http")
// var b=require("url")
// a.createServer((req,res)=>{
//     console.log(req.url);
//     let c=b.parse(req.url,true)
//     console.log(c);
//  res.write("world");
//  res.end()
// }).listen(3000,()=>{
//     console.log("hii server is running on 3000");
// })
//.....................................................................
// for routing
// var a=require("http")
// var b=require("url")
// a.createServer((req,res)=>{
//     let c=b.parse(req.url,true)
// if(c.pathname=="/register"){
//         console.log(req.url);
//         console.log(req.method);
//      res.write("path is register");
//      res.end()
// }else if(c.pathname=="/login"){
//     console.log(req.url);
//      res.write("path is login");
//      res.end()
   
// }else{
//     res.write("wrong credentials");
//     res.end()
// }
// }).listen(3003,()=>{
//     console.log("hii server is running on 3003");
// })

//.....................................................................................
// for routing but to display the data in th objects or arrays we use jspn.stringify


var a=require("http")
var b=require("url")
a.createServer((req,res)=>{
    let c=b.parse(req.url,true)
    if(c.pathname=="/register" && req.method=="GET"){
        console.log(req.url);
        console.log(req.method);
    
     res.write(JSON.stringify([{"profile":"hello"}]));
     res.end()

}else if(c.pathname=="/register" && req.method=="POST"){
    console.log(req.url);
     res.write(JSON.stringify([{"profile":"successfully logged in"}]));
     res.end()
   
}else{
    res.write("wrong credentials");
    res.end()
}
}).listen(3003,()=>{
    console.log("hii server is running on 3003");
})
