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
#   - NodeJS
#   - NPM
#   - PNPM
#   - ViteJS
#   - TSNode
---



# Tipado de datos

TS asigna un tipo de datos a cada variable automáticamente al asignarle un valor. Este tipo de datos no puede ser alterado a posteriori. Por ejemplo, si una variable al ser creada se le asignó una cadena de texto esta se puede cambiar; sin embargo TS no permitirá guardar en la variable un numero entero, un flotante o cualquier otra cosa que no sea una cadena de caracteres.

Las variables se pueden tipar explicitamente mediante *interfases* con el operador **\:** . Por ejemplo, para una cadena de caracteres:

```bash
var texto : String = "mi texto";    //interfaz "String"
```

En el ejemplo 'String' es una interfase en tanto que 'string' es un dato primitivo.

## Tipos de datos

- Primitivos
  - string
  - number
  - boolean
  - undefined
  - null
  - void (vacío)
  - any (sólo para pruebas)
- Compuestos (estructurados)
  - object
  - array
  - enum
  - function 
- Definidos por el usuario
  - clase
  - interface
  - type
