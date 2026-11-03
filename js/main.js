import { modulosData } from "../data/modulos.js";

const moduleGrid = document.querySelector("#module-grid");
const cardTemplate = document.querySelector("#module-card-template");
const searchInput = document.querySelector("#module-search");
const resultsCount = document.querySelector("#results-count");
const filterButtons = [...document.querySelectorAll(".filter-button")];
const dialog = document.querySelector("#module-dialog");
const dialogClose = document.querySelector("#dialog-close");
const dialogTeacher = document.querySelector("#dialog-teacher");
const dialogTitle = document.querySelector("#dialog-title");
const dialogSummary = document.querySelector("#dialog-summary");
const tabPanel = document.querySelector("#tab-panel");
const tabButtons = [...document.querySelectorAll(".tab-button")];

let activeTeacher = "Todos";
let activeModule = null;

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

function renderModules() {
  const query = normalizeText(searchInput.value.trim());
  const filteredModules = modulosData.filter((module) => {
    const matchesTeacher = activeTeacher === "Todos" || module.docente === activeTeacher;
    const searchableText = [module.nombre, ...module.programas, ...module.herramientas].join(" ");
    return matchesTeacher && normalizeText(searchableText).includes(query);
  });

  moduleGrid.replaceChildren();
  resultsCount.textContent = `${filteredModules.length} ${filteredModules.length === 1 ? "módulo encontrado" : "módulos encontrados"}`;

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
    card.querySelector(".card-category").textContent = module.nombre.split(" ").slice(0, 2).join(" ");
    card.querySelector(".card-index").textContent = String(index + 1).padStart(2, "0");
    card.querySelector(".card-title").textContent = module.nombre;
    card.querySelector(".card-summary").textContent = module.resumen;
    card.querySelector(".card-teacher").textContent = module.docente;
    card.querySelector(".card-tool-count").textContent = `${module.herramientas.length} herramientas`;
    const openButton = card.querySelector(".card-link");
    openButton.setAttribute("aria-label", `Explorar módulo: ${module.nombre}`);
    openButton.addEventListener("click", () => openModule(module));
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

function renderResources(resources) {
  const section = document.createElement("div");
  section.append(createTextElement("h3", "Recursos para profundizar"));
  const list = document.createElement("div");
  list.className = "resource-list";
  resources.forEach(({ titulo, url }) => {
    const link = document.createElement("a");
    link.className = "resource-link";
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.append(createTextElement("span", titulo), createTextElement("span", "↗"));
    link.setAttribute("aria-label", `${titulo} (se abre en una pestaña nueva)`);
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
    const legend = createTextElement("legend", `${questionIndex + 1}. ${question.pregunta}`);
    fieldset.append(legend);

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
        const isCorrect = optionIndex === question.respuesta;
        feedback.textContent = `${isCorrect ? "Correcto." : "No es correcto."} ${question.explicacion}`;
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
    overview: () => renderList("Al finalizar este módulo podrás...", activeModule.aprendizajes),
    instruments: () => renderList("Instrumentos de trabajo", activeModule.instrumentos),
    programs: () => renderList("Programas", activeModule.programas),
    tools: () => renderList("Herramientas y conceptos", activeModule.herramientas),
    resources: () => renderResources(activeModule.recursos),
    evidence: () => renderList("Evidencias de aprendizaje", activeModule.evidencias),
    quiz: () => renderQuiz(activeModule.quiz)
  };
  tabContent[tabName]();
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
  selectTab(tabButtons[0]);
  dialog.showModal();
}

function closeDialog() {
  if (dialog.open) dialog.close();
}

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

renderModules();
