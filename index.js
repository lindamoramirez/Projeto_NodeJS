const express = require('express')
const app = express()
const mongoose = require('mongoose');
const porta = 3000

app.use(express.json())

const modelo = require('./modelo/tarefa')

const crudes = require('./rotas')
crudes(app)

//conectando o index ao banco de dados usando o código a baixo
mongoose.connect('mongodb://localhost/tarefa').then(function(){
    console.log(`Conectado ao banco de dados`)

    app.listen(porta, function() {
        console.log(`rodando app na url http://localhost:${porta}/compras`)
    })

}).catch(function(erro){
    console.log(`Falha ao conectar-se:${erro}`)
})


 
app.get('/', function (req, res) {
  res.send('Hello World')
})

 
