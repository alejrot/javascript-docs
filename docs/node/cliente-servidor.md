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


# Modelo Cliente-Servidor

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


