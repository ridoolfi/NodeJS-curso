const express = require('express')
const app = express();
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize')

// Config
    // Template Engine
        
        app.engine('handlebars', handlebars.engine({defaulLayout: 'main'}))
        app.set('view engine', 'handlebars')
    // Conexão com banco de dados MySql
        const sequelize = new Sequelize('sistemadecadastro', 'root', 'toor', {
            host: "localhost",
            dialect: 'mysql'
        })
    
// Rotas
    app.get('/cad', function(req,res){
        res.render('formulario')
    })


app.listen(5101, function(){
    console.log("Servidor rodando na porta 5101")
});