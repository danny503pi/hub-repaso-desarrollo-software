const evidenciaHubUrl = "https://github.com/danny503pi/hub-repaso-desarrollo-software";

export const modulosData = [
  {
    id: 1,
    nombre: "Módulo 3.0 Orientación de estudiantes al proceso educativo del tercer año",
    docente: "Javier Mineros",
    resumen: "Conoce la organización y las expectativas del tercer año de Desarrollo de Software. Planifica tus actividades y reconoce los apoyos, responsabilidades y metas para avanzar durante el año lectivo.",
    aprendizajes: [
      "Identificar la organización, los objetivos y las expectativas del tercer año.",
      "Planificar actividades académicas y distribuir el tiempo de estudio.",
      "Reconocer responsabilidades, normas de convivencia y canales de apoyo escolar."
    ],
    instrumentos: [
      "Guía de orientación para el inicio del tercer año.",
      "Cuestionario diagnóstico de expectativas y conocimientos previos.",
      "Lista de cotejo para metas y plan personal de estudio."
    ],
    programas: ["Navegador web", "Procesador de texto"],
    herramientas: ["Plan personal de estudio", "Metas de aprendizaje", "Normas de convivencia", "Comunicación escolar"],
    recursos: [
      { titulo: "Ministerio de Educación, Ciencia y Tecnología de El Salvador", url: "https://www.mined.gob.sv/" }
    ],
    evidencias: [
      { titulo: "Evidencia sugerida: plan personal de estudio (agregar entrega del equipo)", url: evidenciaHubUrl },
      { titulo: "Evidencia sugerida: metas para el tercer año (agregar entrega del equipo)", url: evidenciaHubUrl }
    ],
    quiz: [
      {
        pregunta: "¿Para qué sirve definir metas de aprendizaje al iniciar el año?",
        opciones: ["Para evitar revisar el progreso", "Para orientar el esfuerzo y evaluar avances", "Para sustituir todas las actividades de clase", "Para estudiar únicamente antes de un examen"],
        correcta: 1,
        explicacion: "Las metas ayudan a organizar el esfuerzo y a reconocer qué avances se han logrado."
      },
      {
        pregunta: "¿Cuál es una estrategia útil para organizar el estudio?",
        opciones: ["Dejar todas las tareas para el último día", "Planificar las tareas y reservar tiempo para repasarlas", "Estudiar solo los temas que ya se dominan", "No consultar las indicaciones de las actividades"],
        correcta: 1,
        explicacion: "Distribuir las tareas y el repaso en un horario facilita el seguimiento del trabajo académico."
      }
    ]
  },
  {
    id: 2,
    nombre: "Módulo 3.2 Mantenimiento y aseguramiento de la operación del sistema informático",
    docente: "Javier Mineros",
    resumen: "Aplica prácticas de mantenimiento para conservar la operación de un sistema informático. Aprende a reconocer fallas, realizar comprobaciones básicas y documentar las acciones realizadas.",
    aprendizajes: [
      "Distinguir tareas de mantenimiento preventivo y correctivo de un sistema.",
      "Seguir una secuencia segura de diagnóstico ante fallas comunes.",
      "Registrar las intervenciones y comprobar el funcionamiento después del mantenimiento."
    ],
    instrumentos: [
      "Guía de práctica: diagnóstico y mantenimiento de un equipo.",
      "Lista de cotejo para inspección, limpieza y verificación del sistema.",
      "Reporte técnico de incidentes y acciones de mantenimiento."
    ],
    programas: ["Sistema operativo instalado en el equipo", "Navegador web", "Herramienta de diagnóstico disponible en el sistema"],
    herramientas: ["Mantenimiento preventivo", "Diagnóstico de fallas", "Actualizaciones", "Respaldo de información"],
    recursos: [
      { titulo: "Solucionar problemas de Windows Update — Soporte de Microsoft", url: "https://support.microsoft.com/es-es/windows/experience/windows-update-troubleshooter" },
      { titulo: "Documentación de Windows — Microsoft Learn", url: "https://learn.microsoft.com/es-es/windows/" }
    ],
    evidencias: [
      { titulo: "Evidencia sugerida: lista de verificación de mantenimiento (agregar entrega del equipo)", url: evidenciaHubUrl },
      { titulo: "Evidencia sugerida: reporte de diagnóstico realizado (agregar entrega del equipo)", url: evidenciaHubUrl }
    ],
    quiz: [
      {
        pregunta: "¿Cuál es el objetivo principal del mantenimiento preventivo?",
        opciones: ["Esperar a que el equipo deje de funcionar", "Reducir la probabilidad de fallas mediante revisiones planificadas", "Eliminar todos los archivos del equipo", "Cambiar el sistema operativo en cada revisión"],
        correcta: 1,
        explicacion: "El mantenimiento preventivo busca detectar riesgos y reducir fallas antes de que interrumpan la operación."
      },
      {
        pregunta: "¿Qué conviene hacer después de aplicar una acción correctiva?",
        opciones: ["Verificar el funcionamiento y documentar el resultado", "Borrar el reporte de la falla", "Apagar el equipo sin comprobarlo", "Repetir la acción sin revisar el problema"],
        correcta: 0,
        explicacion: "La comprobación confirma si el sistema opera correctamente y el registro deja constancia del trabajo."
      }
    ]
  },
  {
    id: 3,
    nombre: "Módulo 3.3 Administración de Bases de Datos",
    docente: "Javier Mineros",
    resumen: "Explora cómo organizar y administrar información en bases de datos. Practica operaciones esenciales para consultar y modificar datos, cuidando su integridad y disponibilidad.",
    aprendizajes: [
      "Describir la estructura de una base de datos relacional mediante tablas y relaciones.",
      "Realizar operaciones básicas de consulta y modificación con SQL.",
      "Reconocer prácticas de respaldo y control de acceso para proteger los datos."
    ],
    instrumentos: [
      "Guía práctica: creación y consulta de una base de datos de ejemplo.",
      "Lista de cotejo para consultas, relaciones e integridad de datos.",
      "Ejercicio evaluado de operaciones SQL básicas."
    ],
    programas: ["SQLite", "Cliente o gestor de bases de datos disponible en el laboratorio"],
    herramientas: ["SQL", "Tablas", "Claves primarias y foráneas", "Consultas", "Respaldo de bases de datos"],
    recursos: [
      { titulo: "Documentación oficial de SQLite", url: "https://www.sqlite.org/docs.html" },
      { titulo: "Lenguaje SQL de SQLite — documentación oficial", url: "https://www.sqlite.org/lang.html" }
    ],
    evidencias: [
      { titulo: "Evidencia sugerida: esquema de base de datos relacional (agregar entrega del equipo)", url: evidenciaHubUrl },
      { titulo: "Evidencia sugerida: archivo con consultas SQL de práctica (agregar entrega del equipo)", url: evidenciaHubUrl }
    ],
    quiz: [
      {
        pregunta: "¿Qué identifica de forma única cada fila de una tabla relacional?",
        opciones: ["Una clave primaria", "Un comentario SQL", "El nombre de la base de datos", "Una consulta SELECT"],
        correcta: 0,
        explicacion: "La clave primaria identifica de forma única cada registro de una tabla."
      },
      {
        pregunta: "¿Qué instrucción SQL se utiliza para consultar datos?",
        opciones: ["UPDATE", "SELECT", "DROP", "INSERT"],
        correcta: 1,
        explicacion: "SELECT permite recuperar y consultar datos almacenados en una o más tablas."
      }
    ]
  },
  {
    id: 4,
    nombre: "Módulo 3.4 Elaboración de documentación de Sistemas informáticos",
    docente: "Javier Mineros",
    resumen: "Organiza la información técnica de un sistema para facilitar su uso, soporte y mantenimiento. Practica la redacción de documentos claros, estructurados y útiles para sus destinatarios.",
    aprendizajes: [
      "Identificar el propósito y los destinatarios de la documentación de un sistema.",
      "Organizar procedimientos, requisitos y especificaciones con una estructura clara.",
      "Revisar la exactitud, legibilidad y actualización de un documento técnico."
    ],
    instrumentos: [
      "Guía de estructura para documentación técnica.",
      "Lista de cotejo para revisar claridad, formato y consistencia.",
      "Rúbrica de documentación de un sistema informático."
    ],
    programas: ["Procesador de texto", "Editor de diagramas disponible en el equipo"],
    herramientas: ["Especificaciones", "Manuales de usuario", "Diagramas", "Markdown", "Control de versiones"],
    recursos: [
      { titulo: "Escribir en GitHub — GitHub Docs", url: "https://docs.github.com/es/get-started/writing-on-github" },
      { titulo: "Introducción a la escritura y el formato en GitHub", url: "https://docs.github.com/es/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github" }
    ],
    evidencias: [
      { titulo: "Evidencia sugerida: manual o guía de usuario (agregar entrega del equipo)", url: evidenciaHubUrl },
      { titulo: "Evidencia sugerida: documentación técnica del sistema (agregar entrega del equipo)", url: evidenciaHubUrl }
    ],
    quiz: [
      {
        pregunta: "¿Qué debe definir primero quien redacta documentación para un sistema?",
        opciones: ["El color de la portada", "El propósito del documento y quién lo utilizará", "El número de páginas sin revisar el contenido", "El formato de impresión"],
        correcta: 1,
        explicacion: "Conocer el propósito y los destinatarios permite seleccionar el contenido y el nivel de detalle adecuados."
      },
      {
        pregunta: "¿Qué hace que un procedimiento técnico sea más útil?",
        opciones: ["Pasos ordenados y verificables", "Instrucciones ambiguas", "Omitir los requisitos previos", "Usar abreviaturas sin explicar"],
        correcta: 0,
        explicacion: "Los pasos ordenados y comprobables ayudan a que otra persona pueda seguir y validar el procedimiento."
      }
    ]
  },
  {
    id: 5,
    nombre: "Módulo 3.8 Proyecto innovador de Desarrollo de Software",
    docente: "Javier Mineros",
    resumen: "Integra conocimientos de desarrollo de software en una propuesta de proyecto que responda a una necesidad. Planifica el trabajo, construye una solución y presenta sus resultados con evidencias.",
    aprendizajes: [
      "Describir una necesidad y plantear una propuesta de solución de software.",
      "Organizar tareas, requisitos y avances durante el desarrollo de un proyecto.",
      "Probar la solución, documentar resultados y comunicar el proyecto."
    ],
    instrumentos: [
      "Guía para formular la idea y los objetivos del proyecto.",
      "Lista de cotejo para requisitos, avances y pruebas.",
      "Rúbrica de evaluación de la solución y su presentación."
    ],
    programas: ["Editor o entorno de desarrollo elegido por el equipo", "Navegador web", "Git"],
    herramientas: ["Requisitos", "Prototipado", "Desarrollo iterativo", "Pruebas", "Control de versiones"],
    recursos: [
      { titulo: "Introduction to GitHub — GitHub Skills", url: "https://github.com/skills/introduction-to-github" },
      { titulo: "Estructurando la web con HTML — MDN", url: "https://developer.mozilla.org/es/docs/Learn_web_development/Core/Structuring_content" }
    ],
    evidencias: [
      { titulo: "Evidencia sugerida: propuesta y planificación del proyecto (agregar entrega del equipo)", url: evidenciaHubUrl },
      { titulo: "Evidencia sugerida: prototipo o versión funcional del proyecto (agregar entrega del equipo)", url: evidenciaHubUrl }
    ],
    quiz: [
      {
        pregunta: "¿Qué conviene identificar antes de elegir una solución de software?",
        opciones: ["La necesidad o problema que se busca atender", "El color del editor de código", "El nombre de la carpeta final", "La cantidad de diapositivas de la presentación"],
        correcta: 0,
        explicacion: "Comprender la necesidad permite justificar la propuesta y orientar sus requisitos."
      },
      {
        pregunta: "¿Por qué es útil probar una solución durante el desarrollo?",
        opciones: ["Para detectar problemas y comprobar requisitos", "Para evitar registrar avances", "Para reemplazar la documentación", "Para impedir que el equipo revise el proyecto"],
        correcta: 0,
        explicacion: "Las pruebas permiten encontrar defectos y verificar si la solución cumple lo esperado."
      }
    ]
  },
  {
    id: 6,
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
    id: 7,
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
