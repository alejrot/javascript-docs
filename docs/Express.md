# EXPRESS
Sitio oficial: [https://expressjs.com](https://)

Express es un framework que sirve para crear servidores.
Se instala localmente vía NPM:
```
npm install express --save
```
La opcion --save obliga a actualizar el archivo JSON con la nueva dependencia.

breves definiciones:

**CRUD**

CRUD son las operaciones basicas realizables con la informacion almacenada en base de datos.
- Create
- Read
- Update
- Delete


**API**

**REST (*Representational State Transfer*)**
Estilo de arquitectura de software para sistemas hipermedia distribuidos.


**Importar**

Express se importa tipicamente como:

  const express = require('express')

para definir el nombre del descriptor del server creado: 

    const <descriptor> = express();

## Crear proyecto

Crear proyecto:

    npm init

Se abre el ayudante para hacer las configuraciones iniciales. La info se guarda en el archivo 'package.json'.

    npm install express

     

## importar

```javascript
const express = require('express');
const app = express();

//importacion de datos del backend
//en la vida real se usaría una base de datos
const {infoCursos} = require('./cursos.js');

console.log(infoCursos);
console.log(typeof(infoCursos));
```

## Apertura de puerto

```javascript
//lectura del puerto desde las variables de entorno
// si no fue asignada se le da un valor fijo
const PUERTO = process.env.PORT || 3000;    

app.listen(PUERTO, ()=>{
    console.log(`El servidor está escuchando en el puerto ${PUERTO}...`);
});


```




## estructura de datos

```javascript
let infoCursos = {
    programacion: [
        {
            id: 1, 
            titulo: 'Aprende Python',
            lenguaje: 'python',
            vistas: 5000,
            nivel: 'basico'
        },
        {
            id: 2, 
            titulo: 'Python intermedio',
            lenguaje: 'python',
            vistas: 13201,
            nivel: 'intermedio'
        },
        {
            id: 3, 
            titulo: 'Aprende javaScript',
            lenguaje: 'javascript',
            vistas: 22651,
            nivel: 'basico'
        }
    ],
    matematicas: [
        
        {
            id: 1, 
            titulo: 'Aprende Calculo',
            tema: 'calculo',
            vistas: 2911,
            nivel: 'basico'
        },             
        {
            id: 2, 
            titulo: 'Aprende Algebra',
            tema: 'algebra',
            vistas: 3141,
            nivel: 'intermedio'
        } 
    ]
}

module.exports.infoCursos = infoCursos;
```



## routing

```javascript
// Routing
// ruta raiz
app.get('/', (req, res) => {
    res.send('Mi primer server en Express')    
});

app.get('/api/cursos', (req, res) => {
    res.send(JSON.stringify(infoCursos))    
});

app.get('/api/cursos/programacion', (req, res) => {
    res.send(JSON.stringify(infoCursos.programacion))    
});


app.get('/api/cursos/matematicas', (req, res) => {
    res.send(JSON.stringify(infoCursos.matematicas))    
});
```

## parametros de ruta


```javascript
// uso de parametros de ruta
// el parametro se marca con los dos puntos (:)
app.get('/api/cursos/programacion/:lenguaje', (req, res) => {
    //extraemos el parametro URL de la request
    const lenguaje = req.params.lenguaje ; 
    const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje)
    
    if (resultados.length === 0){
        return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
    }
    
    res.send(JSON.stringify(resultados))    
});

// uso de parametro de ruta DOBLE
app.get('/api/cursos/programacion/:lenguaje/:nivel', (req, res) => {
    //extraemos el parametro URL de la request
    const lenguaje = req.params.lenguaje; 
    const nivel = req.params.nivel;
    const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel)
    
    if (resultados.length === 0){
        return res.status(404).send(`No se encontraron cursos de ${lenguaje} de nivel ${nivel}`);
    }
    
    res.send(JSON.stringify(resultados))    
});

// uso de parametros de ruta
// el parametro se marca con los dos puntos (:)
app.get('/api/cursos/matematicas/:tema', (req, res) => {
    //extraemos el parametro URL de la request
    const tema = req.params.tema ; 
    const resultados = infoCursos.matematicas.filter(curso => curso.tema === tema)
    
    if (resultados.length === 0){
        return res.status(404).send(`No se encontraron cursos de ${tema}`);
    }
    
    res.send(JSON.stringify(resultados))    
});
```

## parametros query

    http://localhost:3000/api/cursos/programacion/python?ordenar=vistas


```javascript
// uso de parametros de ruta
// el parametro se marca con los dos puntos (:)
routerProgramacion.get('/:lenguaje', (req, res) => {
    //extraemos el parametro URL de la request
    const lenguaje = req.params.lenguaje ; 
    const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje)
    
    if (resultados.length === 0){
        return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
    }
    
    // parametro de query
    if (req.query.ordenar === 'vistas'){
        return res.send(JSON.stringify(resultados.sort((a, b) => b.vistas - a.vistas)));
    }
    
    res.send(JSON.stringify(resultados))    
});
```




## routers en express

Creacion:
```javascript
//Routers
// los routers permiten asignar una ruta relativa 
const routerProgramacion = express.Router() ;
app.use('/api/cursos/programacion', routerProgramacion);

const routerMatematicas = express.Router() ;
app.use('/api/cursos/matematicas', routerMatematicas);

```

Uso:
```javascript
// app.get('/api/cursos/programacion', (req, res) => {
routerProgramacion.get('/', (req, res) => {
    res.send(JSON.stringify(infoCursos.programacion))    
});
```


## dividir en archivos
El programa se puede repartir en varios archivos para facilitar l ordenamiento.

En el ejemplo previo:
rutina principal: 
```javascript
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
```
rutina para la sección 'matematicas':
```javascript
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
```
rutina para la sección 'programacion':
```javascript
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

module.exports = routerProgramacion;
```

### **MIIDDLEWARE**

Las funciones midleware se ejecutan:
- Despues de recibir una solicitud
- Antes de enviar una respuesta
Tienen acceso al objeto de la solicitud, al objeto de la respuesta y a la funcion ***next()***, la cual se llama para ejecutar el proximo middleware

Ejemplo:
```javascript
// MIDDLEWARE
// habilitar  procesamiento de JSON
routerProgramacion.use(express.json());
```




## post put patch delete



Hacer una request (envio) tipo POST desde archivo HTML. Extension util: 'REST Client'

archivo 'index.http'

```http
POST http://localhost:3000/api/cursos/programacion HTTP/1.1
Content-Type: application/json

{
    "id":4,
    "titulo": "Aprende Node.js",
    "lenguaje": "javascript",
    "vistas": 45982,
    "nivel": "basico"
}
```

Las rutinas de procemiento usadas son:

```javascript
// POST (agregado de datos)
routerProgramacion.post('/', (req, res) => {
    // lectura del contenido enviado al sever
    let cursoNuevo = req.body;
    // guardado temporal en el objeto de datos
    // (NO se hizo validación de datos alguna)
    programacion.push(cursoNuevo);      
    res.send(JSON.stringify(programacion))
});
```

```javascript
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
```

```javascript
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
```

```javascript
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
```




### importante


Por defecto la funcion send() convierte la data a JSON , por ello llamar
```javascript
res.send(JSON.stringify(programacion)); //redundante
res.send(programacion);
```
Otra funcion muy popular para enviar la data asegurando la conversion a JSON es la funcion json():
```javascript
res.json(programacion);
```

Es posible enviar respuestas vacías con el metodo .end():
```javascript
res.status(404).end();
```

