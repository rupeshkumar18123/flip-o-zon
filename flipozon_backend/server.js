const express =require("express");
const fs = require("fs");
const path = require("path");
const route = require(path.join(routesPath, file));
const app = express();

app.get("/",(req,res)=>{
    res.send("this is a server backend used for flip-o-zon");
});
const routesPath = path.join(__dirname, "router");
fs.readdirSync(routesPath).forEach((file) => {
    app.use(route);
});
app.listen(3000,()=>{
    console.log("server started at port number 3000");
})
