function toggleMenu() {
  const menu = document.getElementById("mobile-menu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

// Zorg dat het menu gesloten is bij pagina laden
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenu) {
    mobileMenu.style.display = "none";
  }

  // Zet automatisch het huidige jaar in de footer
  const yearElement = document.getElementById("currentYear");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});

function toggleSubmenu() {
  const submenu = document.getElementById("mobile-submenu");
  const icon = document.getElementById("submenuIcon");
  if (!submenu) return;

  submenu.classList.toggle("hidden");
  if (icon) {
    icon.classList.toggle("rotate-180");
  }
}

// -----------------------------
// Lightbox functionaliteit
// -----------------------------
function openLightbox(src) {
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox').classList.remove('hidden');
}

function closeLightbox() {
  document.getElementById('lightbox').classList.add('hidden');
}

