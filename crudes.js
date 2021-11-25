const mongoose = require('mongoose');
const compras = mongoose.model('compras');

//codigo para inserir dados POST

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

//codigo para buscar GET

exports.busca =(req, res) =>{
    compras.find({},function(erro, compras){
        if(erro){
            res.status(404).send({erro:'Nenhum registro encontrado'})
        }else{
            res.status(302).send({compras})
        }

    })
} 

//codigo para buscar GET por id

exports.buscaId = (req, res) => {
    const lista = compras.findOne({'_id': req.params.id}, function(erro, tarefa) {
        if(erro) {
            res.status(404).send({erro: 'Tarefa não encontrada'})
        }else{
            res.status(302).send({tarefa})
        }
    })
}    
//codigo para atualicacao update
exports.atualizar = (req, res) => {
    compras.findOneAndUpdate({_id: req.params.id}, req.body, {new:true}, function(erro, atualizado){
        if(erro){
            res.status(400).send({erro: 'Não autualizado'})
        }else{
            res.status(201).send("Tarefa atualizada")
        }
    })
}
//codigo para deletar, apagar,  DELETE
exports.apagar = (req, res) => {
    compras.deleteOne({_id: req.params.id}, function(erro, deletado) {
        if(erro) {
            res.status(400).send({erro: 'Tarefa não encontrada'})
        }else{
            res.status(202).send('Tarefa deletada')
        }
    })
}

