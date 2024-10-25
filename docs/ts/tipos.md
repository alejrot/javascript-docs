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

