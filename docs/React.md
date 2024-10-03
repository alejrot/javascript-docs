
fuente: https://www.youtube.com/watch?v=ladwC6Lrs-M&t=696s


# ViteJS

Página oficial: https://vitejs.dev/guide/

Vite es una herramienta que facilita crear proyectos de JavaScript y derivados. Además permite la compilación del proyecto.

## Crear proyecto con Vite

Para crear un nuevo proyecto con Vite desde NodeJS ejecutar en la terminal:
```bash
npm create vite@latest
```
1. La consola pedirá un nombre de proyecto y creará una carpeta con igual nombre. 
2. Se desplegará una lista para elegir un framework disponible para el proyecto (React, Vue, Svelte, etc)
3. Se desplegará una nueva lista desplegable para elegir usar entre JavaScript y TypeScript, con la opcion adicional de usar el traspilador SWC

Vite crea la carpeta del proyecto con un archivo *.gitignore* prearmado para no "subir" archivos superfluos al control de versiones y también crea un archivo package.json con las dependiencias del proyecto. 

Para *construir* el proyecto prearmado hay que entrar al directorio del proyecto:
```bash
cd <directorio_proyecto>
```
E instalar todas las dependencias requeridas localmente:
```bash
npm install
```



Si hay problemas persistentes con la instalacion escribir:
```bash
npm cache clean --force
npm install
```

## Modo Desarrollo (*dev*)

Para poner a prueba el proyecto, desde su directorio se ejecuta el comando: 
```bash
npm run dev
```
VITE actúa como servidor local que admite cambios del proyecto "en vivo", actualizándose con cada guardado de los archivos de proyecto. En consola se muestra la información de IP, puerto usado y opciones de ayuda del proyecto.

**HINT:** para interrumpir el modo de desarrollo escribir 'Ctrl'+'C'.


## Modo Producción (*build*)

Para publicar el proyecto primero hay que construirlo (*build*). Para ello se ejecuta el comando:
```bash
npm run build
```
Como resultado se creará dentro de la subcarpeta ***dist*** del proyecto los archivos definitivos para la puesta en produccion: 
- un único archivo HTML de maquetado;
- un único archivo CSS para los estilos;
- un único archivo de JavaScript reuniendo todas las rutinas del proyecto. 
  
Un ejemplo real de un proyecto construido:

| Archivo     | Tamaño       | 
| ----------- | ----------- | 
|dist/index.html                | 0.46 kB   | 
|dist/assets/index-7ea528fc.css | 0.15 kB   | 
|dist/assets/index-75012726.js  | 143.87 kB | 


 Estos archivos se copian al servidor final para que éste los proporcione al cliente.


# React

Pagina comunidad: https://react.dev

## Estructura y tipos de archivo
Los archivos del proyecto se reparten más o menos así:

    <proyecto>
        |--src
            |--main.jsx
            |--styles.css
            |-- (...)

        |--index.html
        |--.gitignore
        |--package.json
        |-- (...)

El archivo 'index.html' es el archivo auxiliar donde se inyectará el código del proyecto.

El código fuente del proyecto de React se guarda por defecto dentro de la carpeta 'src'.

***JSX*** es la extensión de los archivos de ReactJS: el archivo principal, los componentes a crear, etc. Los componentes usan un sistema de **etiquetas** similar al de HTML mezclado con funciones y rutinas al estilo JavaScript.

## Archivo main.jsx

*main.jsx* es el archivo principal del proyecto. Dentro de él se pueden inportar otros archivos del proyecto, por ejemplo la hoja de estilos principal:
```javascript
import './styles.css'
```
La importación de componentes creados en archivos JSX se hace así:
```javascript
//archivo 'MiComponente.jsx'
import { MiComponente} from "./MiComponente"
```

React renderiza  los componentes invocados para inyectarlos al DOM del archivo 
```javascript
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        // componentes en etiquetas, habitualmente autoconclusivas
        {...}
        { <MiComponente /> }
        {...}
    </React.StrictMode>
)
```
## Componentes 

Los componentes de ReactJS se escriben en archivos  JSX. 
Cada hoja de componentes  arranca con sus propias importaciones de componentes:
```javascript
    import React from 'react'
```
Cada componente puede tener su propia hoja de estilos:
```javascript
import './PrimerComponente.css'
```
Los componentes se exportan mediante funciones flecha como la mostrada a continuacion:
```javascript
export const MiComponente = () => {
    return (
        <div>MiComponente</div>
    )
}
```


En este ejemplo la función *return()* devuelve una única etiqueta de tipo HTML. 

Los componentes se nombran con convencion *PascalCase *: arrancan con mayusculas en cada palabra de su nombre.

### Fragment

ReactJS sólo permite devolver un único *elemento padre*, es decir no permite enviar varias etiquetas con igual jerarquía.
Si se requiere enviar varios elementos juntos hay que englobarlos con un par de *etiquetas vacías* ( **<>** y **</>**):
```html
<>  
    <h1> Titulo </h1> 
    <p> Descripcion <p> 
</>
```
Antiguamente se usaban etiquetas *fragment* pero se abandonaron a favor de las etiquetas vacías.


### Variables
para poder entregar valores de variables y de funciones a éstas se les debe rodear con *llaves* (**{}**).

Ejemplo: multiples etiquetas de retorno y lectura de una  variable.
```javascript
    const fecha = new Date() //variable 'objeto' con fecha actual

    export const PrimerComponente = () => {
        return (
            <>  
                <h1> Fecha de hoy </h1> 
                <p>{ JSON.stringify( fecha ) }<p> 
            </>
        )
    }
```

**Importante:** ReactJS **NO** permite que los componentes envíen objetos; sin embargo esta limitación se puede supera convirtiendo a cadena de caracteres: 
```javascript
JSON.stringify( <objeto> )
```

## Props

Las *propiedades* (props) son un mecanismo para **pasar informacion** de un *objeto padre* a un *objeto hijo*.

Las propiedades normalmente se pasan de forma *desestructurada*, esto es con los argumentos de las funciones flecha entre llaves. Ejemplo: 
```javascript
export const Propiedades = ({texto, numero}) => {
    return (
        <>  
            <h2>{ texto }</h2>
            <h2>{ numero }</h2>   
        </>
    )
}
```

Al componente se le pasan las propiedades por asignación explícita dentro de su etiqueta.
Para pasar texto se usan comillas simples o dobles, en tanto que para pasar números se pasan entre llaves:
```javascript
{ <Propiedades texto="testeando props"  numero={127} />}
```
Para añadir tipado, obligatoriedad y valor por defecto a las propiedades en JavaScript se puede usar el modulo ***PropTypes***

Importacion:
```javascript
import PropTypes from 'prop-types'
```
Tipo y obligatoriedad:
```javascript
Propiedades.propTypes= {
    texto  : PropTypes.string.isRequired,
    numero : PropTypes.number.isRequired 
}
```
Valor por defecto:
```javascript
Propiedades.defaultProps={
    texto: 'Curso de React',
    numero: 8  
}
```



## Eventos y Handlers (manejadores de eventos)

Los eventos son "mecanismos por los cuales los componentes pueden reaccionar a la interaccion del usuario".

Los nombres de eventos de React comienzan siempre con 'on'. Por ejemplo el click izquierdo es 'onClick'
Todos los eventos se mencionan en la documentacion Legacy: https://es.legacy.reactjs.org/docs/events.html
(La nueva documentacion omite muchos tipos)

Los eventos usados se especifican dentro de la definicion de los componentes, asignando funciones llamadas *manejadores* o *handlers* a los eventos de interés dentro de las etiquetas. 

Para manejadores con único argumento alcanza con llamar al handler por su nombre:
```javascript
const manejarClick = () => {
    console.log(value)
}

const Boton = () => {
    return(
        <button onClick = { manejarClick } > 
            Soy un botón
        </button> 
    )
}
```
en tanto que para handlers con más de un argumento se usan funciones flecha para permitir indicar los argumentos:
```javascript
function manejarClick(event, args) {
    console.log(event)
    console.log(args)
}
    
const Boton = () => {
    return(
        <button onClick = { (event) => manejarClick(event, arg) } >   
            Soy un botón
        </button>
    )
}
```
Los handlers pueden definirse tanto dentro como fuera del componente; sin embargo esto afecta a la visibilidad de las variables.

**Importante:** para que los cambios de valor de las variables puedan verse en la página o aplicación hay que actualizar los *estados* (ver más adelante).

## Hooks

Desde la version 16.8 de React se cambió la metodología de creacion de componentes de 'class base components' al uso de 'functional components' mediante *hooks*
Los hooks permiten usar las funciones especiales de React dentro de componentes de tipo funcion.

## Estado (State)
Es un objeto mutable que contiene datos y representa la informacion a renderizar para ser vista por el usuario. 


## useState

'useState' es un *hook* que permite **actualizar estados** de los componentes en el DOM.

Importacion del hook:
```javascript
import {useState} from 'react'
```
Creacion de una variable - estado y su método
```javascript
const [estado setEstado] = useState(valor_inicial)
```
De aquí en más el handler deberá llamar al método definido para alterar al estado:
```javascript
const handleClick = () => {
    setEstado( <operacion> )
}
```
donde la 'operacion' puede ser aritmetica o lógica.

Ejemplo de uso: un botón que cuenta clicks del mouse desde cero

```javascript
import {useState} from 'react'

export const ContadorApp = ({value}) => {
    const [contador, setContador] = useState( value )
    const handleClick = () => {
        setContador( contador + 1 )
    }
    <button onClick = { handleClick } >   
        Soy un botón
    </button>

    return (
        <>
        <h1>Contador:</h1>
        <p>{contador}</p>
        <button onClick = { handleClick } >   
            Soy un botón
        </button>
        </>
    )
}
```
En el ejemplo, tanto el handler como el elemento se definen dentro del componente para permitir el traspaso de la variable 'contador'.

El botón se crea desde el ReactDOM en el archivo 'main.jsx' y se le asigna un valor inicial:
```javascript
<ContadorApp   value={valor_inicial} />
```


### className

Las etiquetas de React se clasifican mediante la propiedad 'className' en vez de 'class'. Ejemplo: nombre de clase 'rojito' para una lista 
```javascript
    // Elemento 'Item'
    const Item = ({nombre, visto}) => {
        return (
            <li className="rojito"> {nombre} 
                {visto ? '✅' : '⛔' }  
                {/* {visto && '✅' }  */}
            </li>
        )
    }
```
En el ejemplo se lee una variable de texto llamada 'nombre'  y se le concatena un icono elegido mediante un condicional ternario en base al valor lógico de la variable 'visto'
**HINT:** los iconos en VSCode y derivados se pueden desplegar con el atajo 'Windows' + '.' 

### Map

El método 'map' lee un array y permite descomponerlo en múltiples variables, o asignarlo a un tipo de datos distinto

Ejemplo: conversion del array de objetos al 'arreglo'  al elemento 'Item' del ejemplo previo mediante un elemento auxiliar llamado arre 
```javascript
{arreglo.map(arre => <Item key={arre.id} nombre={arre.nombre} visto={arre.visto}></Item>)}
```


## Atomic Design
Es un enfoque de diseño que busca crear elementos lo más pequeños y reutilizables que se pueda. Con los elementos más pequeños se crean los elementos más grandes.



### Properties

Las properties en JSX son el equivalente a los atributos de HTML



## Formularios


## useEffect

*useEffect* es un hook que ejecuta una misma funcion sólo una vez hasta que haya un cambio de valores de entrada,en tal caso se ejecuta de nuevo automaticamente. 

Ejemplo de uso: un botón que al clickear despliega una lista de usuarios en formato JSON.

Importación del hook:
```javascript
import { useEffect } from "react"   
```
Definición de la función de busqueda  de usuarios:
```javascript
const fetchUsers = async () =>{
    try{
        // sitio con datos JSON prearmados para tests:
        const response = await fetch( 'https://jsonplaceholder.typicode.com/users' )
        const data = await response.json()
        console.log(data)
        setUsers(data)
    }catch(error){
        console.error(error)
    }
}
```
Asociacion del hook a una función:
```javascript
useEffect( () =>{
    fetchUsers()
}, []  )
```
Asociacion del manejador a un botón:
```javascript
<button onClick={handleFetch}> Aqui se llama a la API</button>
```

## Custom Hook

Los 'custom Hooks' son funciones personalizadas que se usan para asistir a los componentes y minimiza su lógica. Se trata de pasar las rutinas y funciones que usan los componentes a archivos JS mientras que en los archivos JSX sólo quedan las etiquetas de los componentes y los llamados a las funciones.
Los archivos de las custom hooks suelen guardarse dentro de una subcarpeta de "components" llamada "hooks".







