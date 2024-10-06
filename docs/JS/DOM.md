---
tags:
  - HTML5
  - JavaScript
  - CSS
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
#   - NodeJS
---


## DOM (Document Object Model)

Es un modelo que permite manipular los componentes del documento HTML como objetos.
Las etiquetas HTML anidadas constituyen el arbol DOM.

```javascript
document.body
document.head
```

### Metodos tradicionales

Para buscar elementos hay métodos como:

```javascript
document.getElementByID(<identificador>)
document.getElementByClassName(<identificador>)
```

### Metodos modernos

***QuerySelector()*** devuelve el primer elemento encontrado en tanto que ***querySelectorAll()*** los devuelve a todos.

```javascript
document.querySelector(<elemento>)
document.querySelectorAll(<elemento>)
```

Ejemplo: para insertar un saludo en negrita dentro de un contenedor con ID 'app':

```javascript
const app = document.querySelector('#app');
app.innerHTML = "<strong> Hola a todos </strong>";
```

### Crear elementos

Está el método ***.createElement()***

```javascript
const div = document.createElement('div');
div.innerHTML = "<strong> Hola a todos </strong>";
```

Referencia:

```javascript
const div2 = div;
```

Clonacion superficial:

```javascript
const div2 = div.cloneNode();
div2.textContent = "<strong> Adios a todos </strong>";
```
Clonacion profunda:

```javascript
const div2 = div.cloneNode(deep); //(o true??)
div2.textContent = "<strong> Adios a todos </strong>";
```

Dar valor a atributos:

```javascript
elemento.id = "hola";
```

Crear atributos con valor:

```javascript
elemento.setAtribute("id","hola");
```

Métodos para conocer atributos:

```javascript
elemento.getAttributeNames()
elemento.hasAttribute(<nombre>)
elemento.hasAttributes()
```

### Fragmentos

Acceder a los fragmentos es más económico que acceder al DOM directamente en términos computacionales.

```javascript
const fragmento = createDocumentFragment();
    for (let i=0; i<1000;i++){
        const div = document.createElement("div");
        div.textContent = 'item número $(i)';
        fragmento.appendChild(div); //añadido a la variable 'fragmento'
    }

document.body.appendChild(fragmento);    //subida al HTML
```

### Insertar etiquetas

Estándar:

- ***.nodename***
- ***.textContent*** 
- ***.innerHTML***
- ***.outerHTML***

Exclusivos de Internet Explorer (*evitar como a la peste*):
- ***.innerText***
- ***.outerText***

***nodeName*** nos devuelve el nombre del conjunto en mayusculas.

***textContent*** permite leer y excribir por asignacion el texto de un elemento:

```javascript
const div = document.querySelector("div");
div.textContent = "Hola a todos"; //asignacion
div.textContent;  //lectura
```

***innerHTML*** permite leer y escribir interpretando y renderizando código HTML:

```javascript
const div = document.querySelector("div");
div.innerHTML = "<strong>Importante</strong>"; //asignacion
div.innerHTML;  //lee "<strong>Importante</strong>"
div.textContent;  //lee "Importante"
```

***outerHTML*** es como *innerHTML* pero incluye la información del elemento mismo. Esto permite reemplazar elementos:

```javascript
const data = document.querySelector(".data");
data.innerHTML = "<h1>Tema 1</h1>";

data.textContent;   // "Tema 1"
data.innerHTML;     // "<h1>Tema 1</h1>"
data.outerHTML;     // "<div class="data"><h1>Tema 1</h1></div>"
```

### Insertar Elementos al DOM
*appendChild()* añade un elemento afl final del *body*, justo antes de cerrarlo.

```javascript
//creacion de un elemento imagen
const img =document.createElement("img");
img.src = "<URL_imagen>";
img.alt = "<descripcion_imagen>"
//añadido del elemento al body del HTML
document.body.appendChild(img);
```

*insertAdjacent\*()* es una familia de metodos para insertar elemetos de distintos tipos y en distintas ubicaciones:

- ***.insertAdjacentElement(***) --> Objeto Element.
- ***.insertAdjacentHTML()*** --> Código HTML.
- ***.insertAdjacentText()*** --> NODE con texto.
  
El segundo parámetro de estos métodos es nombre (descriptor)del elemento a insertar y el primer parámetro es la ubicación relativa respecto a las etiquetas del elemento modificado. Opciones:

- ***beforebegin*** : Antes de la etiqueta HTML de apertura. (afuera del elemento)
- ***afterbeguin*** : Después de la etiqueta HTML de apertura. (adentro del elemento)
- ***beforeend*** : Antes de la etiqueta HTML de cierre. (adentro del elemento)
- ***afterend*** : Después de la etiqueta HTML de cierre. (afuera del elemento)
  
Uso:
```javascript
<elemento_modificado>.insertAdjacentElement('<posicion>',<elemento_insertado>)
```

### Eliminar elementos del DOM

Los elementos del DOM se pueden "eliminar" (en realidad se desconectan del mismo pero seguirán existiendo). Métodos habituales:

- ***.remove():*** elimina el nodo padre. Uso:
  ```javascript
  <elemento_padre>.remove();
  ```
- ***.removeChild():*** elimina un nodo hijo elegido.
  ```javascript
  <elemento_padre>.removeChild(<nodo>)
  ```
- ***.replaceChild():*** reemplaza un elemento hijo por otro nuevo.
  ```javascript
  <elemento_padre>.replaceChild(<nuevo_hijo>,<viejo_hijo>)
  ```


### API ClassList - Manipulación de clases CSS

Hay dos propiedades de JS para acceder y modificar las clases de un elemento HTML:

- ***.className*** : acceso simultáneo a todas las clases asignadas al elemento, que se guardan juntas. Poco práctico para casos de clases múltiples.
- ***.classList*** : Objeto especial que permite manejar todas las clases CSS por separado, con metodos y propiedades dedicados. 

El objeto ***.classList*** devuelve un *DOMTokenList* (algo muy parecido a un array) con la lista completa de clases guardadas y posee métodos para trabajar con ellas:

- ***.length*** : contea cuantas clases hay
- ***.item(\<n\>)*** : devuelve el elemento n-esimo. Si no existe da NULL.
- ***.add(<\clase1\>, <\clase2\>, ...)*** : añade las clases indicadas.
- ***.remove(<\clase1\>, <\clase2\>, ...)*** : elimina las clases indicadas.
- ***.contains(<\clase\>)*** : verifica si la clase indicada existe.
- ***.toggle(<\clase\>)*** : alterna el estado de clase: si existe la borra, sino la crea.
- ***.toggle(<\clase\>,\<condición\>)*** : alterna el estado de clase sólo si se cumple la condición.
- ***.replace(<\old\>,\<new\>)*** : reemplaza una clase por otra.

Ejemplo de uso: reemplazar una clase "claro" por una "oscuro" para cambiar de estilo CSS de una página.
```javascript
const div = document.querySelector("#pagina");
div.classList.replace("claro","oscuro")
```


## Referencias



[ManzDev - LenguajeJS](https://lenguajejs.com/javascript/dom/que-es/)




