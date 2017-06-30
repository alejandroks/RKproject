var http = require("http");

function start(route) {
    function onRequest(request, response) {
        console.log("Request received.");
        response.writeHead(200, {
            "Content-Type": "text/plain",
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
        });

        request.on('data', function (data) {
            route(data, response);
        });

        request.on('end', function () {
            response.end();
        });
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

exports.start = start;