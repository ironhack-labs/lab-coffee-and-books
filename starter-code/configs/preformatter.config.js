const path = require('path');

module.exports = app => {
app.use(require('node-sass-middleware')({
    src: path.join(__dirname, '..', 'public'), //añadido el '..'
    dest: path.join(__dirname,'..', 'public'),
    sourceMap: true
}));

}