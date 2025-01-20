import express from "express";
import { dirname } from "path";  
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url)); // it dymanical convert the path into the _dirname  
import bodyParser from "body-parser";

const app = express();
const port = 8000;
// get post patch are all route handle that react according to req that make by the server 
 
app.use(bodyParser.urlencoded({extended:true})) 

app.get("/", (req, res) => {
  //console.log(__dirname + "/public/index.html")
  res.sendFile(__dirname + "/public/index.html");
});
app.post("/submit",(req,res)=>{
  console.log(req.body)
  console.log(req.body.street)
})
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
