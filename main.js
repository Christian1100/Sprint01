const port = 3000;
http = require("http");
httpStatusCodes = require("http-status-codes");
router = require("./router");
fs = require("fs");

htmlContentType = {
    "Content-Type": "text/html"
},

customReadFile = (file, res) => {
    fs.readFile(`./${file}`, (errors, data) => {
        if (errors) {
            console.log("Error reading the file...");
        }
        res.end(data);
    });
};
router.get("/", (req, res) => {
    res.writeHead(httpStatusCodes.OK, htmlContentType);
    customReadFile("views/index.html", res);
});

http.createServer(router.handle).listen(port);