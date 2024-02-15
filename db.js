

let sql=require("mysql")
let con=sql.createConnection({
    host:"localhost",
    user:"root",
    password:"Kusuma@123",
    database:"kusuma"
})
con.connect(()=>{
    console.log("sql has been connected");
})
module.exports=con