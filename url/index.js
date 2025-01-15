const http = require("http");
const fs = require("fs")
const url = require("url")

http.createServer((req, res) => {
    const qdata = url.parse(req.url, true).query;
    const log = `${Date.now()} : ${req.url} New Req is recieved \n`;
    console.log(qdata)

    fs.appendFile("log.txt", log, (err, data) => {
        switch (req.url) {
            case "/":
                res.writeHead(200, { "Content-Type": "text/plain" });
                res.end("heelo there");
                break;
            case "/about":
                res.writeHead(200, { "Content-Type": "text/plain" });
                res.end("heelo there its home page ");
                break;
            case "/contact":
                res.writeHead(200, { "Content-Type": "text/plain" });
                res.end(`hello there it is ${qdata.pathname}`);
                break;

            default:
                res.writeHead(404, { "Content-Type": "text/plain" });
                res.end("404 not found ");
                break;
        }
    })

}
).listen(8000, console.log("Server has been called on port 8000"))