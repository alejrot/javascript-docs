---
tags:
#   - HTML5
#   - JavaScript
  # - CSS
#   - YAML
#   - MkDocs
#   - Python
#   - Docker
#   - Podman
  # - MarkDown
  - TypeScript
  # - CSV
#   - Bash
#   - Express
#   - ReactJS
  # - NodeJS
  # - NPM
#   - PNPM
#   - ViteJS
#   - TSNode
---


# Clases


## Definición

De las clases se tipean tanto los *atributos* como los *constructores*:
```typescript
class Persona{
    nombre: string;
    constructor(nombre: string){
        this.nombre = nombre;
    }
    saludar(){
        console.log('Hola, mi nombre es ${this.nombre}.')
    }
}
```
Nota al pie: 'atributos' son las variables internas de la clasa, las cuales serán afectadas por los métodos; en tanto que los 'constructores' son las variables auxiliares que se usan para inicializar la *instancia* (es decir la estructura de datos con la forma y métodos de la clase)


## Encapsulamiento y genéricos

El encapsulamiento consiste en hacer privados a los atributos de las clases y acceder a ellos únicamente mediante los métodos dedicados para ello, llamados genéricamente 'getters' (lectura: *get*) y 'setters' (escritura: *set*)

```typescript
// T es un genérico
class Sorteo<T>{

    private ticket?: T;

    constructor(
        private nombre: string
        ){ }  

    setTicket(ticket: T){
        this.ticket = ticket;
    }

    getTicket(){
        return this.ticket
    }

    public sortear(): string {
        return `Para ${this.nombre} el ticket es ${this.ticket}`
    }
}
```

En ejemplo se usa un *genérico* como argumento entre \<\>. Este argumento se tipea recién al crear las *instancias* de la clase, es decir al darle uso. 
En el ejemplo siguiente: tickets T numéricos
```typescript
// Ticket numérico y nombre de beneficiario
let sorteo = new Sorteo< number >("Manolo")
//Asignacion de valor
sorteo.setTicket(7)
console.log(sorteo.sortear())
```
El ticket también podría ser un texto, por ejemplo un alfanumérico. En tal caso al genérico se lo tipea como string: 

```typescript
let sorteo = new Sorteo< string >("Paco")
sorteo.setTicket("S3")
console.log(sorteo.sortear())
```

