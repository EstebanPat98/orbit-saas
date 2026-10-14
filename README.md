# 🪐 Orbit

Página de producto para un SaaS de analítica de equipos, construida con Tailwind CSS y JavaScript moderno. Incluye modo oscuro persistente, interruptor de precios mensual/anual y FAQ con acordeón.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Dark Mode](https://img.shields.io/badge/Modo-Claro%20%2F%20Oscuro-6366f1)

🔗 **[Ver demo en vivo](https://EstebanPat98.github.io/orbit-saas/)**

![Vista previa de Orbit](img/preview.png)

## ✨ Características

- Modo claro/oscuro con botón, que respeta la preferencia del sistema y recuerda tu elección (`localStorage`)
- Diseño responsivo *mobile-first* con menú hamburguesa animado
- Hero con maqueta de dashboard hecha solo con clases de Tailwind
- Sección de precios con interruptor mensual/anual que actualiza los valores con JavaScript
- FAQ con acordeón accesible (`aria-expanded`, navegable con teclado)
- Franja de prueba social, CTA final y footer en columnas

## 🛠️ Tecnologías

- **HTML5** semántico
- **Tailwind CSS** (vía CDN) con configuración personalizada de colores y fuente
- **JavaScript** (ES6): DOM, `dataset`, `localStorage`

## 📁 Estructura

```
orbit-saas/
├── index.html
├── js/
│   └── main.js
├── img/
│   └── preview.png
└── README.md
```

## ▶️ Cómo ejecutarlo en local

1. Clona el repositorio:
```bash
   git clone https://github.com/EstebanPat98/orbit-saas.git
```
2. Abre la carpeta en VS Code.
3. Clic derecho en `index.html` → **Open with Live Server**.

## 🌐 Despliegue

Publicado con **GitHub Pages** desde la rama `main`.

## 📚 Lo que aprendí

- Escribir estilos con clases de utilidad de Tailwind y sus prefijos responsivos y de estado
- Implementar modo oscuro con `darkMode: 'class'`
- Componentes interactivos con JavaScript: acordeón, interruptor y menú móvil
- Flujo de trabajo con Git y commits convencionales

## 👤 Autor

**Esteban A Espinosa Patiño**: [GitHub](https://github.com/EstebanPat98)