

const express = require("express");
const { LocalStorage } = require("node-localstorage");
const app = express();
const localstorage = new LocalStorage("./localtask1");
app.use(express.json());
app.post("/login", (req, res) => {
    const data = JSON.parse(localstorage.getItem("value3"));
    const { username, password } = req.body;
    const validation = data.find((val) => val.username === username && val.password === password);
    if (validation) {
        res.send("user already exists");
    } else {
        data.push(req.body);
        localstorage.setItem("value3", JSON.stringify(data, null, 2));
        res.send("registration successful");
    }
});
app.listen(3000, () => {
    console.log("port is running");
});






