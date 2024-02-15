

// var a=require("http")
// var b=require("url")
// a.createServer((req,res)=>{
// var c=b.parse(req.url,true)
//  console.log(c);
//  if(c.pathname=="/hello1"){
//     res.write("hello first routing")
//     res.end()
//  }else if(c.pathname=="/hello2"){
//     res.write("hello second routing")
//     res.end()
//  }else if(c.pathname=="/hello3"){
//     res.write("hello third routing")
//     res.end()
//  }else{
//     res.write("error credentials")
//     res.end()
//  }
// }).listen(3000,()=>{
//     console.log("port is running");
// })
//.......................................................................

// const a = require("http");
// const b = require("url");
// const d = require("fs");

// a.createServer((req, res) => {
//     const c = b.parse(req.url, true);
//     console.log(c);

//     const k = "hello=kusuma&hello12=latha";
//     const obj = {};
//     const l = k.split("&");
//     console.log(l);

//     l.forEach((val, ind) => {
//         console.log(val.split(":"));
//         const [key, value] = val.split(":");
//         obj[key] = value;
//     });

//     console.log(obj);
//     res.write(JSON.stringify(obj));

//     if (c.pathname === "/hello1") {
//         d.writeFile("./queryfile.html", JSON.stringify(obj), (err) => {
//             if (err) {
//                 res.write(err);
//                 res.end();
//             } else {
//                 res.write("file is updated");
//                 res.end();
//             }
//         });
//     } else if (c.pathname === "/hello2") {
//         d.readFile("queryfile.html", (err, data) => {
//             if (err) {
//                 res.write(err);
//                 res.end();
//             } else {
//                 res.write("file is read");
//                 res.end();
//             }
//         });
//     }
// }).listen(3000, () => {
//     console.log("port is running");
// });
//...........................................................

const { add, subtract } = require('./taskpractice.js');

console.log(add(5, 3)); 
console.log(subtract(5, 3)); 

