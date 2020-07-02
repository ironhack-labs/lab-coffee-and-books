const path = require('path')

module.exports = app => {
    app.use(require('node-sass-middleware')({
        src: path.join(__dirname, '..', 'public'),  /// SI ALGO FALLA MIRAR ESTOS PUNTOS
        dest: path.join(__dirname, '..', 'public'),
        sourceMap: true
    }))
}