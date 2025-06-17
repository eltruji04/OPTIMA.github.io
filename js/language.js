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

// Seleccionar el slider y los botones
const slider = document.getElementById('team-slider');
const prevBtn = document.querySelector('.carousel-button.prev');
const nextBtn = document.querySelector('.carousel-button.next');

// Validar que los elementos existan
if (!slider || !prevBtn || !nextBtn) {
  console.warn("No se encontraron los elementos del carrusel.");
} else {
  let index = 0;
  const visibleMembers = 4;
  const totalMembers = slider.children.length;

  function updateSlider() {
    const offset = -index * (100 / visibleMembers);
    slider.style.transform = `translateX(${offset}%)`;
  }

  // Eventos de click y touch
  prevBtn.addEventListener('click', () => {
    if (index > 0) {
      index--;
      updateSlider();
    }
  });

  nextBtn.addEventListener('click', () => {
    if (index < totalMembers - visibleMembers) {
      index++;
      updateSlider();
    }
  });

  // Soporte táctil (opcional pero recomendado)
  prevBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Evitar comportamiento predeterminado
    if (index > 0) {
      index--;
      updateSlider();
    }
  });

  nextBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Evitar comportamiento predeterminado
    if (index < totalMembers - visibleMembers) {
      index++;
      updateSlider();
    }
  });
}