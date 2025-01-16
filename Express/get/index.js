import express from "express";  // expresss is like framewroks
const app = express();   // app is create to make to export all express function and methods
const port = 8000;

app.get("/",(req , res)=>{
    //console.log(req.rawHeaders);  give the deatils about request 
    res.send("hello world");
}) 
//"/" by default it take u to home page
app.get("/about",(req , res)=>{
    res.send(<h1>It is about us</h1>);
}) 
app.get("/contact",(req , res)=>{
    res.send(<h1>It is contact us</h1>);
}) 
app.listen(port , ()=>{
    console.log(`server is operting on ${port}`)
    console.log("https://localhost8000.com/")
})

// perefer to use the nodemon because that make easy by upadte the server without again callll server 