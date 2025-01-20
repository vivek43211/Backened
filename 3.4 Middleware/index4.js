import express from "express";
import { dirname } from "path";  
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url)); // it dymanical convert the path into the _dirname 
import bodyParser from "body-parser"; 
var bandName = "";

const app = express();
const port = 8000;
app.use(bodyParser.urlencoded({ extended: true }));

function logger (req , res , next ){
   console.log(req.body);
  bandName = req.body["street"] + req.body["pet"];
  next();
}

app.use(logger);
app.get("/",(req,res)=>{
 res.sendFile(__dirname + "/public/index.html");
})
app.post("/submit",(req,res)=>{
  //res.send("your band name is\n" + req.body.street )
  res.send(`<h1>your band name is : </h1> <h2> ${bandName}</h2>
  `)
})
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
