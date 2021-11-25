const crudes = require('./Crudes')

module.exports = function(app) {
    app.route('/compras').post(crudes.novaCompra)
    app.route('/compras').get(crudes.busca)
    app.route('/compras/:id').get (crudes.buscaId)
    app.route('/compras/:id').put(crudes.atualizar)
    app.route('/compras/:id').delete(crudes.apagar)
    
}
