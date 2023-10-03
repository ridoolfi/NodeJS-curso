const express = require('express')
const app = express();

app.get("/", function(req, res){
    res.send("Seja bem vindo ao meu app utilizando Express.")
});

app.get("/sobre", function(req, res){
    res.send("Minha Pagina Sobre")
})

app.get("/blog", function(req,res){
    res.send("Bem vindo ao meu blog!")
})




app.listen(5101, function(){
    console.log("Servidor rodando na porta 5101")
});