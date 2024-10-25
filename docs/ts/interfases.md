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



# Interfases

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
