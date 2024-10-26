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


# Eventos y promesas



## Eventos

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


