var http = require("http");

function onRequest(request, response) {
    console.log("A user made a request" + request.url);
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("I am a simple Node server!");
    response.end();
}

//Create a server and listen for requests on this port
http.createServer(onRequest).listen(8888);
console.log("Server is now running...");
