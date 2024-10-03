const express = require('express');

const {programacion} = require('../datos/cursos').infoCursos;


const routerProgramacion = express.Router() ;
    
routerProgramacion.get('/', (req, res) => {
    res.send(JSON.stringify(programacion))    
});

// uso de parametros de ruta
// el parametro se marca con los dos puntos (:)
routerProgramacion.get('/:lenguaje', (req, res) => {
    //extraemos el parametro URL de la request
    const lenguaje = req.params.lenguaje ; 
    const resultados = programacion.filter(curso => curso.lenguaje === lenguaje)
    
    if (resultados.length === 0){
        return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
    }
    
    // parametro de query
    if (req.query.ordenar === 'vistas'){
        return res.send(JSON.stringify(resultados.sort((a, b) => b.vistas - a.vistas)));
    }
    
    res.send(JSON.stringify(resultados))    
});

// uso de parametro de ruta DOBLE
routerProgramacion.get('/:lenguaje/:nivel', (req, res) => {
    //extraemos el parametro URL de la request
    const lenguaje = req.params.lenguaje; 
    const nivel = req.params.nivel;
    const resultados = programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel)
    
    if (resultados.length === 0){
        return res.status(404).send(`No se encontraron cursos de ${lenguaje} de nivel ${nivel}`);
    }
    
    res.send(JSON.stringify(resultados))    
});


// MIDDLEWARE
// habilitar  procesamiento de JSON
routerProgramacion.use(express.json());

// POST (agregado de datos)
routerProgramacion.post('/', (req, res) => {
    // lectura del contenido enviado al sever
    let cursoNuevo = req.body;
    // guardado temporal en el objeto de datos
    // (NO se hizo validación de datos alguna)
    programacion.push(cursoNuevo);      
    res.send(JSON.stringify(programacion))
});


// PUT (modificacion de datos)
// la data a recibirse debe estar COMPLETA
// la data nueva REEMPLAZA por completo a la anterior
routerProgramacion.put('/:id', (req,res) => {
    const cursoActualizado = req.body;
    const id = req.params.id;

    const indice = programacion.findIndex(curso => curso.id == id); //se compara 'int' con 'string'

    // indice no encontrado --> -1
    if (indice >= 0){
        programacion[indice] = cursoActualizado;

    }
    res.send(JSON.stringify(programacion));
})


// PATCH (parche)
routerProgramacion.patch('/:id', (req,res) => {
    const infoActualizada = req.body;
    const id = req.params.id;

    const indice = programacion.findIndex(curso => curso.id == id); //se compara 'int' con 'string'

    // indice no encontrado -> -1
    if (indice >= 0){
        const cursoAModificar = programacion[indice];       // copia del elemento
        Object.assign(cursoAModificar, infoActualizada);    // 
    }
    res.send(JSON.stringify(programacion));
})



// DELETE 
routerProgramacion.delete('/:id', (req,res) => {
    const id = req.params.id;

    const indice = programacion.findIndex(curso => curso.id == id); //se compara 'int' con 'string'

    // indice no encontrado -> -1
    if (indice >= 0){
        programacion.splice(indice, 1); // elimina UN elemento, indicado por 'indice'
    }
    res.send(JSON.stringify(programacion));
})












module.exports = routerProgramacion;