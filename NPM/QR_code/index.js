import fs from  "fs";
import qr from "qr-image";
import inquirer from 'inquirer';
import { url } from "inspector";

inquirer
  .prompt([
   {
    message:"type ur url here",
    name:"url"
   }
  ])
  .then((answers) => {
   const url = answers.url;
   var qr_svg = qr.image(url);
qr_svg.pipe(fs.createWriteStream('qr.png'));

fs.writeFile("url.txt",url , (err)=>{
    if (err) throw err;
    console.log("the file is saved ");
});
 
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });