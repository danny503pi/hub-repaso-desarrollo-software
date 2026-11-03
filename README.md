# HUB de Repaso — 3.º Desarrollo de Software

Sitio web estático educativo para organizar contenidos, herramientas, recursos y actividades de repaso de 3.º de Desarrollo de Software. Está construido con HTML5 semántico, CSS3 y JavaScript vainilla, sin frameworks ni dependencias de ejecución.

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
| HTML5 semántico y accesibilidad | Javier Mineros | Nombre | Pendiente |
| CSS3 y diseño responsivo | Javier Mineros | Nombre | Pendiente |
| JavaScript y manipulación del DOM | Arcides Canales | Nombre | Pendiente |
| Git, GitHub y trabajo colaborativo | Arcides Canales | Nombre | Pendiente |

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

En GitHub, abre **Settings → Pages**, selecciona la rama principal y la carpeta raíz (`/root`) como origen de publicación. Guarda los cambios y coloca la URL resultante en la sección **Sitio publicado** de este documento.
