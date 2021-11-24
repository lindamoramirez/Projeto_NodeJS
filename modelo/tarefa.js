const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tarefas = new Schema({
  tarefa: {type: String, required: true},
  descricao: {type : Array, required: true},
  feito: { type: Boolean, default:false},
  created_at: {type: Date, default: Date.now}
});

//criando a colletion com o nome "compras"
module.exports = mongoose.model("compras", tarefas)