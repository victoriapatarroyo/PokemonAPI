# 🔴 PokéSearch

Proyecto frontend con JavaScript vanilla, consumo de API REST (PokéAPI), manipulación dinámica del DOM y persistencia de datos con localStorage. Sin frameworks ni librerías externas.

---

## 📋 Descripción

PokéSearch es una aplicación web que permite buscar cualquier Pokémon por nombre o número de Pokédex, visualizar su información y guardar una lista de favoritos que persiste entre sesiones.

---

## ✨ Características

- 🔍 Búsqueda por nombre o número de Pokédex
- 🖼️ Imagen oficial de alta calidad (artwork)
- 🎨 Badges de tipo con colores dinámicos (18 tipos)
- ♥ Lista de favoritos persistente con localStorage
- ❌ Eliminar favoritos individualmente o todos a la vez
- ⌨️ Soporte para buscar presionando Enter
- 📱 Diseño responsivo para móvil y escritorio

---

## 🛠️ Tecnologías

| Tecnología | Uso |
|---|---|
| HTML5 | Estructura semántica |
| CSS3 | Estilos y diseño responsivo |
| JavaScript (vanilla) | Lógica, DOM y fetch |
| [PokéAPI](https://pokeapi.co/) | Fuente de datos REST |
| localStorage | Persistencia de favoritos |

---

## 📁 Estructura del proyecto

```
pokesearch/
├── index.html   # Estructura HTML
├── style.css    # Estilos
└── app.js       # Lógica de la aplicación
```

---

## 🚀 Cómo usar

1. Clona el repositorio:
   ```bash
   git clone https://github.com/victoriapatarroyo/PokemonAPI.git
   ```
2. Abre `indexPokeAPI.html` en tu navegador.
3. ¡Listo! No requiere instalación ni servidor.

---

## 🔌 API utilizada

[PokéAPI](https://pokeapi.co/) — API REST pública y gratuita con datos de todos los Pokémon.

Endpoint usado:
```
GET https://pokeapi.co/api/v2/pokemon/{nombre-o-id}
```

---

## 🧩 Retos y objetivos alcanzados

### Retos enfrentados

- **Consumo de una API externa** — entender la estructura de la respuesta JSON de PokéAPI y extraer solo los datos necesarios (imagen, tipos, número) sin perderse en la cantidad de información que devuelve el endpoint.

- **Manejo de errores en fetch** — controlar los casos en que el Pokémon no existe o el nombre está mal escrito, mostrando un mensaje claro al usuario en lugar de romper la aplicación.

- **Persistencia sin base de datos** — implementar una lista de favoritos que sobreviva al cierre del navegador usando únicamente localStorage, incluyendo la lógica para evitar duplicados y permitir eliminación individual o total.

- **Manipulación dinámica del DOM** — construir y renderizar tarjetas de Pokémon y favoritos directamente desde JavaScript, sin depender de frameworks como React o Vue.

- **Diseño responsivo sin librerías de UI** — lograr un layout adaptable a móvil y escritorio usando solo CSS vanilla, sin Bootstrap ni Tailwind.

---

### ✅ Objetivos alcanzados

- Conectar una aplicación frontend a una API REST real y manejar su respuesta de forma asíncrona con `fetch` y `.then()`
- Renderizar contenido dinámico en el DOM según los datos recibidos de la API
- Implementar persistencia de datos en el cliente con `localStorage`
- Construir una interfaz limpia, funcional y responsiva desde cero con HTML y CSS puro
- Estructurar el código JavaScript en funciones reutilizables con responsabilidad única
- Manejar estados de la UI: carga (spinner), resultado exitoso y error

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**.

Puedes usar, copiar, modificar y distribuir este código libremente, siempre que se mantenga el crédito a la autora original.

```
MIT License

Copyright (c) 2025 Victoria Patarroyo

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 👩‍💻 Autora

**Victoria Patarroyo**
[victoriapatarroyo.github.io](https://victoriapatarroyo.github.io)
