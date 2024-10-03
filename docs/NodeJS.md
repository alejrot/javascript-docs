
## [Volver al Indice](../Index.md#nodejs)


Referencia: Nodejs Curso Desde Cero, para principiantes - Fazt
https://www.youtube.com/watch?v=BhvLIzVL8_o
repositorio del curso:
https://github.com/FaztWeb/nodejs-course

Sitio oficial: 
https://nodejs.org


# NodeJS
Es un entorno de ejecución para crear aplicaciones de backend, de escritorio y aplicaciones móviles escritas en Javascript. Esto permite utilizar la ventana de comandos del sistema operativo en vez de un navegador de Internet. Está orientado a eventos asincronos.

(Los eventos asincronos se ejecutan independientemente del proceso principal de la aplicacion).
Basado en el motor V8 de Google. (El motor es el software que eejcuta código)


Para conocer la version de NodeJS instalada escribir en terminal:
```
node --version
```

## Ejecucion de rutinas
Para ejecutar desde terminal una rutina de javascript nos ubicamos en el directorio y ejecutamos:
```
cd <ruta_a_rutina>
node <mi_rutina.js>
```

## Consola
Cuando queremos interactuar con el usaurio se usa la consola.Ejemplo: escribir en la terminal un texto o valor de variable:
```
console.log("<texto>")
console.log(<variable>)
```

## Crear Modulos
Si deseamos crear modulos con constantes, funciones etc se crea un archivo con extension js que contenga todos los elementos que queremos reutilizar y al finalizar se los comparte con la instruccion exports, en forma de propiedades:
```
exports.<nombre_exterior> = <elemento_interno>;
```
Ejemplo: un módulo con una función y una constante
```
function Sumar(a,b){
    return a + b;
}
let PI=3.141592;
// se ponen a disposición los elementos de este módulo
exports.sumar = Sumar;  
exports.pi = PI;
```

Otra forma de hacer lo mismo es crear una constante objeto vacía, asignarle los elementos como métodos y luego exportar el objeto completo mediante 'module.exports'. Ejemplo:
```
const Mat =  {}; //constante elemento vacia
function sumar(a,b){
    return a + b;
}
let PI=3.141592;
//asignaciones a la constante
Mat.sumar = sumar;
Mat.pi = PI;
//exportacion
module.exports = Mat
```
Una variante más: exportar el objeto con los contenidos asignados dentro:
```
//.....
module.exports = {
  sumar : sumar,
  pi : pi
};
```
Para importar el módulo desde otro archivo se usa la instruccion require():
```
const <descriptor> = require('<ruta_absoluta>/<nombre_archivo>')
```
Si se desea especificar la ruta relativa debe indicarse con punto y barra:
```
const <descriptor> = require('./<ruta_relativa>/<nombre_archivo>')
```

Para poder usar esos elementos importados se los precede por el descriptor que se le asignó al módulo:
```
<descriptor>.<nombre_exterior>
```
Ejemplo: si el módulo del ejemplo anterior tiene como nombre de archivo 'modulo.js' se lo puede usar así:
```
const mi_modulo = require('./modulo.js');
console.log("suma: ",mi_modulo.sumar(3,4) );
console.log("pi: ", mi_modulo.pi);
```
Normalmente al descriptor se le pone el mismo nombre que al módulo para evitar confusiones.
También se puede usar al sintaxis desestructurada, dodne a cada elemento importado se le pone su nombre original directamente como descriptor. En el ejemplo previo:
```
const {suma , pi } = require('./modulo.js');
```

NodeJS trae un montón de módulos prearmados ('built-in') listos para usar. Su lista se consigue en la subsección de la API :
https://nodejs.org/dist/latest-v18.x/docs/api/
En la página de cada módulo se encuentra la lista de contenidos, como imoportarlo y como usarlo. Por ejemplo, el módulo del sistema operativo (OS):
https://nodejs.org/dist/latest-v18.x/docs/api/os.html
se importa con la siguiente instrucción:

    const os = require('node:os');

Algunos ejemplos de modulos comunes:
- http
- https
- fs (file system)
- os (operating system)
- path
- console
- process

El módulo 'console' es particularmente usado para imitar los mensajes de la consola integrada de los navegadores. Dispone de las funciones log(), warn(), error() ,todas ellas permiten escribir texto en pantalla. Para crear un reporte más específico de error se puede crear un objeto de error dentro:
```
console.error(new Error("HABEMUS ERROR!"));
```

El modulo 'process' da informacion de los procesos y permite algún nivel de injerencia.
Ejemplo: conocer leer los argumentos ('argv') al llamar a una rutina 
console.log(process.argv);
//la ruta de node es el elemento 0
//la ruta del programa es el argumento 1

El módulo 'os' da informacion sobre el sistema operativo, propiedades del usuario actual, etc.


El modulo 'timers' permite introducir temporización. PRincipales funciones:
- **setTimeout() :** impone un retardo en milisegundos antes de ejecutar una función. Uso:
  ```
  setTimeout(funcion, retraso,argumento1,argumento2,...);
  ```
- **setInmediate() :** ejecuta una función de forma asincrónica justo después de finalizar la rutina síncrona actual. Uso:
  ```
  setInmediate(funcion,argumento1,argumento2,...);
  ```
- **setInterval() :** ejecuta una rutina infinitas veces con un intervalo de tiempo en milisegundos entre ejecuciones. Uso:
  ```
    setInterval(funcion, intervalo , argumento1, .... )
  ```

El módulo 'fs' accede a las funciones del sistema de archivos: leer, modificar, copiar, eliminar ,cambiar nombre. Todos los metodos de este módulo son asíncronos por defecto. Para volverlos sincrónicos se añade 'Sync' al final de sus nombres. Ejemplo:
```
fs.rename() //renombreado (asincrono)
fs.renameSync() //renombrado sincrono
```
Ejemplo: lectura de archivo HTML en el directorio.
```
const fs = require('fs');
fs.readFile('index.html','utf-8',(err,contenido) =>{
    if(err){
        throw err;
    }
    console.log(contenido);
});
```
Ejemplo: renombrado de 'index.html' a 'main.html';
```
const fs = require('fs');
var origen = 'index.html'
var destino = 'main.html'
fs.rename(origen,destino, (err) =>{
  if (err){
  throw err;ç
  }
  console.log('Nombre cambiado exitosamente');
});

//Creación / reescritura de archivo
fs.writeFile(archivo,contenido, (err) =>{
  if (err){
  throw err;
  }
  console.log('Creación / reescritura exitosa');
});

//añadir contenido al final de un archivo
fs.appendFile(archivo,contenido, (err) =>{
    if (err){
    throw err;
    }
    console.log('Añadido exitoso');
});

//eliminar archivo
fs.unlink(archivo, (err) =>{
    if (err){
    throw err;
    }
    console.log('Archivo eliminado);
});

```


## Ejecucion asincronica
NodeJS intenta ejecutar las llamadas al sistema de modo asincróno. Por ejemplo si creamos un archivo: 
```
const fs = require('fs');
//llamada al sistema operativo para crear un archivo
fs.writeFile('./texto.txt','mi comunicado ',function (err){
    if (err){
        console.log(err);
    }else{
        console.log("archivo creado!")
    }        
}) 
//rutinas siguientes
console.log("Fin de rutina de archivo")
```
Se verá que la rutina da el mensaje de finalización antes que el mensaje de creación exitosa.
Sin embargo es posible ejecutar las llamadas al sistema de modo bloqueante. **REVISAR**




Ejemplo Aplicacion: servidor HTTP sencillo
```
const http = require('http');

puerto=9999;

const handleServer = function (req, res){
    res.writeHead(200,{'content-type': 'text/html'});
    res.write('<h1>Hola Mundo desde NodeJS</h1>');
    res.end();
} 

const server = http.createServer(handleServer);

server.listen(puerto,function (){
    console.log("Servidor en puerto: ", puerto);
})
```




## Node Package Management (NPM)
Página oficial: https://www.npmjs.com
Los paquetes NPM se instalan desde la terminal así:
```
npm install <nombre_paquete>
```
Para definir también el número de versión se usa el arroba:
```
npm install <nombre_paquete>@<numero_version>
```
para instalar un paquete como dependencia de desarrollo:
```
npm install <paquete> --save-dev
```
Para desinstalar un paquete existente se usa el comando uninstall:
```
npm uninstall <nombre_paquete>
```
Los paquetes se instalan en el directorio de trabajo.
Para cargar usar los paquetes en el proyecto hay que importarlos:
```
const <descriptor> = require(<nombre_paquete>)
```

Para crear un archivo con toda la informacion de un proyecto (nombre,version,rutina principal, dependencias, etc) se usa el comando init:
```
npm init
```
En consola empiezan a requerirse al usuario los nombres del paquete, numero de versión, etc. Al terminar se crea el archivo package.json con toda la informacion dada. Si en cambio se desea crear el archivo con todos sus valores predeterminado la instruccion para ello es:
```
npm init --yes
```
El archivo JSON creado servirá para la instalacion en el servidor definitivo con el comando install:
```
npm install
```
y para ejecutar se usa el comando start:
```
npm start
``` 
Prestar atencion dentro del archivo package.json a la seccion script:
  ```
  "scripts": {
    "start": "node <principal>.js"
  },
  ```
Pueden añadirse más comandos al paquete con nombres alternativos. Por ejemplo, creamos un comando adicional llamado 'develop' en el JSON:
  ```
  "scripts": {
    "start": "node <principal>.js",
    "develop": "node <auxiliar>.js"
  },
  ```
y para poder ejecutarlo es necesario usar el comando RUN:
```
npm run develop
```
En cambio la rutina principal se sigue ejecutando directamente con START:
```
npm start 
```
el archivo 'package-lock.json' describe el arbol generado y las guarda para futuras instalaciones.


**Evento** --> Accion realizada en al aplicacion. Es una accion que desencadena un proceso
Node está basado en eventos asincronos

**Emmiter** --> Emisor
Son objetos que emiten eventos y llaman a funciones especificas cuando ocurren.

## Module Events
- Definir
- Emitir
- Escuchar


### Emitir Eventos

Primero se importa el modulo *events* dándole un nombre de clase y se crea un emisor de eventos:
```
const <clase_eventos> = require('events')
const <nombre_emisor> = new <clase_eventos>();
```
Luego se define los eventos, con sus funciones asociadas:
```
<nombre_emisor>.on (<nombre_evento>, (<argumentos>) =>{
  //rutina de la funcion flecha creada
})
```
Para invocar el evento se escribe:
```
<nombre_emisor>.emit(<nombre_evento>,<argumentos>)
```


## Promesas
Es un objeto que representa el resultado o error de una operación asíncrona.

Tres estados posibles:
- pendiente (pending)
- cumplida (fulfilled)
- rechazada (rejected)

La promesa se asocia a un *callback function*. La función callback se pasa como argumento a otra función para que la ejecute.

```
const promesaCumplida = false;
const miPromesa = new Promise((resolve,reject) =>{
  set Timeout(()=>{
    if (promesaCumplida){
      resolve("Hecho!");
    } else{
      reject("Rechazado");
    }
  },3000);    //3 segundos
});

const promesaCumplida = (valor) => {
  console.log(valor);
};

promesaRechazada = (valor) =>{
  console.log(valor);
}

miPromesa.then(promesaCumplida , promesaRechazada);
```

Las promesas rechazadas se pueden manejar con el metodo .catch() : 

```
miPromesa.then(promesaCumplida).catch(promesaRechazada);
```
**REVISAR**

**chaining promises** 

**async await**
ejemplo:
```
async function realizarPedido(producto){
  try{
    const respuesta = await ordenarProducto(producto);
    const respuestaProcesada = await procesarPedido(respuesta);
  }catch(error){  
    //rutina error
  }
}
```
## Modelo Cliente-Servidor
HTTP define el formato de los mensajes entre servidor y cliente
(HyperText Transfer Protocol )


Protocolo: conjunto de reglas que permiten transmitir la información.


### Solicitudes HTTP (request)
- métodos HTTP
- camino (path)
- version HTTP
- headers
- body 

### Métodos HTTP
- GET  --> solicitar recurso especifico
- POST --> crear recurso especifico
- PUT  --> modificar recurso especifico
- DELETE --> eliminar recurso especifico
- otros

### Respuesta HTTP (response)
- metodos HTTP
- camino (path)
- version HTTP
- headers
- body 

### Codigos de estado

Son numeros que indican si se completó correctamente la solicitud http o no
respuestas:
- informativas: 1xx
- satisfactorias: 2xx
- redirecciones: 3xx
- errores de clientes: 4xx
- errores de servidores: 5xx

Más frecuentes:
- 200 OK
- 400 bad Request
- 404 Not Found
- 500 Internal Server Error


## Módulo HTTP
Módulo de NodeJS dedicado al protocolo HTTP
Iimportación:

    const http = require('http');

Crear servidor:
```
const servidor = http.createServer((req, res) =>{
  console.log("Nueva solicitud")
  res.end("Hola mundo!");
});
```
Poner al servidor a escuchar:
```
const PUERTO = 3000;
servidor.listen( PUERTO , ()=>{
  console.log(`Servidor escuchando, http://localhost:${PUERTO}`)
})

```

### req y res
- req: *request*
- res: *response*

Las solicitudes (req) tienen varios métodos para leerlas:
```
req;  //valores del request
req.url;      //URL
req.method;   //método: GET, POST, PUT, DELETE, etc 
req.headers; //Encabezamiento 
req.statusCode; //código de estado : 200, 404 etc
```
La respuesta del servidor (res) se puede consultar y también configurar:
```
res.setHeader('content-type','application/json'); //ejemplo asignacion
res.getHeaders(); //consulta
```

### Estructura URL

**URL** (*Uniform Resource Locator*) direccion de un recurso web

Estructura:

- protocolo : HTTP u otros
- subdominio
- dominio : referencia unica a un sitio web 
- camino (path): archivo o directorio del servidor. Puede incluir parámetros.

parametros query
Los parámetros de query (busqueda) se usan para obtener contenido dinámico. van atrás de un signo de interrogación:

    <dominio>/<path>?<parametro1=valor1>&<parametro2=valor2>&...

Ejemplo: búscar 'opera' en DuckDuckGo

    https://duckduckgo.com/?q=opera&t=opera&ia=web



## Módulo URL

    const <descriptor> = new URL('<direccion_completa>');


```
<descriptor>.hostname;
<descriptor>.pathname;
<descriptor>.searchParams;
```
Los parametros de la URL se pueden consultar con el sub metodo get:
```
<descriptor>.searchParams.get(<parametro>);
```





## Nodemon

Nodemon permite reiniciar la ejecución de Node con los cambios de los programas creados.

Para instalarlo globalmente:

    npm install -g nodemon

Para usarlo se llama a Nodemon en vez de a Node:

    nodemon <programa>.js 


## Introduccion a JSON
JSON es un formato de texto usado para almacenar y transportar informacion. Nos permite alamcenar objetos de JS en texto.

Para leer un archvo JSON preexistente se puede usar el *require()*:
```
const objeto = require('./archivo.json')
```
Para convertir un objeto a texto se usa el metodo *stringify()*:
```
texto = JSON.stringify(objeto);
```
para convertir de texto a objeto se usa el metodo *parse()*:
```
objeto = JSON.parse(texto);
```

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
operaciones basicas realizables con la informacion almacenada.

**API**

**REST (*Representational State Transfer*)**
estilo de arquitectura de software para sistemas hipermedia distribuidos.

Express se importa tipicamente como:

  const express = require('express')

para definir el nombre del descriptor del server creado: 

    const <descriptor> = express();


---
---

## [Volver a Inicio](#nodejs)

## [Volver al Indice](../Index.md#nodejs)
