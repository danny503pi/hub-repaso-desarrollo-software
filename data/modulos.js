const evidenciaHubUrl = "https://github.com/danny503pi/hub-repaso-desarrollo-software";

export const modulosData = [
  {
    id: 1,
    nombre: "Módulo 3.0 “Orientación de estudiantes al proceso educativo del tercer año”",
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
      },
      {
        pregunta: "¿Qué conviene hacer cuando se necesita apoyo académico?",
        opciones: ["Esperar hasta terminar el año", "Consultar al docente o los canales de apoyo disponibles", "Ignorar las dificultades", "Abandonar las actividades"],
        correcta: 1,
        explicacion: "Pedir apoyo a tiempo ayuda a aclarar dudas y a encontrar recursos para continuar aprendiendo."
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
    programas: ["Sistema operativo instalado en el equipo", "Navegador web", "Herramientas de diagnóstico del sistema"],
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
      },
      {
        pregunta: "¿Por qué se recomienda respaldar la información antes de una intervención?",
        opciones: ["Para aumentar el brillo de la pantalla", "Para reducir el riesgo de perder datos importantes", "Para sustituir el diagnóstico", "Para omitir el registro técnico"],
        correcta: 1,
        explicacion: "Un respaldo ayuda a recuperar los datos si ocurre un problema durante el mantenimiento."
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
      { titulo: "SQL entendido por SQLite — documentación oficial", url: "https://www.sqlite.org/lang.html" }
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
      },
      {
        pregunta: "¿Para qué se usa una clave foránea en una base de datos relacional?",
        opciones: ["Para relacionar registros de tablas", "Para cambiar el color de una tabla", "Para ordenar archivos del sistema", "Para reemplazar todas las consultas"],
        correcta: 0,
        explicacion: "Una clave foránea referencia una clave de otra tabla y permite representar relaciones entre registros."
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
      { titulo: "Introducción a la escritura y el formato en GitHub", url: "https://docs.github.com/es/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github" },
      { titulo: "Guía de Markdown de GitHub", url: "https://docs.github.com/es/get-started/writing-on-github" }
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
      },
      {
        pregunta: "¿Por qué conviene actualizar la documentación cuando cambia un sistema?",
        opciones: ["Para mantener las instrucciones alineadas con la versión vigente", "Para ocultar los cambios al equipo", "Para evitar que las personas consulten el sistema", "Para aumentar la cantidad de páginas"],
        correcta: 0,
        explicacion: "La documentación actualizada describe el funcionamiento vigente y evita seguir instrucciones obsoletas."
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
      { titulo: "Tu primer sitio web — MDN", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website" },
      { titulo: "Introduction to GitHub — GitHub Skills", url: "https://github.com/skills/introduction-to-github" }
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
      },
      {
        pregunta: "¿Qué ayuda a mantener visible el avance de un proyecto en equipo?",
        opciones: ["Dividir el trabajo en tareas y revisar su estado", "Evitar compartir avances", "Esperar hasta el último día para integrar el trabajo", "Eliminar las pruebas del proyecto"],
        correcta: 0,
        explicacion: "Las tareas y revisiones periódicas hacen más claro el progreso y permiten ajustar el plan."
      }
    ]
  },
  {
    id: 6,
    nombre: "BTVDS 3.1 Desarrollo de aplicaciones de software para la solución de problemas",
    docente: "Arcides Canales",
    resumen: "Analiza una necesidad y tradúcela en requisitos para una aplicación de software. Diseña, implementa y prueba una solución que responda al problema identificado.",
    aprendizajes: [
      "Descomponer un problema en requisitos funcionales y restricciones.",
      "Diseñar una solución mediante algoritmos y estructuras apropiadas.",
      "Probar la aplicación con distintos casos y corregir defectos encontrados."
    ],
    instrumentos: [
      "Guía de análisis y definición de requisitos.",
      "Lista de cotejo para algoritmo, interfaz y pruebas.",
      "Rúbrica de evaluación de la aplicación y su correspondencia con el problema."
    ],
    programas: ["Visual Studio Code", "Navegador web", "Entorno de ejecución según el lenguaje elegido"],
    herramientas: ["JavaScript", "HTML", "CSS", "Algoritmos", "Pruebas de software", "Git"],
    recursos: [
      { titulo: "Guía de JavaScript — MDN", url: "https://developer.mozilla.org/es/docs/Web/JavaScript/Guide" },
      { titulo: "Tu primer sitio web — MDN", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website" }
    ],
    evidencias: [
      { titulo: "Evidencia sugerida: descripción del problema y requisitos (agregar entrega del equipo)", url: evidenciaHubUrl },
      { titulo: "Evidencia sugerida: aplicación y casos de prueba (agregar entrega del equipo)", url: evidenciaHubUrl }
    ],
    quiz: [
      {
        pregunta: "¿Qué debe hacerse antes de implementar una solución de software?",
        opciones: ["Identificar el problema y sus requisitos", "Publicar la aplicación sin probar", "Elegir colores sin conocer al usuario", "Eliminar las restricciones del proyecto"],
        correcta: 0,
        explicacion: "El análisis del problema y sus requisitos orienta el diseño y permite evaluar la solución."
      },
      {
        pregunta: "¿Qué es un caso de prueba?",
        opciones: ["Una entrada y condiciones para comprobar un resultado esperado", "Un nombre alternativo para una variable", "Una copia de seguridad automática", "Un elemento decorativo de la interfaz"],
        correcta: 0,
        explicacion: "Un caso de prueba define condiciones y datos para verificar el comportamiento de una aplicación."
      },
      {
        pregunta: "¿Qué indica un requisito funcional?",
        opciones: ["Una acción o servicio que el sistema debe ofrecer", "El color preferido del editor", "El tamaño del monitor del programador", "La marca del teclado usado"],
        correcta: 0,
        explicacion: "Los requisitos funcionales describen las tareas o servicios que debe realizar el sistema."
      }
    ]
  },
  {
    id: 7,
    nombre: "Modulo 2 Desarrollo de componentes para dispositivos móviles",
    docente: "Arcides Canales",
    resumen: "Reconoce los componentes de una aplicación móvil y cómo se organizan dentro de una plataforma. Practica la creación de interfaces y funcionalidades considerando las características de los dispositivos móviles.",
    aprendizajes: [
      "Identificar componentes y recursos básicos de una aplicación móvil.",
      "Organizar pantallas e interacciones de acuerdo con tareas de la persona usuaria.",
      "Probar el comportamiento de una aplicación en un emulador o dispositivo compatible."
    ],
    instrumentos: [
      "Guía práctica: estructura inicial de una aplicación móvil.",
      "Lista de cotejo para componentes, interfaz e interacción.",
      "Rúbrica de funcionamiento y adaptación de la aplicación."
    ],
    programas: ["Android Studio", "Android Emulator"],
    herramientas: ["Android SDK", "Kotlin", "Activities", "Layouts", "Recursos de aplicación"],
    recursos: [
      { titulo: "Desarrollo de aplicaciones Android — Android Developers", url: "https://developer.android.com/develop" },
      { titulo: "Conceptos fundamentales de componentes Android", url: "https://developer.android.com/guide/components/fundamentals" },
      { titulo: "Primeros pasos con Kotlin — documentación oficial", url: "https://kotlinlang.org/docs/getting-started.html" }
    ],
    evidencias: [
      { titulo: "Evidencia sugerida: proyecto de aplicación móvil (agregar entrega del equipo)", url: evidenciaHubUrl },
      { titulo: "Evidencia sugerida: capturas de la aplicación en emulador (agregar entrega del equipo)", url: evidenciaHubUrl }
    ],
    quiz: [
      {
        pregunta: "¿Qué función cumple Android SDK en el desarrollo móvil?",
        opciones: ["Proporciona herramientas y APIs para crear aplicaciones Android", "Sustituye el sistema operativo del teléfono", "Es un formato de imagen", "Sirve únicamente para redactar documentos"],
        correcta: 0,
        explicacion: "Android SDK reúne herramientas y APIs que se utilizan para desarrollar y probar aplicaciones Android."
      },
      {
        pregunta: "¿Para qué se utiliza un emulador Android?",
        opciones: ["Para ejecutar y probar una aplicación en un dispositivo virtual", "Para reemplazar el código fuente", "Para administrar una cooperativa", "Para crear consultas SQL"],
        correcta: 0,
        explicacion: "El emulador permite simular un dispositivo Android y probar allí la aplicación."
      },
      {
        pregunta: "¿Cuál es una consideración importante al diseñar una interfaz móvil?",
        opciones: ["Que controles y contenido funcionen en pantallas táctiles y tamaños distintos", "Usar solo textos diminutos", "Ignorar la orientación del dispositivo", "Evitar probar la interfaz"],
        correcta: 0,
        explicacion: "Las interfaces móviles deben considerar el tacto, el espacio disponible y diferentes tamaños de pantalla."
      }
    ]
  },
  {
    id: 8,
    nombre: "Modulo 3 Conversación de ingles sobre mantenimiento de sistemas informáticos",
    docente: "Arcides Canales",
    resumen: "Practica conversaciones en inglés relacionadas con el mantenimiento de sistemas informáticos. Aprende a describir fallas, hacer preguntas de diagnóstico y explicar procedimientos técnicos con vocabulario claro.",
    aprendizajes: [
      "Usar vocabulario en inglés para nombrar componentes y fallas informáticas comunes.",
      "Formular preguntas y respuestas breves durante una conversación de soporte.",
      "Explicar en inglés pasos básicos de diagnóstico y mantenimiento."
    ],
    instrumentos: [
      "Guía de vocabulario inglés-español sobre mantenimiento informático.",
      "Lista de cotejo para pronunciación, claridad e intercambio de información.",
      "Rúbrica para diálogo o simulación de una solicitud de soporte."
    ],
    programas: ["Reproductor de audio", "Grabadora de voz", "Navegador web"],
    herramientas: ["Vocabulario técnico en inglés", "Conversación", "Preguntas de diagnóstico", "Instrucciones de mantenimiento"],
    recursos: [
      { titulo: "English at Work — BBC Learning English", url: "https://www.bbc.co.uk/learningenglish/english/features/english-at-work" },
      { titulo: "Diccionario de inglés — Cambridge Dictionary", url: "https://dictionary.cambridge.org/" }
    ],
    evidencias: [
      { titulo: "Evidencia sugerida: glosario bilingüe de mantenimiento (agregar entrega del equipo)", url: evidenciaHubUrl },
      { titulo: "Evidencia sugerida: grabación o guion de diálogo técnico (agregar entrega del equipo)", url: evidenciaHubUrl }
    ],
    quiz: [
      {
        pregunta: "En un diálogo de soporte, ¿qué significa “What seems to be the problem?”",
        opciones: ["¿Cuál parece ser el problema?", "¿Dónde está el teclado?", "¿Cuándo compraste el equipo?", "¿Quién instaló la impresora?"],
        correcta: 0,
        explicacion: "La pregunta solicita que la persona describa el problema que está experimentando."
      },
      {
        pregunta: "¿Qué frase sirve para pedir que alguien reinicie el equipo?",
        opciones: ["Please restart the computer.", "Please delete the keyboard.", "The screen is blue.", "I opened the window."],
        correcta: 0,
        explicacion: "“Please restart the computer” es una instrucción cortés para reiniciar el equipo."
      },
      {
        pregunta: "¿Qué pregunta ayuda a saber si el problema continúa?",
        opciones: ["Is the issue still happening?", "Where is your notebook?", "Do you like this color?", "What time is lunch?"],
        correcta: 0,
        explicacion: "La pregunta comprueba si la falla sigue ocurriendo después de una acción de soporte."
      }
    ]
  },
  {
    id: 9,
    nombre: "Modulo 4 Puesta en marcha de la empresa en asociatividad cooperativa",
    docente: "Arcides Canales",
    resumen: "Explora cómo organizar una iniciativa empresarial basada en la participación y la cooperación. Identifica principios cooperativos, responsabilidades compartidas y pasos para poner en marcha un proyecto asociativo.",
    aprendizajes: [
      "Describir los principios de participación y gestión democrática en una cooperativa.",
      "Identificar roles, responsabilidades y recursos para una iniciativa asociativa.",
      "Proponer acciones para organizar y poner en marcha un proyecto cooperativo."
    ],
    instrumentos: [
      "Guía de análisis de una iniciativa de empresa cooperativa.",
      "Lista de cotejo para roles, objetivos y plan de trabajo.",
      "Rúbrica de presentación de una propuesta asociativa."
    ],
    programas: ["Procesador de texto", "Hoja de cálculo", "Herramienta de presentaciones"],
    herramientas: ["Asociatividad", "Principios cooperativos", "Plan de negocio", "Presupuesto", "Trabajo en equipo"],
    recursos: [
      { titulo: "Cooperativas — Organización Internacional del Trabajo", url: "https://www.ilo.org/topics-and-sectors/cooperatives" },
      { titulo: "Ministerio de Educación, Ciencia y Tecnología de El Salvador", url: "https://www.mined.gob.sv/" }
    ],
    evidencias: [
      { titulo: "Evidencia sugerida: propuesta de empresa cooperativa (agregar entrega del equipo)", url: evidenciaHubUrl },
      { titulo: "Evidencia sugerida: presupuesto y plan de trabajo (agregar entrega del equipo)", url: evidenciaHubUrl }
    ],
    quiz: [
      {
        pregunta: "¿Qué característica distingue a una cooperativa?",
        opciones: ["La participación democrática de sus miembros", "La decisión exclusiva de una persona externa", "La ausencia de objetivos comunes", "La prohibición de colaborar"],
        correcta: 0,
        explicacion: "La participación democrática es un principio central de las organizaciones cooperativas."
      },
      {
        pregunta: "¿Qué debe incluir un plan de puesta en marcha?",
        opciones: ["Objetivos, tareas, responsables y recursos", "Solo un nombre comercial", "Únicamente una lista de colores", "Tareas sin responsables ni fechas"],
        correcta: 0,
        explicacion: "Un plan útil organiza los objetivos, las tareas, las responsabilidades y los recursos necesarios."
      },
      {
        pregunta: "¿Por qué es importante acordar responsabilidades entre los miembros?",
        opciones: ["Para coordinar el trabajo y dar seguimiento a los compromisos", "Para impedir que se comuniquen", "Para evitar definir los objetivos", "Para eliminar la participación"],
        correcta: 0,
        explicacion: "Las responsabilidades acordadas ayudan a coordinar esfuerzos y a cumplir las metas comunes."
      }
    ]
  }
];
