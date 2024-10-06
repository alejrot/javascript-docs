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
#   - NodeJS
---

# JavaScript

Este lenguaje fue creado para funcionar dentro de los navegadores web. Su desarrollo y estandarizacion fue iniciativa de la compañía Netscape, los creadores del Netscape Navigator.

## Tipos Archivo
Los archivos de JavaScript tienen la extension *.js* .
Estos archivos son invocados por el documento HTML usando la etiqueta *script*.
Ejemplo:
```javascript
<body>
    <script src="app.js"></script> 
</body>
```
Comentarios
Los comentarios de una sola linea en JavaScript son precedidos por dos barras inclinadas (*slash*). Ejemplo:
```javascript
// Este es mi comentario
```
Si en cambio se busca comentar múultiples lineas se usa un par barra - asterisco para comenzar y un par asterisco - barra para cerrar. Ejemplo:
```javascript
/*
Mi bloque de comentarios
*/
```

## Console
Con JavaScript se puede interactuar con la consola de los navegadores web. Para ello se usan los métodos de Console. Ejemplos:
```javascript
console.log("Hola mundo!")              //escribe en consola
console.error("Mi mensaje de error")    //crea un mensaje de error
```
La consola ayuda al debug de los sitios web en desarrollo.

## Document
Esta instrucción permite interactuar con el archivo HTML que invoque la rutina. Ejemplo:
```javascript
document.write("<h1>Hallo Welt!</h1>");  // Escribe un título
```
## Tipos de Datos

- ### Cadenas de caracteres (*string*)
  Se marcan entre comillas dobles o simples. Ejemplos:
  
  ```javascript
  "Hola mundo"
  'Hola mundo'
  ```

  **Importante:** NO mezclar comillas al delimitar un string porque da error.
  Si hay que imprimir las comillas en pantallaséstas se pueden marcar con su simbolo ASCII ,usando la barra invertida (\\) quedando \' ó \" . 
  
  Ejemplo de uso:

  ```javascript
  console.log("soy una cadena de caracteres \"con comillas\"")
  ```

  Otra opcion: usar ambos tipos de comillas. Ejemplo:

  ```javascript
  console.log('soy otra cadena de caracteres \"con comillas\"')
  ```

- ### Numeros (number)
  
  Se escriben directamente. Si tienen parte decimal se indica con un punto. 
  
  Ejemplos:
  ```javascript
  999
  -7.8
  ```

- ### Booleanos (boolean)
  Los valores lógicos se escriben en minúsculas:
  ```javascript
  true      // verdadero
  false     // falso
  ```
- ### undefined
  Indefinido →¿tipo comodín?
- ### null
- ### symbol

## Tipado de Datos

JavaScript tiene tipado débil. Los tipos de datos de las variables pueden cambiar en cada asignación.

## Arreglos (arrays)
Los arrays son conjuntos de elementos marcados con corchetes y separados por comas:

```javascript
['joe','ryan','martha']
[1, 5 ,0,-5]
[true, false, false]
```

Los arrays son indexables, esto significa que sus elementos pueden ser consultados en base a su número de aparición rodeado de corchetes. El primer elemento del array es el número cero. Ejemplo:

```javascript
lista = ['joe','ryan','martha']
console.log(lista[0]);
console.log(lista[1]);
console.log(lista[2]);
console.log(lista[3]);      //elemento inexistente
```

Si se intenta consultar un valor inexistente la consola devuelve el valor 'undefined' pero no falla la ejecución de la rutina por si sola. la cantidad de elementos de un array se puede consultar con el método length.En el ejemplo previo:

```javascript
console.log(lista.length);
```

Un array puede ser anidado (o "multidimensional"), es decir puede estar compuesto por varios arrays internos separados por comas. El acceso se hace indicando varios índices, uno por dimensión. Ejemplo: arreglo estilo matriz:

```javascript
matriz = [[1, 2, 3],[ 4, 5, 6]]; //matriz rectangular, dos dimensiones
matriz[0][1] = 7;   //reescritura del primer array, segundo elemento
console.log(matriz)
```

Los arrays son mutables: pueden alterarse elemento a elemento
con el método push se puede añadir un elemento al final del array. Ejemplo:

```javascript
var estaciones = ["invierno", "otoño", "primavera"]
estaciones.push("verano")
console.log(estaciones)
```

El metodo ***pop*** permite eliminar el ultimo elemento de un arreglo y también obtenerlo como valor de retorno:

```javascript
var quitado = estaciones.pop()
```

El metodo ***shift*** elimina el primer elemento del array y lo devuelve como retorno:

```javascript
quitado = estaciones.shift()
```

El método **unshift** añade un elemento al comienzo del arreglo:
```javascript
estaciones.unshift("Verano")
```
## Objetos (objects)

Los objetos se indican entre corchetes. Poseen pares propiedad - valor ,en ese sentido se parecen mucho a los diccionarios de Python. 

Ejemplo:

```javascript
ficha_usuario = {
"username": 'ryan',
"score": 70.4,
"hours": 14,
"professional" : true,
"friends": ['yoh','meh','sih',]
}
```
Una misma propiedad puede tener varios valores en forma de arreglo (entre corchetes).
Para acceder al valor de una propiedad se puede usar la notación de punto:

```javascript
var user = ficha_usuario.username
```

También se puede usar la notacion de corchete:

```javascript
var user = ficha_usuario["username"]
```

Esta última notación sirve para hacer consultas con variables:

```javascript
var user = ficha_usuario[campo_variable]
```

A los objetos se les puede añadir nuevos pares propiedad - valor con una simple asignación:

```javascript
ficha_usuario["last_login"] = 7;
```

Para eliminar campos se usa la directiva delete. Dos notaciones posibles:

```javascript
delete ficha_usuario.hours;
delete ficha_usuario["friends"];
```

Para verificar la existencia de una propiedad se usa el metodo 'hasOwnPorperty()':

```javascript
ficha_usuario.hasOwnProperty("score");      //da true
ficha_usuario.hasOwnProperty("banneado");   //da false
```
Comentario: los objetos de JS son los que le dan nombre a los archivos JSON (*"JavaScript Object Notation"*)

## Variables
Las variables de JavaScript se crean al inicializarlas. Sus nombres pueden tener letras, numeros y guiones bajos como pasa en otros lenguajes y con restricciones similares (por ejemplo no pueden empezar con un numero.)
Las asignaciones se realizan con el signo igual y terminan en punto y coma. Ejemplo:

```javascript
nombre_usuario = "John" ;   //inicializacion
console.log(nombre_usuario) //escritura en consola
```

Las declaraciones de variables suelen estar precedidas por las palabras **var** y **let**:

```javascript
var nombre      = "Napoleón"
let apellido    = "Bonaparte"
```

La diferencia entre una declaración *var* y una declaración *let* es que con *let* se verifica de que no exista una variable con igual nombre, en cambio con *var* se reescribe cualquier variable preexistente con igual nombre. Además, las variables *let* permiten implementar variables locales se destruyen apenas  se salen de su bloque de declaración, sea un bucle, una funcion etc. El resultado es una especie de *sobrecarga de variables* con distintas visibilidades al estilo del C++. Ejemplo:

```javascript
var i = 33 ; //variable global
for (let i=0; i<10; i++){   //variable local para el bucle
console.log(i)  //lee la variable local
}
console.log(i)  //lee la variable global
```

A la hora de darle nombre a las variables lo más habitual es darles el formato "camelcase" que consiste en escribir todo junto pero con la primera letra de cada palabra en mayuscula. Ejemplo:

```javascript
var miNombreDePila = "Pepe" //Camelcase
```

## Constantes

Se puede crear parametros constantes con la palabra *const*:

```javascript
const PI = 3.14159;
```

A las constantes habitualmente se las llama con mayusculas.
Los arrays pueden ser definidos como 'const' impidiendo su modificacion completa; sin embargo esto no impide la modificacion elemento a elemento del array:

```javascript
const arreglo = ["chanchito", 0]
arreglo = ["chanchito", "feliz"]  //da error
arreglo[1] = "feliz"    //está permitido
```

Para que los objetos sean inmutables (constantes) primero se los inicializa y luego se los pasa a la función ***Object.freeze()***. Ejemplo:

```javascript
let color = {           //se crea el objeto color
"rojo" : "#ff0000",
"verde": "#00ff00",
"azul" : "#0000ff"
}
Object.freeze(color);   //se hace inmutable el objeto color
//Se intenta añadir un elemento más
color.amarillo="#fff200";   //Puede dar mensaje de error. Sino se ignora
console.log(color)
```

## Operadores

- **Suma → +**
  ```javascript
  let N1 = 7;
  let N2 = 3;
  let M = N1 + N2;
  console.log(M)
  ```
- **Resta → signo -**
- **Incremento y Decremento**
  ```javascript
  index++;            //sumar 1
  index--;            //restar 1
  ```
- **Multiplicacion → \***
- **Division → signo /**   (decimales)
  
  En caso de dividir por cero da "infinity"
- **Resto → signo %**
  
    (para obtener el cociente entero de la division se usa normalmente la función Math.floor)
- **Potencia → \*\***
  ```javascript
  2**3;   // 2 al cubo. Da 8
  ```

## Operadores de Asignacion Compuesta

JavaScript admite afectar variables ya inicializadas con la notacion reducida:
```javascript
var x = 3;      //inicializacion
x += 4          //x = x + 4
x *= 7          //x = x * 7
//etc
```

### Concatenación texto --> signo +

```javascript
let texto = "John" + " " + "Doe"
console.log(texto)
```

## Operadores Comparacion

Usan los signos **'<' , '>', '==' , '>=' , '<=' y '!='**. 

Ejemplo:

```javascript
resultado = 5 > 8;
console.log(resultado)
```

Estos comparadores comparan valores pero no los tipos de datos:

```javascript
console.log(5 == "5")  //da true
```

Los strings se comparan con criterios alfabéticos primero y por longitud después:

```javascript
console.log( "A" > "B")     //false
console.log( "A" < "B")     //true
console.log( "AD" > "B")    //falso
console.log( "D" > "AD")    //verdadero
console.log( "D" > "DE")    //falso
```

Estos operadores NO sirven para comparar arreglos.

```javascript
console.log([1,2,3] == [1,2,3]) //da  false
```
### Igualdad Estricta
La comparación '===' es estricta: compara tambien los tipos de datos de las variables.

```javascript
console.log(5 === "5") // da false
```
Existe también la desigualdad estricta ('!==') que diferencia valores y tipos

## Operadores Logicos
- **AND → &&**
- **OR  → ||**
- **NOT → !**
- **XOR → ^** (acento circunflejo)
## Operadores Logicos (bit a bit)
- **AND → &**
- **OR  → |**
- **NOT → ~**
- **XOR → ^** (acento circunflejo)

## Inmutabilidad de Strings
Los *strings* de JS NO pueden ser alterados elemento a elemento. Sólo pueden ser alterados reescribiéndolos por completo. Ejemplo:
```javascript
miCadena = "Yo soy Sam";
miCadena[0] = "N";      //la primera letra no se reeescribe y puede dar error 'TypeError'
miCadena = "No soy Sam"; //se reescribe por completo
```

## Control de Flujo

### Condicional if

```javascript
if (condicion){
    console.log("Condicion verdadera");
}
if (condicion == false){
    onsole.log("Condicion falsa");
}
```

### Condicional if-else

```javascript
if (condicion){
    console.log("Condicion verdadera");
}else{
    console.log("Condicion falsa");
}
```

Puede haber condiciones intermedias usando 'else if':

```javascript
if (condicion1){
    console.log("Condicion 1 verdadera");
}else if (condicion2){
    console.log("Condicion 1 falsa, condicion 2 verdadera");
}else{
    console.log("Condicion falsa");
}
```

### Cambiar (Switch)

Este tipo de condicional permite evaluar varias condiciones de forma secuencial y empezar a ejecutar a partir de la primera verdadera.
Ejemplo:

```javascript
switch( variable){
    case 'A':       //"variable" igual a 'A'
        console.log("caso A");
    case 'B':       //"variable" igual a 'B'
        console.log("caso B");
    default:
        console.log("otros");
    }
```
Si se desea ejecutar solamente las instrucciones de la priemra instruccion correcta hay que añadir la palabra **break **("romper") al final del bloque de instrucciones. Ejemplo:

```javascript
switch( variable){
    case 'A':
        console.log("caso A");
        break;
    case 'B':
        console.log("caso B");
        break;
    default:
        console.log("Ninguno de los anteriores");
    }
```
Varios casos pueden apuntar a una misma orden:

```javascript
switch( variable){
    case 'A':
    case 'B':
    case 'C':
        console.log("Es A, B o C");
        break;
    default:
        console.log("Ninguno de los anteriores");
    }
```

### Mientras (While)
El bucle condicional toma la siguiente forma:

```javascript
contador = 5;
    while(contador >= 0){
    console.log(contador);
    contador--;
}
```

### Do - While

Al igual que el C , Javascript incluye el bucle Do - While. En este caso la rutina interna se ejecuta al menos una vez.

```javascript
do{
    <rutina>
    <actualizacion condicion>
}while(<condicion>);
```
### Para (For)

El bucle for en JS es prácticamente igual al del lenguaje C.
Ejemplo: recorrer una lista de nombres del primero al ultimo:

```javascript
let lista = ['joe','ryan','martha']
//para conocer el numero de elementos se usa el método lenght
for(let i = 0; i < lista.length ;i++){
    console.log(lista[i]);
    }
```

## Funciones

Las funciones se definen con la palabra reservada function:

```javascript
function nombre_funcion( <argumentos>){
    // Rutina
    return <valor>; //valor de retorno (opcional)
    }
```

Para llamarlas se escribe su nombre y sus argumentos entre paréntesis. Si no hay argumentos se  escriben los paréntesis vacios. Ejemplo:

```javascript
//definicion funcion, sin argumentos
function saludos(){
    console.log("Hola!");
    }
//llamado funcion
saludos();
```

Cuando no se especifica el valor de retorno este vale 'Undefined' por defecto. Las variables internas a una funcion son privadas, es decir no pueden ser leidas desde el exterior. Una misma funcion pueden tener múltiples sentencias de return,por ejemplo dentro de bifurcaciones. La primera en ejecutarse dará fin a la función, esto se llama "retorno anticipado"

## Funcion Flecha

las funciones flecha permiten definir funciones más compactas con la siguiente notación:

```javascript
const <nombre_funcion> = (<argumentos>) => <instrucción>;
```

Ejemplo: leer fecha actual del sistema:

```javascript
//definicion
const fecha = () => new Date();
//uso
var hoy = fecha();
```

Las funciones flecha son similares a las funciones lambda de Python.
Las variables pueden tener sus propios valores por defecto, estos se asignan en la definicion.Ejemplo: una funcion con segundo argumento que tiene valor por defecto 1.

```javascript
const incrementar =(num, valor = 1) => num + valor;
```

### Operador Rest

Para hacer variable el número de argumentos de una funcion se usan tres puntos y un nombre de argumento:

```javascript
function <nombre_funcion>(...<argumento>){
    //...
    }
```

Los argumentos dados se consultan internamente como si fueran un array de elementos.En otras palabras **'...'** (***rest***) reune todos los argumentos en un único array.

Ejemplo: una suma acumulativa.

```javascript
const sumar = (...argumentos) =>{
    return argumentos.reduce((a, b) => a+b , 0)
    };
```

### Operador Spread

Los **'...'** pueden colocarse delante de un array para desparramar (***'spread'***) sus elementos internos en varias variables. Es lo contrario a 'rest'
Ejemplo: una funcion que pide tres argumentos y un arreglo de tres elementos.

```javascript
function sumar(x,y,z){
    //................
    }
const numeros = [8, 15, 25 ];
sumar(...numeros)   //se usa el spread
```

### Sintaxis de Desestructuración

Los objetos se pueden "desarmar" en variables fácilmente indicando las propiedades entre corchetes:

```javascript
const {<propiedad1>, <propiedad2>,...} = <objeto>;
```

Ejemplo:

```javascript
const usuario =  {
    nombre : "Aquiles Brinco",
    edad : 48
}
//desestructuracion
const {edad, nombre} = usuario;
```

Las nuevas variables pueden ser renombradas indicando su nuevo nombre con dos puntos:

```javascript
const {edad: age, nombre: names} = usuario;
```

No es necesario que todas las propiedades sean convertidas a variables.
La desestructuración también puede hacerse con objetos anidados así:

```javascript
const {<objeto_interno>: {<propiedad1>, <propiedad2>,...} }= <objeto_exterior>;
```

La desestructuracion puede hacerse con funciones flecha, como se muestra:

```javascript
//definicion
const <funcion> = ({<propiedad1>, <propiedad2>,...}) => <instruccion> ;
//uso
<funcion>(<objeto>)
```

La desestructuración puede hacerse con arreglos, colocando las variables ordenadamente entre corchetes y asignando:

```javascript
var a,b,...;
[a,b,...] = lista;
```

Para saltar elementos de un array se dejan espacios vacíos entre comas. Por ejemplo, para tomar el primer y cuarto valor de un array se puede hacer:

```javascript
[b, , ,a] = ["A", false, 7, 81];
```
Este mismo sistema se puede usar con el operador rest.

Ejemplo: descartar tres primeros elementos:
```javascript
[, , , ...nuevo_arreglo] = arreglo_original;
```

## Métodos

Los métodos son las funciones dedicadas de los tipos de datos.
- **\<string\>.toLowerCase()** → conversion a minusculas
- **\<string\>.toUpperCase()** → conversion a mayusculas
- **\<arreglo_1\>.concat(\<arreglo_2\>)** → concatena un segundo arreglo al primero
- **\<arreglo\>.reduce()** → reduce el arrreglo a un solo valor numérico en base a una función especificada como argumento.

Ejemplo: una funcion para hacer una cola (FIFO) sobre un arreglo, añadiendo un valor al final y devolviendo el valor removido.

```javascript
function Cola(arreglo, elemento){
    arreglo.push(elemento) ;            //agregar elemento
    primer_elemento = arreglo.shift();  //remocion primer valor
    retorno primer_elemento ;
}
```

para formatear los arreglos antes de consola se suele usar la funcion JSON.stringify() .

## Numeros Aleatorios

- Decimales
  
  ```javascript
  var numero = Math.random(); //valores pseudoaletorios decimales, rango [0, 1)
  ```

- Enteros menores o iguales a un valor
  
  ```javascript
  var entero =Math.floor( (<maximo> + 1) * Math.random());
  ```

- (etc)

## Conversiones

```javascript
parseInt("valor")
parseInt("valor",<base>) -->convierte a decimal desde la base indicada
```

Ejemplos:

```javascript
parseInt("F",16) //da 15
parseInt("101",2) //da 5
parseFloat("valor")
```

### Condicional Ternario
Comprime el if - else a una sola línea:

```javascript
<condicion> ? <instruccion_verdadero> :<instruccion_falso>
```

Ejemplo:

```javascript
function retornarMinimo(x, y){
    return x < y ? x : y;
    }
```

### Condicional Ternario Anidado

```javascript
function compararNumeros(a, b){
    return a == b ?
        : a > b ? "a es amyor a b"
        : "b es mayor que a";
    }
```

### Plantillas Literales o Plantillas de Cadenas

- Usan el acento invertido (bactick) *`* en lugar de comillas
- Pueden contener comillas simples y dobles
- Las lineas se preservan como se escriben en el codigo
- Para reemplazar una variable se escribe **${\<variable\>}**
- Dentro de **'${}'** se puede escribir expresiones.
  
  Ejemplo:
  ```javascript
  var b = "chanchito";
  var texto = `El valor de 'b' es ${b}  `;
  ```

Crear objetos de forma concisa permite devolver un objeto como retorno de una funcion. Los valores se indican entre llaves. Ejemplo:

```javascript
const crearPersona = (nombre,edad,idioma) => ({nombre,edad,idioma});
objetoPersona= crearPersona("chanchito",35,"español")
```

### Métodos Personalizados
Definicion: 'Método' es una funcion que es valor de una propiedad
En el siguiente ejemplo se devuelve una funcion como valor de una propiedad

```javascript
const persona ={
  nombre: "Isabel",
  presentarse: function(){
  return `¡Hola! Mi nombre es ${this.nombre}.`;
  }
};
```
'This' hace refencia al nombre del objeto donde se invoca. Es similar al 'self' de las clases de Python.
Al finalizar la funcion interna del objeto puede invocarse como método con el nombre 'presentarse':
var presentacion = persona.presentarse();

## Clases

Las clases de JS son más limitadas que las de otros lenguajes. Son meras plantillas para crear objetos. La funcion 'constructor()' es la que constructora de la clase y siempre se usa. Se definen con la palabra *class* y su nombre siempre empieza con mayusculas

```javascript
class Transbordador{
  constructor(planeta){
  this.planeta = planeta;
  }
}
```
Para crear un objeto de la clase se usa la palabra new:

```javascript
var zeus = new Transbordador("Jupiter");
console.log(zeus.planeta)
var apolo = new Transbordador("Marte")
console.log(apolo.planeta)
```

### Getters  y Setters
Algo similar a las funciones públicas 'get' y 'set' de otros lenguajes para manejar propiedades privadas, las cuales se marcan con un guion bajo adelante del nombre.

```javascript
class Libro{
    constructor(autor){
    this._autor = autor;    //propiedad privada
        } 

    get autor(){
        return this._autor;
        }

    set autor(nuevoAutor){
        this._autor = nuevoAutor;
        }
}

const libro = new Libro("Anonimo");
console.log(libro.autor);
libro.autor = "Chanchito";
console.log(libro.autor);
```

*get* y *set* permiten definir variables alias (apodo) para la propiedad privada de modo de no alterarla directamente.




## Referencias

[^1] [Referencia: Curso Javascript para Principiantes - Fazt](https://www.youtube.com/watch?v=RqQ1d1qEWlE)

[^2] [Aprende JavaScript Curso Completo desde Cero - FreeCodeCamp Español](https://www.youtube.com/watch?v=ivdTnPl1ND0)

