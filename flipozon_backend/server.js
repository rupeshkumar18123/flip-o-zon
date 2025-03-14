const express =require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("this is a server backend used for flip-o-zon");
});

app.listen(3000,()=>{
    console.log("server started at port number 3000");
})
