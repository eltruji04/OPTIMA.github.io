// Escucha los cambios en el selector de idioma
document
  .getElementById("language-selector")
  .addEventListener("change", (event) => {
    const selectedLanguage = event.target.value;

    // Encuentra todos los elementos con atributos 'data-en', 'data-es', 'data-fr', etc.
    const elements = document.querySelectorAll("[data-en], [data-es], [data-fr]");

    // Cambia el contenido dinámicamente según el idioma seleccionado
    elements.forEach((element) => {
      const translation = element.getAttribute(`data-${selectedLanguage}`);
      if (translation) {
        element.textContent = translation;
      }
    });
  });

// Detecta automáticamente el idioma del navegador al cargar la página
window.addEventListener("DOMContentLoaded", () => {
  const userLang = navigator.language.slice(0, 2); // 'en', 'es', 'fr', etc.
  const languageSelector = document.getElementById("language-selector");

  if (["en", "es", "fr"].includes(userLang)) {
    languageSelector.value = userLang; // Establece el idioma inicial
    languageSelector.dispatchEvent(new Event("change")); // Actualiza el contenido
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const languageSelectors = document.querySelectorAll("#language-selector");

  languageSelectors.forEach((selector) => {
    selector.addEventListener("change", (event) => {
      const selectedLanguage = event.target.value;

      // Actualizar los textos según el idioma seleccionado
      document.querySelectorAll("[data-en]").forEach((element) => {
        element.textContent = element.dataset[selectedLanguage];
      });
    });
  });
});
