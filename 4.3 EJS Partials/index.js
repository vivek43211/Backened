import express from "express";
import bodypraser from "body-parser"

const app = express();
const port = 8000;
app.use(bodypraser.urlencoded({extended:true}))

app.use(express.static("public"));
app.get("/",(req,res)=>{
  res.render("index.ejs")
})
app.get("/about",(req,res)=>{
  res.render("about.ejs")
})
app.get("/contact",(req,res)=>{
  res.render("contact.ejs")
})

/* Write your code here:
Step 1: Render the home page "/" index.ejs
Step 2: Make sure that static files are linked to and the CSS shows up.
Step 3: Add the routes to handle the render of the about and contact pages.
  Hint: Check the nav bar in the header.ejs to see the button hrefs
Step 4: Add the partials to the about and contact pages to show the header and footer on those pages. */
app.post("/submit",(req,res)=>{
console.log("name of sender is " + req.body.name + "\n email adreess is :" + req.body.email + "\nrthe comment is :" +req.body.text);
res.render("contact.ejs")
})
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
