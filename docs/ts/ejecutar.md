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
  - TypeScript
  # - CSV
#   - Bash
#   - Express
#   - ReactJS
  # - NodeJS
  # - NPM
#   - PNPM
#   - ViteJS
  - TSNode
---


# Ejecutar




## Compilacion

## Extensión y compilacion

Los programas de TypesCript se guardan con la extension **.ts**. 

La compilacion del código TS se hace con el comando *tsc*:
```bash
tsc <nombre_rutina>.ts
```
Esto crea un archivo JS con el mismo nombre de archivo y la rutina adaptada a JavaScript.


## Interpretado

En cambio, para interpretar directamente el código se usa el comando *ts-node*:
```bash
ts-node <nombre_rutina>.ts
```


## Modo observador

El modo observador se usa añadiendo la opcion -w (*watch*) a la compilación
```bash
tsc <nombre_rutina>.ts -w
```
Esto permite ver los cambios sobre la rutina JS casi en tiempo real. Muy útil para desarrolladores web.

## Inicializar proyectos

Para trabajar con múltiples archivos TS y también para decidir opciones de compilación es mejor inicializar un proyecto dentro del directorio de trabajo:
```bash
tsc -init
```
Esto crea un archivo *tsconfig.json* con las opciones de compilacion prearmadas. Una vez realizado este paso se puede usar el modo observador sobre TODOS los archivos con el comando:

```bash
tsc -w
```


## Proyectos con React

ReactJS puede usarse con TS. 
Mediante Vite se puede crear un proyecto con la opción 'TypeScript+ SWC',
se instalan los paquetes necesarios localmente (`npm install`)
y el resultado es un proyecto cuyo código de componentes se guarda en archivos con extensión *.tsx* en vez de *.jsx*.

Al finalizar el trabajo se construye el proyecto con `npm run build`.
