



var a=require("http")
var b=require("url")
var d=require("fs")
a.createServer((req,res)=>{
    let c=b.parse(req.url,true)
    if(c.pathname=="/register" && req.method=="GET"){
        //// read or get the file  (readFile)
        
        // d.readFile("./index.html",(err,data)=>{
        //     if(err){
        //         res.write(error);
        //         res.end()
        //     }else{
        //         res.write(data);
        //         res.end()
        //     }
//...........................................................................
        /// create and updating a file (fs.appendFile)

        // d.appendFile("./index1.html","Updated text",(err,data)=>{
        //     if(err){
        //         res.write(error);
        //         res.end()
        //     }else{
        //         res.write("file is updated");
        //         res.end()
        //     }
//................................................................................................
////   work same as append ,, but replace the whole content with updated text (fs.writeFile) 

// d.writeFile("./index2.html","hello macha",(err,data)=>{
//     if(err){
//         res.write(error);
//         res.end()
//     }else{
//         res.write("file is updated");
//         res.end()
//     }
//....................................................................................................
///// to delete the file (fs.unlink)

// d.unlink("./index3.html",(err,data)=>{
//     if(err){
//         res.write(error);
//         res.end()
//     }else{
//         res.write("file is updated");
//         res.end()
//     }
//........................................................................................................
///// ro rename the file (fs.rename())

d.rename("./index.html","indexx.html",(err,data)=>{
    if(err){
        res.write(error);
        res.end()
    }else{
        res.write("file is updated");
        res.end()
    }
        })
}else if(c.pathname=="/register" && req.method=="POST"){
    console.log(req.url);
     res.write("method is post");
     res.end()
   
}else{
    res.write("wrong credentials");
    res.end()
}

}).listen(3003,()=>{
    console.log("hii server is running on 3003");
})
