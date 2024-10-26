---
tags:
#   - HTML5
  - JavaScript
  # - CSS
#   - YAML
#   - MkDocs
#   - Python
#   - Docker
#   - Podman
  # - MarkDown
#   - TypeScript
  # - CSV
#   - Bash
#   - Express
#   - ReactJS
  - NodeJS
  - NPM
  - PNPM
  # - ViteJS
  # - TSNode
---





# Ejecucion asincronica

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

