

// let express=require("express")
// let fs=require("fs")
// let b=express();
// let axios=require("axios")
// let arr=[]
// b.use(express.json())
// b.get("/",(req,res)=>{
// axios.get("https://fakestoreapi.com/products")
// .then(response=>{
//     // console.log(response.data);
//     res.json(response.data)
//     // res.send(response.data)
//     arr.push(response.data)
//     // console.log(arr);
//     fs.writeFile("apifile.js",JSON.stringify(arr),(err,data)=>{
//         if(err){
//             console.log("error");
//         }
//     })
// })
// }).listen(3006,()=>{
//     console.log("port is running");
// })

//..............................................................................................
// send the sum of ages of people in the given array

let express=require("express")
b=express();
c=[{name:"kusuma",age:22},{name:"madhu",age:2},{name:"latha",age:2}]
b.get("/",(req,res)=>{
    var count=0
for(i=0;i<c.length;i++){
    count+=c[i].age
}
// res.send(count)  we cant send the numeric values to the response we send the data as strings so we use either 2 of them
// res.send(count.toString())
res.json(count)
}).listen(3006,()=>{
    console.log("port is runnig");
})

//......................................................................................................................................
// in Nodejs

// let a=require("http")
// c=[{name:"kusuma",age:22},{name:"madhu",age:2},{name:"latha",age:2}]
// a.createServer((req,res)=>{
//       var count=0
// for(i=0;i<c.length;i++){
//     count+=c[i].age
// }
//     res.write(count.toString())
//     res.end()
// }).listen(3006,()=>{
//     console.log("port s running");
// })

//.....................................................................................................

// const express=require("express");
// let app=express()
// let port=3003;
// app.get("/",(req,res)=>{
//     let a=[{ name:"madhu",age:21},{name:"kusu", age:20}, {name:"swathi",age:20}]
//     let sum=a.reduce((total,val)=>{
//         return total+val.age},0)
//         res.send(sum.toString())
//     }).listen(port,()=>{
//         console.log("port is running")
//      })