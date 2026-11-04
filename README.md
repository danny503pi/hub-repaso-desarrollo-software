# HUB de Repaso — 3.º Desarrollo de Software «B»

Portal educativo estático del Instituto Nacional Cantón Lourdes (INDEL) para organizar los contenidos, instrumentos, recursos y actividades de repaso de 3.º Desarrollo de Software «B». La versión v0.4 incorpora fichas completas por módulo, filtros, búsqueda y quizzes interactivos. Está construido con HTML5 semántico, CSS3 y JavaScript vainilla, sin frameworks ni dependencias de ejecución.

## Sitio publicado

**GitHub Pages:** https://danny503pi.github.io/hub-repaso-desarrollo-software/

## Integrantes y roles

| Integrante | Rol | Responsabilidades |
|---|---|---|
| Nombre del integrante 1 | Coordinación / contenido | Organización del proyecto y revisión de contenidos |
| Nombre del integrante 2 | Desarrollo frontend | Estructura HTML, estilos y comportamiento interactivo |
| Nombre del integrante 3 | Documentación / pruebas | Recursos, documentación y pruebas de funcionamiento |

> Reemplacen los nombres y roles de ejemplo por los datos del equipo.

## Reparto de módulos

| Módulo | Docente | Responsable del equipo | Estado |
|---|---|---|---|
| HTML5 semántico y accesibilidad | Javier Mineros | Nombre | En desarrollo |
| CSS3 y diseño responsivo | Javier Mineros | Nombre | En desarrollo |
| JavaScript y manipulación del DOM | Arcides Canales | Nombre | En desarrollo |
| Git, GitHub y trabajo colaborativo | Arcides Canales | Nombre | En desarrollo |

Actualicen los nombres y estados cuando el equipo confirme el reparto definitivo.

## Fichas y evidencias

Los módulos están definidos en `data/modulos.js`. Cada ficha incluye tres aprendizajes clave, instrumentos, programas, herramientas, recursos, evidencias y preguntas de opción múltiple. Los enlaces de recursos se verificaron durante la preparación de la versión v0.4.

Los enlaces de evidencia apuntan inicialmente al repositorio del HUB y sus títulos indican que la entrega del equipo está pendiente. Sustituyan esos enlaces por las URL reales de las páginas, documentos o repositorios que produzca el grupo.

## Control de versiones

- `main` contiene la versión estable que se publica en GitHub Pages.
- Trabajen cada cambio en una rama descriptiva, por ejemplo `feat/ficha-html`.
- Guarden cambios relacionados en commits pequeños con mensajes claros.
- Revisen e integren los cambios mediante un pull request hacia `main`.
- Cada push o integración en `main` activa el despliegue automático de Pages.

## Estructura del proyecto

```text
.
├── index.html
├── css/
│   └── styles.css
├── data/
│   └── modulos.js
├── js/
│   └── main.js
├── .github/
│   └── workflows/
│       └── pages.yml
└── README.md
```

## Ejecución local

Los módulos JavaScript usan `import`, por lo que la página debe servirse mediante un servidor HTTP local y no abrirse directamente con `file://`.

1. Clona el repositorio o descarga sus archivos.
2. Desde la carpeta del proyecto, inicia un servidor estático. Por ejemplo, con Python:

   ```bash
   python -m http.server 8000
   ```

3. Abre `http://localhost:8000` en el navegador.

## Publicación en GitHub Pages

GitHub Pages se configura y despliega mediante el workflow `.github/workflows/pages.yml`. Cada actualización de `main` genera una nueva publicación.
