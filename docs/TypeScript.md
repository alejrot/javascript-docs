
## [Volver al Indice](../Index.md#typescript)



# TypeScript

[SergieCode - TYPESCRIPT desde cero](https://www.youtube.com/watch?v=UTA5bykCx2c)

[MoureDev - TypeScript desde Cero: primeros pasos](https://www.youtube.com/watch?v=4W3UWjyyVkQ&t=585s)

Sitio oficial: https://www.typescriptlang.org

TS es un superconjunto de JavaScript creado por Microsoft en 2012 para usar JavaScript compilado.

TS añade tipado fuerte a JS, por lo demás es casi igual.
El compilador de TS ayuda a detectar errores de sintaxis sin necesidad de ejecutar todas las partes del programa y las convierte a JavaScript. Ventajas:
- Prevencion de errores por tipos de datos erroneos
- Facilidad de desarrollo: el interprete propone métodos y acordes a los tipos de datos elegidos


## Instalaciones - TS Node

Instalar NodeJS y luego instalar por terminal Typescript (normalmente se hace en modo global)

```bash
npm install -g typescript   
```

Para instalar TS-Node (entorno de ejecucion adaptado a TypeScript, similar a NodeJS)

```bash
npm install -g ts-node
```

Para verificar las versiones disponibles:

```bash
tsc --version
ts-node --version
```

Sitio de TS Node: https://typestrong.org/ts-node/docs/


## Compilacion
## Extensión y compilacion

Los programas de TypesCript se guardan con la extension **.ts**. 

La compilacion del código TS se hace con el comando *tsc*:
```bash
tsc <nombre_rutina>.ts
```
Esto crea un archivo JS con el mismo nombre de archivo y la rutina adaptada a JavaScript.

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
## Tipado de datos

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


## Datos primitivos
### Number

Los numeros se tipean indicando el nombre de variable, dos puntos (:) y la palabra *'number'*.
Algunos ejemplos: variables numéricas inicializada con el numero 10 en distintos formatos numericos.
```typescript
const num1: number = 10; //decimal  
const num2: number = 1e1; //decimal ,notacion cientifica 
const num3: number = 0xA; //hexadecimal
const num4: number = 0o12; //octal
const num5: number = 0b1010; //binario  
```
### String

Las variables de texto usan la palabra reservada *'string'*
```typescript
const texto1: string = "Hola";
const texto2: string = 'mundo';

const n: number = 14;
const texto3: string =`Edad: ${n}`;  
```

### Boolean

Las variables lógicos (*booleanos*) se tipean co nal palabra reservada 'boolean':
```typescript
const logica1: boolean = true
const logica2: boolean = false
```
### Undefined
```typescript
let indefinido: undefined;
indefinido = undefined
```
### NULL

```typescript
let variable_null: null;
variable_null = null;
```
## Datos compuestos

### Objetos

Los objetos no se tipean directamente sino a traves de una 'interface' (ver más adelante).

### Arrays

Los arrays con único tipo de datos internos se tipean con la palabra reservada del tipo de datos y dos corchetes([]). Ejemplo: arreglo de textos

```typescript
const nombres: string[] = ["Juan","Maria", "Pedro"]
```

## Enum

Las enumeraciones ro requieren tipado añadido

```typescript
enum DiaSemana{
    Lunes,
    Martes,
    Miercoles,
    Jueves,
    Viernes,
    Sabado,
    Domingo,
}

enum Colores{
    Rojo="rojo",
    Verde="verde",
    Azul="azul",
}
```

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

### Clases
De las clases se tipean tanto los *atributos* como los *constructores*:
```typescript
Class Persona{
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

### Interface

Interfaz basica:
```typescript
interface Persona{
    nombre: string;
    edad:   number;
}
```
Interfaz con propiedades opcionales:

```typescript
interface Producto {
    nombre: string;
    precio: number;
    descripcion?: string; 
}
```
Interfaz para funciones:

```typescript
interface comparador{
    (a: number, b: number): boolean;
}
```

Interfaz para clases:

```typescript
interface Persona {
    nombre: string;
    edad:   number;
    saludar(): void;
}
```

### Types

Se pueden crear tipos de datos personalizados usando la palabra reservada *'type'*

Básico:

```typescript
type Numero = number;
```

Objeto literal:

```typescript
type Personal = {
    nombre: string;
    edad: number;
}
```
Union de tipos:

```typescript
type Nombre = string | null;
```

Propiedades opcionales:

```typescript
type Producto = {
    nombre: string;
    precio: number;
    descripcion?: string;
}
```

Tipos par funciones:

```typescript
type Comparador1 = {
    (a: number, b: number): boolean;
}
```

Tipos para clases:

```typescript
type Persona2 = {
    nombre: string;
    edad:   number;
    saludar(): void;
}
```

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

## React en TS

ReactJS puede usarse con TS. Mediante Vite se puede crear un proyecto con la opción 'TypeScript+ SWC' ,se instalan los paquetes necesarios localmente (npm install) y el resultado es un proyecto cuyo código de componentes se guarda en archivos con extensión .tsx en vez de .jsx.

Al finalizar el trabajo se construye el proyecto con 'npm run build'.

---
---

## [Volver a Inicio](#typescript)

## [Volver al Indice](../Index.md#typescript)
