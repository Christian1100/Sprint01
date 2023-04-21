const port = 3000;
http = require("http");
httpStatus = require("http-status-codes");

app = http.createServer();

app.on("request", (req, res) => {
    console.log(req.url);
    res.writeHead(httpStatus.OK, {
        "Content-Type": "text/html"
    });
    let responseMessage = "<h1>Willkommen beim Sprint01!</h1>";
    res.end(responseMessage);
});

app.listen(port);