

const express = require('express');
const app = express();

//importacion de datos del backend
//en la vida real se usaría una base de datos
const {infoCursos} = require('./datos/cursos.js');


//Routers
// los routers permiten asignar una ruta relativa 
const routerProgramacion = require('./routers/programacion.js')
app.use('/api/cursos/programacion', routerProgramacion);

const routerMatematicas = require('./routers/matematicas.js')
app.use('/api/cursos/matematicas', routerMatematicas);

//ROUTING
app.get('/', (req, res) => {
    res.send('Mi primer server en Express')    
});


app.get('/api/cursos', (req, res) => {
    res.send(JSON.stringify(infoCursos))    
});


//lectura del puerto desde las variables de entorno
// si no fue asignada se le da un valor fijo
const PUERTO = process.env.PORT || 3000;    

app.listen(PUERTO, ()=>{
    console.log(`El servidor está escuchando en el puerto ${PUERTO}...`);
});
