import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;
// connecting the pgadmin server
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "Permalist",
  password: "",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [];
//define the get to render the data from pgadmin and send it to add in items 
app.get("/", async(req, res) => {
  const result = await db.query("SELECT *  FROM items")
   items =result.rows;
  res.render("index.ejs", {
    listTitle: "Today",
    listItems: items,
  });
});

// to add data into the existing database we use the insert 
app.post("/add", async(req, res) => {
  const item = req.body.newItem;
  //console.log(item);
  await db.query("INSERT INTO items (title) VALUES ($1)",[item]);
  items.push({ title: item });
  res.redirect("/");
});

app.post("/edit", async(req, res) => {
  const itemtitle  = req.body.updatedItemTitle;
  const itemid  = req.body.updatedItemId;
  console.log(itemtitle);
  console.log(itemid)
  await db.query("UPDATE items SET title = $1 WHERE id = $2",[itemtitle,itemid])
  res.redirect("/")
});

app.post("/delete", async(req, res) => {
  const deleteid = req.body.deleteItemId;
  console.log(deleteid)
  await db.query("DELETE FROM items WHERE id = $1",[deleteid])
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
