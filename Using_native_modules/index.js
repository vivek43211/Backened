let fs =  require("fs")

// fs.writeFile("message.txt","hello world !!",(err)=>{
// if(err) throw err ;
// console.log("file has been saved");
// })

// fs.readFile("./message.txt",(err, data)=>{
// if(err)throw err;
// console.log(data);
// })

//to change the buffet data into string we have to give a encoding coe like utf8
fs.readFile("./message.txt","utf8",(err, data)=>{
    if(err)throw err;
    console.log(data);
    })

fs.appendFile("./message.txt" , "data to add using append" , (err)=>{
    if(err) throw err;
    console.log("file is updated");
})