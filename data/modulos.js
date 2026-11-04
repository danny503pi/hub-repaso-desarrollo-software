const evidenciaHubUrl = "https://github.com/danny503pi/hub-repaso-desarrollo-software";

export const modulosData = [
  {
    id: 1,
    nombre: "HTML5 semántico y accesibilidad",
    docente: "Javier Mineros",
    resumen: "Estructura sitios con HTML semántico y organiza sus secciones con claridad. Aplica buenas prácticas de accesibilidad para que más personas naveguen el contenido.",
    aprendizajes: [
      "Elegir elementos semánticos HTML5 según el propósito de cada contenido.",
      "Organizar títulos, navegación y contenido principal con una jerarquía coherente.",
      "Añadir alternativas textuales y etiquetas accesibles a los contenidos interactivos."
    ],
    instrumentos: [
      "Guía práctica: estructura de una página semántica.",
      "Lista de cotejo: jerarquía de encabezados y regiones principales.",
      "Rúbrica: claridad, semántica y accesibilidad de la página."
    ],
    programas: ["Visual Studio Code", "Google Chrome"],
    herramientas: ["HTML5", "W3C Markup Validation Service", "Lighthouse"],
    recursos: [
      { titulo: "Referencia de elementos HTML — MDN", url: "https://developer.mozilla.org/es/docs/Web/HTML/Reference/Elements" },
      { titulo: "Estructurando la web con HTML — MDN", url: "https://developer.mozilla.org/es/docs/Learn_web_development/Core/Structuring_content" }
    ],
    evidencias: [
      { titulo: "Evidencia sugerida: página con estructura semántica (agregar entrega del equipo)", url: evidenciaHubUrl },
      { titulo: "Evidencia sugerida: lista de cotejo de accesibilidad (agregar entrega del equipo)", url: evidenciaHubUrl }
    ],
    quiz: [
      {
        pregunta: "¿Qué elemento representa el contenido principal y único de una página?",
        opciones: ["<section>", "<main>", "<aside>", "<footer>"],
        correcta: 1,
        explicacion: "El elemento <main> identifica el contenido dominante del documento y debe usarse una sola vez."
      },
      {
        pregunta: "¿Qué atributo ofrece una alternativa textual a una imagen informativa?",
        opciones: ["title", "name", "alt", "srcset"],
        correcta: 2,
        explicacion: "El atributo alt comunica el propósito o contenido de la imagen a quienes no pueden verla."
      }
    ]
  },
  {
    id: 2,
    nombre: "CSS3 y diseño responsivo",
    docente: "Javier Mineros",
    resumen: "Diseña interfaces con Flexbox y CSS Grid. Adáptalas a móviles y escritorios con unidades flexibles y media queries.",
    aprendizajes: [
      "Aplicar selectores, variables y propiedades CSS para mantener estilos consistentes.",
      "Construir distribuciones adaptables combinando Flexbox y CSS Grid.",
      "Ajustar el diseño a móviles, tabletas y escritorio con media queries."
    ],
    instrumentos: [
      "Guía práctica: composición responsiva con Flexbox y Grid.",
      "Lista de cotejo: comportamiento de la interfaz en distintos anchos.",
      "Rúbrica: consistencia visual, legibilidad y adaptación del diseño."
    ],
    programas: ["Visual Studio Code", "Mozilla Firefox"],
    herramientas: ["CSS3", "CSS Grid", "Flexbox", "Media queries", "Variables CSS"],
    recursos: [
      { titulo: "Diseño web responsivo — MDN", url: "https://developer.mozilla.org/es/docs/Learn_web_development/Core/CSS_layout/Responsive_Design" },
      { titulo: "Conceptos básicos de CSS Grid — MDN", url: "https://developer.mozilla.org/es/docs/Web/CSS/Guides/Grid_layout/Basic_concepts" }
    ],
    evidencias: [
      { titulo: "Evidencia sugerida: página adaptada a móvil y escritorio (agregar entrega del equipo)", url: evidenciaHubUrl },
      { titulo: "Evidencia sugerida: captura o reporte de pruebas responsivas (agregar entrega del equipo)", url: evidenciaHubUrl }
    ],
    quiz: [
      {
        pregunta: "¿Qué unidad depende del ancho de la ventana gráfica?",
        opciones: ["px", "rem", "vw", "pt"],
        correcta: 2,
        explicacion: "1vw equivale al 1 % del ancho de la ventana gráfica."
      },
      {
        pregunta: "¿Qué propiedad activa un contenedor Grid?",
        opciones: ["position: grid", "display: grid", "layout: grid", "grid: enabled"],
        correcta: 1,
        explicacion: "La declaración display: grid convierte el elemento en un contenedor de cuadrícula."
      }
    ]
  },
  {
    id: 3,
    nombre: "JavaScript y manipulación del DOM",
    docente: "Arcides Canales",
    resumen: "Añade interactividad con JavaScript, eventos y operaciones del DOM. Actualiza la página sin frameworks ni dependencias.",
    aprendizajes: [
      "Declarar variables y funciones con sintaxis moderna de JavaScript.",
      "Escuchar eventos del usuario y ofrecer una respuesta visible en la interfaz.",
      "Consultar, crear y actualizar elementos del DOM desde un módulo JavaScript."
    ],
    instrumentos: [
      "Guía de laboratorio: selección y actualización de elementos del DOM.",
      "Lista de cotejo: manejo de eventos y respuesta de la interfaz.",
      "Prueba práctica: generar contenido a partir de un arreglo de datos."
    ],
    programas: ["Visual Studio Code", "Google Chrome"],
    herramientas: ["JavaScript", "DOM", "Eventos", "Módulos ES"],
    recursos: [
      { titulo: "Modelo de objetos del documento (DOM) — MDN", url: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model" },
      { titulo: "Guía de JavaScript — MDN", url: "https://developer.mozilla.org/es/docs/Web/JavaScript/Guide" }
    ],
    evidencias: [
      { titulo: "Evidencia sugerida: ejercicio interactivo con eventos (agregar entrega del equipo)", url: evidenciaHubUrl },
      { titulo: "Evidencia sugerida: generación de tarjetas desde datos (agregar entrega del equipo)", url: evidenciaHubUrl }
    ],
    quiz: [
      {
        pregunta: "¿Qué método permite escuchar un evento en un elemento?",
        opciones: ["watchEvent()", "addEventListener()", "on()", "listen()"],
        correcta: 1,
        explicacion: "addEventListener registra una función que se ejecuta cuando ocurre el evento especificado."
      },
      {
        pregunta: "¿Qué método crea un nuevo elemento HTML desde JavaScript?",
        opciones: ["document.createElement()", "document.newNode()", "element.append()", "window.create()"],
        correcta: 0,
        explicacion: "document.createElement() crea un elemento que luego se puede configurar e insertar en el DOM."
      }
    ]
  },
  {
    id: 4,
    nombre: "Git, GitHub y trabajo colaborativo",
    docente: "Arcides Canales",
    resumen: "Registra el historial de cambios con Git y comparte el trabajo en GitHub. Colabora mediante ramas y solicitudes de cambio.",
    aprendizajes: [
      "Distinguir un repositorio local de un repositorio remoto.",
      "Registrar cambios relacionados con mensajes de commit claros.",
      "Colaborar con ramas y solicitudes de cambio antes de integrar modificaciones."
    ],
    instrumentos: [
      "Guía de práctica: ciclo de trabajo básico con Git.",
      "Lista de cotejo: commits, sincronización y estructura del repositorio.",
      "Rúbrica: colaboración, trazabilidad y revisión de cambios."
    ],
    programas: ["Git", "GitHub", "Visual Studio Code"],
    herramientas: ["Repositorio", "Ramas", "Commits", "Pull requests"],
    recursos: [
      { titulo: "Pro Git en español", url: "https://git-scm.com/book/es/v2" },
      { titulo: "Introduction to GitHub — GitHub Skills", url: "https://github.com/skills/introduction-to-github" }
    ],
    evidencias: [
      { titulo: "Evidencia sugerida: repositorio con historial de commits (agregar entrega del equipo)", url: evidenciaHubUrl },
      { titulo: "Evidencia sugerida: rama y solicitud de cambio (agregar entrega del equipo)", url: evidenciaHubUrl }
    ],
    quiz: [
      {
        pregunta: "¿Qué comando guarda una instantánea de los cambios preparados?",
        opciones: ["git push", "git commit", "git pull", "git status"],
        correcta: 1,
        explicacion: "git commit registra los cambios preparados en el historial del repositorio local."
      },
      {
        pregunta: "¿Para qué se usa principalmente una rama en Git?",
        opciones: ["Para borrar el historial", "Para trabajar en cambios de forma aislada", "Para reemplazar el repositorio remoto", "Para instalar dependencias"],
        correcta: 1,
        explicacion: "Una rama permite desarrollar cambios de manera aislada antes de integrarlos con otra rama."
      }
    ]
  }
];
