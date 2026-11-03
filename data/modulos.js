export const modulosData = [
  {
    id: "html-semantico",
    nombre: "HTML5 semántico y accesibilidad",
    docente: "Javier Mineros",
    resumen: "Estructura páginas claras y accesibles usando elementos semánticos y buenas prácticas de HTML5.",
    aprendizajes: [
      "Identificar la función de las principales etiquetas semánticas de HTML5.",
      "Organizar el contenido con encabezados en un orden lógico.",
      "Aplicar atributos accesibles y textos alternativos adecuados."
    ],
    instrumentos: ["Editor de código", "Navegador web", "Validador HTML"],
    programas: ["Visual Studio Code", "Google Chrome"],
    herramientas: ["HTML5", "W3C Markup Validation Service", "Lighthouse"],
    recursos: [
      { titulo: "Elementos HTML — MDN", url: "https://developer.mozilla.org/es/docs/Web/HTML/Element" },
      { titulo: "Introducción a HTML — MDN", url: "https://developer.mozilla.org/es/docs/Learn/HTML/Introduction_to_HTML" }
    ],
    evidencias: [
      "Página de perfil con estructura semántica y jerarquía correcta de títulos.",
      "Reporte de validación HTML sin errores críticos."
    ],
    quiz: [
      {
        pregunta: "¿Qué elemento representa el contenido principal y único de una página?",
        opciones: ["<section>", "<main>", "<aside>", "<footer>"],
        respuesta: 1,
        explicacion: "El elemento <main> identifica el contenido dominante del documento y debe usarse una sola vez."
      },
      {
        pregunta: "¿Qué atributo ofrece una alternativa textual a una imagen informativa?",
        opciones: ["title", "name", "alt", "srcset"],
        respuesta: 2,
        explicacion: "El atributo alt comunica el propósito o contenido de la imagen a quienes no pueden verla."
      }
    ]
  },
  {
    id: "css-responsive",
    nombre: "CSS3 y diseño responsivo",
    docente: "Javier Mineros",
    resumen: "Construye interfaces adaptables con variables CSS, Flexbox, Grid y consultas de medios.",
    aprendizajes: [
      "Usar selectores y propiedades CSS para definir una presentación consistente.",
      "Crear distribuciones adaptables con CSS Grid y Flexbox.",
      "Definir puntos de quiebre y validar la experiencia en varios tamaños."
    ],
    instrumentos: ["Editor de código", "Herramientas de desarrollo del navegador"],
    programas: ["Visual Studio Code", "Mozilla Firefox"],
    herramientas: ["CSS3", "CSS Grid", "Flexbox", "Media queries"],
    recursos: [
      { titulo: "Diseño web responsivo — MDN", url: "https://developer.mozilla.org/es/docs/Learn/CSS/CSS_layout/Responsive_Design" },
      { titulo: "Conceptos básicos de CSS Grid — MDN", url: "https://developer.mozilla.org/es/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout" }
    ],
    evidencias: [
      "Maquetación de una página que funcione en móvil, tableta y escritorio.",
      "Uso documentado de variables CSS para colores y espaciado."
    ],
    quiz: [
      {
        pregunta: "¿Qué unidad depende del ancho de la ventana gráfica?",
        opciones: ["px", "rem", "vw", "pt"],
        respuesta: 2,
        explicacion: "1vw equivale al 1 % del ancho de la ventana gráfica."
      },
      {
        pregunta: "¿Qué propiedad activa un contenedor Grid?",
        opciones: ["position: grid", "display: grid", "layout: grid", "grid: enabled"],
        respuesta: 1,
        explicacion: "La declaración display: grid convierte el elemento en un contenedor de cuadrícula."
      }
    ]
  },
  {
    id: "javascript-dom",
    nombre: "JavaScript y manipulación del DOM",
    docente: "Arcides Canales",
    resumen: "Añade interactividad a páginas web mediante JavaScript, eventos y operaciones seguras sobre el DOM.",
    aprendizajes: [
      "Declarar variables y funciones con sintaxis moderna de JavaScript.",
      "Escuchar eventos del usuario y actualizar la interfaz.",
      "Seleccionar y crear elementos del DOM sin depender de librerías."
    ],
    instrumentos: ["Editor de código", "Consola del navegador"],
    programas: ["Visual Studio Code", "Google Chrome"],
    herramientas: ["JavaScript", "DOM", "Eventos", "Módulos ES"],
    recursos: [
      { titulo: "Manipulación del DOM — MDN", url: "https://developer.mozilla.org/es/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents" },
      { titulo: "Guía de JavaScript — MDN", url: "https://developer.mozilla.org/es/docs/Web/JavaScript/Guide" }
    ],
    evidencias: [
      "Interfaz que responde a una acción del usuario mediante un evento.",
      "Ejercicio que genera elementos a partir de un arreglo de datos."
    ],
    quiz: [
      {
        pregunta: "¿Qué método permite escuchar un evento en un elemento?",
        opciones: ["watchEvent()", "addEventListener()", "on()", "listen()"],
        respuesta: 1,
        explicacion: "addEventListener registra una función que se ejecuta cuando ocurre el evento especificado."
      },
      {
        pregunta: "¿Qué método crea un nuevo elemento HTML desde JavaScript?",
        opciones: ["document.createElement()", "document.newNode()", "element.append()", "window.create()"],
        respuesta: 0,
        explicacion: "document.createElement() crea un elemento que luego se puede configurar e insertar en el DOM."
      }
    ]
  },
  {
    id: "git-colaboracion",
    nombre: "Git, GitHub y trabajo colaborativo",
    docente: "Arcides Canales",
    resumen: "Controla versiones de un proyecto y colabora con un equipo mediante repositorios y cambios revisables.",
    aprendizajes: [
      "Explicar la diferencia entre un repositorio local y uno remoto.",
      "Guardar cambios coherentes mediante commits descriptivos.",
      "Sincronizar ramas y colaborar mediante solicitudes de cambio."
    ],
    instrumentos: ["Terminal", "Editor de código"],
    programas: ["Git", "GitHub Desktop", "Visual Studio Code"],
    herramientas: ["Repositorio", "Ramas", "Commits", "Pull requests"],
    recursos: [
      { titulo: "Pro Git en español", url: "https://git-scm.com/book/es/v2" },
      { titulo: "GitHub Skills: Introduction to GitHub", url: "https://github.com/skills/introduction-to-github" }
    ],
    evidencias: [
      "Repositorio con README, historial de commits y estructura organizada.",
      "Rama de funcionalidad integrada mediante una solicitud de cambio."
    ],
    quiz: [
      {
        pregunta: "¿Qué comando guarda una instantánea de los cambios preparados?",
        opciones: ["git push", "git commit", "git pull", "git status"],
        respuesta: 1,
        explicacion: "git commit registra los cambios preparados en el historial del repositorio local."
      },
      {
        pregunta: "¿Para qué se usa principalmente una rama en Git?",
        opciones: ["Para borrar el historial", "Para trabajar en cambios de forma aislada", "Para reemplazar el repositorio remoto", "Para instalar dependencias"],
        respuesta: 1,
        explicacion: "Una rama permite desarrollar cambios de manera aislada antes de integrarlos con otra rama."
      }
    ]
  }
];
