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





### Funciones

En las funciones hay que tipar tanto los datos de entrada (*argumentos*) como los datos de salida (*valor de retorno*).

```typescript
function sumar(a: number,b: number): number{
    return a+b;
}
```

Las funciones flecha pueden tener retorno implicito (inferido por TS):

```typescript
const dividir = (a: number,b:number) => a / b;
```

Typescript permite usar argumentos opcionales marcados con '?':

```typescript
function saludar(nombre?: string): string {
    if (nombre!==undefined){
        return `Hola ${nombre}`
    } else{
        return "Hola Noname"
    }
}
```
y valores de defecto asignados tras el tipeo:

```typescript
const dividir = (a: number,b: number = 1) => a / b;
```
