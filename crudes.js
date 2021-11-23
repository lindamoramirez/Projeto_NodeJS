const mongoose = require('mongoose');
const compras = mongoose.model('compras');

exports.novaCompra= (req, res) => {
    let lista = new compras(req.body)

    lista.save((erro, sucesso) =>{
        if(erro){
            res.status(400).send({erro:'Por favor preencha todos os campos'})
        } else{
            res.status(201).send({sucesso})
        }
    })
}   
exports.busca =(req, res) =>{
    compras.find({},function(erro, compras){
        if(erro){
            res.status(404).send({erro:'Nenhum registro encontrado'})
        }else{
            res.status(302).send({compras})
        }

    })
}     
        