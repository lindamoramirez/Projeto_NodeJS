const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tarefas = new Schema({

  description: {type : String, required: true},
  done: { type: Boolean},
  created_at: {type: Date, default: Date.now}
});

//criando a colletion com o nome "compras"
module.exports = mongoose.model("compras", tarefas)