const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + "/public"))


app.get('/', (req, res) => {
    res.render("index", {
        title : 'Soy René Lozano, músico y docente profesional dedicado a la enseñanza de instrumentos de cuerda',
        subtitle : "Mis conocimientos están a tu disposición para convertirte en un futuro gran músico"
    })
})


app.get('/contacto', (req, res) => {
    res.render("contacto", {
        titulo : 'Contáctanos'
    })
})


app.get('/nosotros', (req, res) => {
    res.render("nosotros", {
        titulo: "Nosotros"
    })
})


app.use((req, res, next) => {
    res.status(404).render("404", {
        titulo : "Error 404 no se ha encontrado el recurso solicitado.<br> No moleste al animalito",
        imagen : "https://placeimg.com/200/200/animals"
    })
})


app.listen(port, () => {
    console.log('Servidor a su servicio en el port', port)
})