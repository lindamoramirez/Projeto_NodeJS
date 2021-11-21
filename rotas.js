
const crudes = require('./Crudes')

module.exports = function(app) {
    app.route('/compras').post(crudes.novaCompra)
    app.route('/compras').get(crudes.busca)
}