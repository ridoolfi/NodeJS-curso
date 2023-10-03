var http = require('http')


http.createServer(function(req, res){
    res.end("Ola Mundo! Esse script foi feito para praticar a aula de http server")
}).listen(4047);

console.log("O server está aberto na porta 4047")