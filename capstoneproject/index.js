import express from "express";
import axios from "axios";
import bodyprase from "body-parser"

const app = express();
const port = 3000;

app.use(bodyprase.urlencoded({ extended: true })); 
app.use(express.static("public"));

const random = Math.floor(Math.random() * 400 )+1 ;
const api ={
    joke : "https://v2.jokeapi.dev/joke/Any",
    dogs : "https://dog.ceo/api/breeds/image/random",
    cats : `https://http.cat/${random}`,

}
app.get("/", (req, res) => {
    res.render("index.ejs", { data: null, error: null, apiType: null });
  });

app.post("/fetch", async (req, res) => {

    const{ apiType} = req.body;
    console.log(apiType)
  try {
    const result = await axios.get(api[apiType]);
    console.log(result.data)
    res.render("index.ejs", { data: result.data, error: null, apiType });
  } catch (error) {
    console.log(error.result.data);
    res.status(500);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});