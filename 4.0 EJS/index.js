import express from "express";
const app = express();
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url)); // it dymanical convert the path into the _dirname  
import bodyParser from "body-parser";
const port = 8000;



app.use(bodyParser.urlencoded({ extended: true }))

let infoday = false;

function weekinfo(req, res, next) {
    const dateInput = req.body["Date"]
    const date = new Date(dateInput);
    const day = date.getDay();
    if (day === 0 || day === 6) {
        infoday = true;
    }
    next();
}
app.use(weekinfo);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

app.post("/check", (req, res) => {
    if (infoday) {
        res.send(`<h1>Hey ! It's weekened, its time to do fun</h1>`)
    }
    else {
        res.send(`<h1>Hey ! It's weekday , its time to do hard work</h1>`)
    }
})

app.listen(port, () => {
    console.log(`server is listeing on ${port}`)
})