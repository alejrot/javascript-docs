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


# Node Package Management (NPM)

Página oficial: [npmjs.com](https://www.npmjs.com)


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



!!! tip "Nodemon"

    Nodemon permite reiniciar la ejecución de Node con los cambios de los programas creados.

    Para instalarlo globalmente:

        npm install -g nodemon

    Para usarlo se llama a Nodemon en vez de a Node:

        nodemon <programa>.js 

