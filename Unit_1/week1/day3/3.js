// http { hyper text  transfer protocall } it is use to make build connection between client and server .

const http = require("http");

const server = http.createServer((request,response) => {
    response.end("welcome to my nodejs server");
});

server.listen(2006);





