//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
const app = express();
import { dirname } from "path";  
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url)); // it dymanical convert the path into the _dirname  
import bodyParser from "body-parser";

const port = 8000;

var userIsAuthorised = false;

app.use(bodyParser.urlencoded({extended:true})) 
function getpassword (req, res , next){
//console.log(req.body)
const password = req.body["password"];
if(password === "ILoveProgramming" ){
userIsAuthorised = true;
}
next()
}

app.use(getpassword);
app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/index.html")
})

app.post("/check",(req,res)=>{
if (userIsAuthorised) {
    res.sendFile(__dirname + "/public/secret.html")

}
else{
    res.sendFile(__dirname + "/public/index.html")
}
})

app.listen(port,()=>{
    console.log(`server is listeing on ${port}`)
})