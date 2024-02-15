
let sql=require("mysql")
let b=sql.createConnection({
    host:"localhost",
    user:"root",
    password:"Kusuma@123",
    database:"latha"
})
b.connect(()=>{
    console.log("connection is successfull");
})
module.exports=b