const http = require("http");
const fs = require("fs")


// http.createServer((req , res)=>{
// //console.log("req is required ");
// fs.appendFile("log.txt",`${Date.now()} : ${req.url} New Req is recieved \n`,(err , data )=>{
//     res.end("hello from this side ") // optional we can write here too but wee use to prefer res.write 
// } )
// //console.log(req)

// }).listen(8000 , ()=> console.log("server is call"))

http.createServer((req,res)=>{
   
    const log = `${Date.now()} : ${req.url} New Req is recieved \n`;
    fs.appendFile("log.txt",log , (err ,data)=>{
        switch (res.url) {
            case "/":
                res.write("here is the answer home page");
                res.end()
                break;
                case "/about":
                res.write("here is the answer about page");
                res.end()
                break;
                case "/contact":
                res.write("here is the answer conatct page");
                res.end()
                break;
        
            default:
                res.write("404");
                res.end()

                break;
        }
    })
    
}).listen(8000, ()=>console.log("server is called"))