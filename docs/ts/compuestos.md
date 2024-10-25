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



# Datos compuestos

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

