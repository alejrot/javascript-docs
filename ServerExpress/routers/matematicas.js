const express = require('express');

const {matematicas} = require('../datos/cursos').infoCursos;

const routerMatematicas = express.Router() ;

routerMatematicas.get('/', (req, res) => {
    res.send(JSON.stringify(matematicas))    
});

// uso de parametros de ruta
// el parametro se marca con los dos puntos (:)
routerMatematicas.get('/:tema', (req, res) => {
    //extraemos el parametro URL de la request
    const tema = req.params.tema ; 
    const resultados = matematicas.filter(curso => curso.tema === tema)
    
    if (resultados.length === 0){
        return res.status(404).send(`No se encontraron cursos de ${tema}`);
    }
    
    res.send(JSON.stringify(resultados))    
});

module.exports = routerMatematicas;