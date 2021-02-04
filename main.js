const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + "/public"))


app.get('/', (req, res) => {
    res.render("index", {
        titulo : 'Índice'
    })
})


app.get('/milco', (req, res) => {
    res.render("milco", {
        titulo : 'MILCO ventas de Café'
    })
})


app.get('/servicios', (req, res) => {
    res.render("servicios", {
        titulo: "Servicios"
    })
})


app.use((req, res, next) => {
    res.status(404).render("404", {
        titulo : "<b>Página 404 no moleste al animalito</b>",
        imagen : "https://placeimg.com/200/200/animals"
    })
})


app.listen(port, () => {
    console.log('Servidor a su servicio en el port', port)
})