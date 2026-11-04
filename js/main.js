import { modulosData } from "../data/modulos.js";

const moduleGrid = document.querySelector("#module-grid");
const cardTemplate = document.querySelector("#module-card-template");
const searchInput = document.querySelector("#module-search");
const resultsCount = document.querySelector("#results-count");
const filterButtons = [...document.querySelectorAll(".filter-button")];
const progressBar = document.querySelector("#progress-bar");
const progressLabel = document.querySelector("#progress-label");
const siteAlert = document.querySelector("#site-alert");
const themeToggle = document.querySelector("#theme-toggle");
const themeIcon = themeToggle.querySelector(".theme-icon");
const themeLabel = themeToggle.querySelector(".theme-label");
const themeColorMeta = document.querySelector("#theme-color-meta");
const dialog = document.querySelector("#module-dialog");
const dialogClose = document.querySelector("#dialog-close");
const dialogTeacher = document.querySelector("#dialog-teacher");
const dialogTitle = document.querySelector("#dialog-title");
const dialogSummary = document.querySelector("#dialog-summary");
const reviewToggle = document.querySelector("#review-toggle");
const tabPanel = document.querySelector("#tab-panel");
const tabButtons = [...document.querySelectorAll(".tab-button")];
const validTeachers = new Set(["Javier Mineros", "Arcides Canales"]);
const progressStorageKey = "indel-hub-reviewed-v1";
const themeStorageKey = "indel-hub-theme-v1";
const moduleIds = new Set(modulosData.map(({ id }) => id));
const systemTheme = window.matchMedia("(prefers-color-scheme: light)");

let activeTeacher = "Todos";
let activeModule = null;
let reviewedModuleIds = loadReviewedModules();
let hasThemeOverride = false;

function showAlert(message) {
  siteAlert.textContent = message;
  siteAlert.hidden = false;
}

function readStorage(key) {
  try {
    return window.localStorage.getItem(key);
  } catch (error) {
    showAlert(`El navegador no permitió leer tus preferencias guardadas. ${error.message}`);
    return null;
  }
}

function writeStorage(key, value, description) {
  try {
    window.localStorage.setItem(key, value);
    return true;
  } catch (error) {
    showAlert(`No se pudo guardar ${description} en este navegador. El cambio se conserva mientras la página permanezca abierta. ${error.message}`);
    return false;
  }
}

function loadReviewedModules() {
  const storedValue = readStorage(progressStorageKey);
  if (storedValue === null) return new Set();

  try {
    const storedIds = JSON.parse(storedValue);
    if (!Array.isArray(storedIds) || storedIds.some((id) => !Number.isInteger(id) || !moduleIds.has(id))) {
      throw new TypeError("El formato del progreso guardado no es válido.");
    }
    return new Set(storedIds);
  } catch (error) {
    showAlert(`No se pudo recuperar el progreso guardado; se iniciará un avance vacío. ${error.message}`);
    return new Set();
  }
}

function assertModuleData(modules) {
  if (!Array.isArray(modules) || modules.length !== 9) {
    throw new TypeError("modulosData debe contener exactamente los nueve módulos oficiales.");
  }

  const ids = new Set();
  modules.forEach((module) => {
    if (!Number.isInteger(module.id) || ids.has(module.id)) {
      throw new TypeError(`El módulo "${module.nombre}" debe tener un id numérico único.`);
    }
    ids.add(module.id);

    if (!validTeachers.has(module.docente)) {
      throw new TypeError(`Docente no válido en el módulo "${module.nombre}".`);
    }

    ["nombre", "resumen"].forEach((field) => {
      if (typeof module[field] !== "string" || !module[field].trim()) {
        throw new TypeError(`El módulo ${module.id} debe incluir "${field}".`);
      }
    });

    ["aprendizajes", "instrumentos", "programas", "herramientas", "recursos", "evidencias", "quiz"]
      .forEach((field) => {
        if (!Array.isArray(module[field]) || module[field].length === 0) {
          throw new TypeError(`El módulo "${module.nombre}" debe incluir el array "${field}".`);
        }
      });

    if (module.aprendizajes.length !== 3 || module.quiz.length < 3) {
      throw new TypeError(`El módulo "${module.nombre}" debe incluir tres aprendizajes y al menos tres preguntas.`);
    }

    [...module.recursos, ...module.evidencias].forEach(({ titulo, url }) => {
      let parsedUrl;
      try {
        parsedUrl = new URL(url);
      } catch {
        throw new TypeError(`URL no válida en los enlaces del módulo "${module.nombre}".`);
      }
      if (!titulo || !["http:", "https:"].includes(parsedUrl.protocol)) {
        throw new TypeError(`Enlace no válido en los recursos o evidencias de "${module.nombre}".`);
      }
    });

    module.quiz.forEach((question) => {
      if (
        !question.pregunta
        || !Array.isArray(question.opciones)
        || !Number.isInteger(question.correcta)
        || question.correcta < 0
        || question.correcta >= question.opciones.length
        || !question.explicacion
      ) {
        throw new TypeError(`Pregunta de quiz no válida en el módulo "${module.nombre}".`);
      }
    });
  });
}

function normalizeText(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("es");
}

function createTextElement(tagName, text, className) {
  const element = document.createElement(tagName);
  element.textContent = text;
  if (className) element.className = className;
  return element;
}

function renderProgress() {
  const reviewedCount = reviewedModuleIds.size;
  const percentage = Math.round((reviewedCount / modulosData.length) * 100);
  progressBar.max = modulosData.length;
  progressBar.value = reviewedCount;
  progressBar.textContent = `${percentage}%`;
  progressBar.setAttribute(
    "aria-label",
    `${percentage}% del repaso completado: ${reviewedCount} de ${modulosData.length} módulos`
  );
  progressLabel.textContent = `${reviewedCount} de ${modulosData.length} módulos repasados · ${percentage}%`;
}

function syncCardReviewState(module) {
  const card = moduleGrid.querySelector(`[data-module-id="${module.id}"]`);
  if (!card) return;
  const status = card.querySelector(".card-review-status");
  const isReviewed = reviewedModuleIds.has(module.id);
  status.hidden = !isReviewed;
  status.textContent = isReviewed ? "✓ Módulo repasado" : "";
  card.classList.toggle("is-reviewed", isReviewed);
}

function updateReviewState() {
  const isReviewed = reviewedModuleIds.has(activeModule.id);
  reviewToggle.setAttribute("aria-pressed", String(isReviewed));
  reviewToggle.textContent = isReviewed ? "✓ Repasado · Quitar marca" : "Marcar como repasado";
  syncCardReviewState(activeModule);
  renderProgress();
}

function renderModules() {
  const query = normalizeText(searchInput.value.trim());
  const filteredModules = modulosData.filter((module) => {
    const matchesTeacher = activeTeacher === "Todos" || module.docente === activeTeacher;
    const searchableText = [module.nombre, ...module.programas, ...module.herramientas].join(" ");
    return matchesTeacher && normalizeText(searchableText).includes(query);
  });

  moduleGrid.replaceChildren();
  resultsCount.textContent = `Se muestran ${filteredModules.length} de ${modulosData.length} módulos`;

  if (filteredModules.length === 0) {
    const emptyState = document.createElement("div");
    emptyState.className = "empty-state";
    emptyState.append(
      createTextElement("strong", "No encontramos módulos"),
      createTextElement("span", "Prueba con otra búsqueda o selecciona otro docente.")
    );
    moduleGrid.append(emptyState);
    return;
  }

  filteredModules.forEach((module, index) => {
    const fragment = cardTemplate.content.cloneNode(true);
    const card = fragment.querySelector(".module-card");
    const isReviewed = reviewedModuleIds.has(module.id);
    card.dataset.moduleId = String(module.id);
    card.classList.toggle("is-reviewed", isReviewed);
    card.querySelector(".card-category").textContent = module.nombre.split(" ").slice(0, 3).join(" ");
    card.querySelector(".card-index").textContent = String(index + 1).padStart(2, "0");
    card.querySelector(".card-title").textContent = module.nombre;
    card.querySelector(".card-summary").textContent = module.resumen;
    card.querySelector(".card-teacher").textContent = module.docente;
    card.querySelector(".card-tool-count").textContent = `${module.herramientas.length} herramientas`;
    const reviewStatus = card.querySelector(".card-review-status");
    reviewStatus.hidden = !isReviewed;
    reviewStatus.textContent = isReviewed ? "✓ Módulo repasado" : "";

    const openButton = card.querySelector(".card-link");
    openButton.setAttribute("aria-label", `Explorar módulo: ${module.nombre}`);
    openButton.addEventListener("click", () => openModule(module));
    card.addEventListener("click", (event) => {
      if (!event.target.closest("button, a")) openModule(module);
    });
    moduleGrid.append(fragment);
  });
}

function renderList(title, items) {
  const section = document.createElement("div");
  section.append(createTextElement("h3", title));
  const list = document.createElement("ul");
  list.className = "detail-list";
  items.forEach((item) => list.append(createTextElement("li", item)));
  section.append(list);
  tabPanel.replaceChildren(section);
}

function renderLinkedItems(title, items, className, linkLabel) {
  const section = document.createElement("div");
  section.append(createTextElement("h3", title));
  const list = document.createElement("div");
  list.className = className;
  items.forEach(({ titulo, url }) => {
    const link = document.createElement("a");
    link.className = "resource-link";
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.append(createTextElement("span", titulo), createTextElement("span", "↗"));
    link.setAttribute("aria-label", `${linkLabel}: ${titulo} (se abre en una pestaña nueva)`);
    list.append(link);
  });
  section.append(list);
  tabPanel.replaceChildren(section);
}

function renderQuiz(questions) {
  const section = document.createElement("div");
  section.append(createTextElement("h3", "Comprueba lo que aprendiste"));

  questions.forEach((question, questionIndex) => {
    const fieldset = document.createElement("fieldset");
    fieldset.className = "quiz-question";
    fieldset.append(createTextElement("legend", `${questionIndex + 1}. ${question.pregunta}`));

    const feedback = document.createElement("p");
    feedback.className = "quiz-feedback";
    feedback.setAttribute("aria-live", "polite");

    question.opciones.forEach((option, optionIndex) => {
      const label = document.createElement("label");
      label.className = "quiz-option";
      const input = document.createElement("input");
      input.type = "radio";
      input.name = `quiz-${activeModule.id}-${questionIndex}`;
      input.value = String(optionIndex);
      input.addEventListener("change", () => {
        const isCorrect = optionIndex === question.correcta;
        feedback.textContent = `${isCorrect ? "Correcto." : "Incorrecto."} ${question.explicacion}`;
        feedback.className = `quiz-feedback ${isCorrect ? "is-correct" : "is-incorrect"}`;
      });
      label.append(input, document.createTextNode(option));
      fieldset.append(label);
    });

    fieldset.append(feedback);
    section.append(fieldset);
  });

  tabPanel.replaceChildren(section);
}

function renderTab(tabName) {
  if (!activeModule) return;

  const tabContent = {
    overview: () => renderList("Tres aprendizajes clave", activeModule.aprendizajes),
    instruments: () => renderList("Guías e instrumentos de evaluación", activeModule.instrumentos),
    programs: () => renderList("Programas utilizados", activeModule.programas),
    tools: () => renderList("Herramientas y conceptos", activeModule.herramientas),
    resources: () => renderLinkedItems("Recursos para profundizar", activeModule.recursos, "resource-list", "Recurso"),
    evidence: () => renderLinkedItems("Evidencias del módulo", activeModule.evidencias, "evidence-list", "Evidencia"),
    quiz: () => renderQuiz(activeModule.quiz)
  };
  const renderContent = tabContent[tabName];
  if (!renderContent) throw new RangeError(`Pestaña de módulo no reconocida: ${tabName}`);
  renderContent();
}

function selectTab(selectedButton) {
  tabButtons.forEach((button) => {
    const isSelected = button === selectedButton;
    button.classList.toggle("is-active", isSelected);
    button.setAttribute("aria-selected", String(isSelected));
    button.tabIndex = isSelected ? 0 : -1;
  });
  tabPanel.setAttribute("aria-labelledby", selectedButton.id);
  renderTab(selectedButton.dataset.tab);
}

function openModule(module) {
  activeModule = module;
  dialogTeacher.textContent = module.docente;
  dialogTitle.textContent = module.nombre;
  dialogSummary.textContent = module.resumen;
  updateReviewState();
  selectTab(tabButtons[0]);
  dialog.showModal();
}

function closeDialog() {
  if (dialog.open) dialog.close();
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const isDark = theme === "dark";
  themeToggle.setAttribute("aria-label", `Cambiar a tema ${isDark ? "claro" : "oscuro"}`);
  themeToggle.setAttribute("aria-pressed", String(!isDark));
  themeIcon.textContent = isDark ? "☀" : "☾";
  themeLabel.textContent = `Tema ${isDark ? "claro" : "oscuro"}`;
  themeColorMeta.content = isDark ? "#070a15" : "#f4f7fc";
}

function initializeTheme() {
  const storedTheme = readStorage(themeStorageKey);
  if (storedTheme === "light" || storedTheme === "dark") {
    hasThemeOverride = true;
    applyTheme(storedTheme);
    return;
  }
  if (storedTheme !== null) {
    showAlert("La preferencia de tema guardada no era válida; se usará la preferencia del sistema.");
  }
  applyTheme(systemTheme.matches ? "light" : "dark");
}

assertModuleData(modulosData);
initializeTheme();
renderProgress();
renderModules();

searchInput.addEventListener("input", renderModules);

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeTeacher = button.dataset.teacher;
    filterButtons.forEach((filterButton) => {
      const isActive = filterButton === button;
      filterButton.classList.toggle("is-active", isActive);
      filterButton.setAttribute("aria-pressed", String(isActive));
    });
    renderModules();
  });
});

themeToggle.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
  hasThemeOverride = true;
  writeStorage(themeStorageKey, nextTheme, "el tema seleccionado");
});

systemTheme.addEventListener("change", (event) => {
  if (!hasThemeOverride) applyTheme(event.matches ? "light" : "dark");
});

reviewToggle.addEventListener("click", () => {
  if (!activeModule) return;
  if (reviewedModuleIds.has(activeModule.id)) {
    reviewedModuleIds.delete(activeModule.id);
  } else {
    reviewedModuleIds.add(activeModule.id);
  }
  writeStorage(progressStorageKey, JSON.stringify([...reviewedModuleIds]), "tu progreso de repaso");
  updateReviewState();
});

tabButtons.forEach((button, index) => {
  button.addEventListener("click", () => selectTab(button));
  button.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    let nextIndex = index;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % tabButtons.length;
    if (event.key === "ArrowLeft") nextIndex = (index - 1 + tabButtons.length) % tabButtons.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = tabButtons.length - 1;
    tabButtons[nextIndex].focus();
    selectTab(tabButtons[nextIndex]);
  });
});

dialogClose.addEventListener("click", closeDialog);
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) closeDialog();
});
dialog.addEventListener("close", () => {
  activeModule = null;
});
