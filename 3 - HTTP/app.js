var http = require('http');

http.createServer(function(req, res){
    res.end("Hello World! Welcome to my node app.");
}).listen(5013);

console.log("O Servidor Esta rodando na porta 5013")


