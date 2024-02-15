

let express=require("express")
let app=express()
let con=require("./task4sql.js")
app.use(express.json())

app.post("/register",(req,res)=>{
const {username,password,email}=req.body
    con.query("create database latha",(err,data)=>{
        console.log(data);
        console.log("database is created")
    })
    con.query("use latha",(err)=>{
        console.log(err);
        console.log("latha database is using");
    })
    con.query("create table student(username varchar(50), password varchar(50) , email varchar(40))",(err,data)=>{
        console.log(data);
        console.log("table is created")
    })
    const insertQuery = "INSERT INTO student (username,password,email) VALUES (?, ?, ?)";
    con.query(insertQuery,[username,password,email],(err,data)=>{
        if (err) {
            console.error('Error registering user:', err);
            res.status(500).send("Error registering user");
          } else {
            console.log("User registered successfully");
            res.status(200).send(data);
          }
    })
})
app.post("/login",(req,res)=>{
    const {username,password,email}=req.body
    const selectQuery = "SELECT * FROM student WHERE username=? AND password=? AND email=?";
    con.query(selectQuery, [username,password,email], (err, result) => {
      if (err) {
        console.error('Error logging in:', err);
        res.status(500).send("Error logging in");
      } else {
        if (result.length > 0) {
          res.status(200).send("Login successful");
        } else {
          res.status(401).send("Invalid name or contact");
        }
    }
})
})
app.get("/users",(req,res)=>{
    const selectAllQuery = "SELECT * FROM student";
    con.query(selectAllQuery,(err,data)=>{
      if (err) {
        console.error('Error fetching users:', err);
        res.status(500).send("Error fetching users");
      } else {
        res.status(200).json(data);
      }
    });
}).listen(3000,()=>{
    console.log("port is running");
})