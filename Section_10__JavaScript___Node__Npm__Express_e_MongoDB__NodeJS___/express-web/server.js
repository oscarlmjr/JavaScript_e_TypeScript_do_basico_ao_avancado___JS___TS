const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const meuMiddleware = require('./src/middlewares/middleware');
// const { middlewareGlobal, outroMiddleware } = require('./src/middlewares/middleware');

app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.resolve(__dirname, 'public')));

// app.set('views', './src/views');
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Nossos próprios middlewares
app.use(meuMiddleware);
// app.use(middlewareGlobal);
// app.use(outroMiddleware);
app.use(routes);

// app.get('/testes/{:idUsuarios}{/:parametro}', (req, res) => {
app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});
