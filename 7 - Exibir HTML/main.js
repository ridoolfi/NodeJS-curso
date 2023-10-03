const express = require('express')
const app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html")
});

app.get("/sobre", function(req, res){
    res.sendFile(__dirname + "/html/sobre.html")
})

app.get("/blog", function(req,res){
    res.send("Bem vindo ao meu blog!")
})

app.get("/ola/:nome/:cargo/:naturalidade", function(req, res){
    res.send(`<h1>Olá ${req.params.nome}</h1><h2> Seu cargo é: ${req.params.cargo}</h2><h3>Sua naturalidade ${req.params.naturalidade}</h3>`)
})



app.listen(5101, function(){
    console.log("Servidor rodando na porta 5101")
});