# HUB 3.º Desarrollo de Software «B» — INDEL

Portal educativo estático del Instituto Nacional Cantón Lourdes (INDEL), preparado para la Feria de Portales. La versión 1.0 reúne los nueve módulos oficiales de Javier Mineros y Arcides Canales en fichas interactivas para consulta y repaso.

## Sitio publicado

**GitHub Pages:** https://danny503pi.github.io/hub-repaso-desarrollo-software/

## Características

- HTML5 semántico, CSS3 y JavaScript ES6+ sin frameworks, librerías ni dependencias externas.
- Nueve fichas con aprendizajes, instrumentos, programas, herramientas, recursos, evidencias y tres preguntas de quiz.
- Buscador instantáneo que ignora mayúsculas y acentos, filtros por docente y contador de resultados.
- Progreso de repaso por módulo, guardado en `localStorage` del navegador.
- Tema claro/oscuro con preferencia inicial del sistema y elección guardada localmente.
- Modal accesible con pestañas, enlaces externos seguros y retroalimentación inmediata en los quizzes.
- Diseño adaptable a móviles, tabletas y escritorio.

## Integrantes y roles

| Integrante | Rol | Responsabilidades |
|---|---|---|
| Nombre del integrante 1 | Coordinación y contenido | Coordinación, revisión de fichas y seguimiento del proyecto |
| Nombre del integrante 2 | Desarrollo frontend | HTML, CSS, JavaScript y experiencia adaptable |
| Nombre del integrante 3 | Documentación y pruebas | Recursos, documentación, validación y pruebas |

Reemplacen los nombres de ejemplo por los integrantes reales del equipo.

## Reparto de módulos

| Módulo | Docente | Responsable | Estado |
|---|---|---|---|
| Módulo 3.0 “Orientación de estudiantes al proceso educativo del tercer año” | Javier Mineros | Nombre | En desarrollo |
| Módulo 3.2 Mantenimiento y aseguramiento de la operación del sistema informático | Javier Mineros | Nombre | En desarrollo |
| Módulo 3.3 Administración de Bases de Datos | Javier Mineros | Nombre | En desarrollo |
| Módulo 3.4 Elaboración de documentación de Sistemas informáticos | Javier Mineros | Nombre | En desarrollo |
| Módulo 3.8 Proyecto innovador de Desarrollo de Software | Javier Mineros | Nombre | En desarrollo |
| BTVDS 3.1 Desarrollo de aplicaciones de software para la solución de problemas | Arcides Canales | Nombre | En desarrollo |
| Modulo 2 Desarrollo de componentes para dispositivos móviles | Arcides Canales | Nombre | En desarrollo |
| Modulo 3 Conversación de ingles sobre mantenimiento de sistemas informáticos | Arcides Canales | Nombre | En desarrollo |
| Modulo 4 Puesta en marcha de la empresa en asociatividad cooperativa | Arcides Canales | Nombre | En desarrollo |

Los responsables y estados de esta tabla son espacios para completar por el equipo.

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
└── .github/
    └── workflows/
        └── pages.yml
```

## Ejecución local

Debido a que el portal carga módulos JavaScript mediante `import`, ejecútalo desde un servidor HTTP local:

```bash
python -m http.server 8000
```

Después abre <http://localhost:8000>. El progreso y el tema guardados son locales al navegador y dispositivo; no se envían a un servidor.

## Publicación

GitHub Pages se despliega desde `.github/workflows/pages.yml` cada vez que se actualiza la rama `main`. El estado del último despliegue puede consultarse en la pestaña **Actions** del repositorio.

## Registro de prompts de IA utilizados

1. **Día 1 — Estructura inicial del HUB:** solicitud de la portada, estilos oscuros, tarjetas de módulos, fichas modales, filtros, búsqueda y quizzes.
2. **Día 2 — HUB de repaso v0.4:** solicitud de fichas completas, datos estructurados y recursos para los módulos.
3. **Integración de módulos oficiales:** solicitud de los nueve nombres de módulos y su asignación a Javier Mineros y Arcides Canales.
4. **Día 3 — Versión final v1.0:** solicitud del tema claro/oscuro, progreso persistente, mejoras del quiz, documentación y preparación para la Feria de Portales.

Las descripciones se resumen para documentar el proceso; las solicitudes originales se conservaron en el historial del proyecto.
