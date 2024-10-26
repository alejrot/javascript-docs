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

# Introduccion a JSON


JSON es un formato de texto usado para almacenar y transportar informacion. 
Nos permite almacenar objetos de JS en texto.

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
