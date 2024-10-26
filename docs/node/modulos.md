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

# Modulos

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


## Módulos prearmados


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
  throw err;
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