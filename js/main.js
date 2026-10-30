// FERCOMEX-TCN — interactions du site
// (Vous n'avez normalement rien à modifier dans ce fichier.)

// Menu mobile : ouvre / ferme la navigation sur téléphone
const boutonMenu = document.querySelector(".menu-mobile-btn");
const nav = document.querySelector(".nav");

if (boutonMenu && nav) {
  boutonMenu.addEventListener("click", () => {
    nav.classList.toggle("ouvert");
    const ouvert = nav.classList.contains("ouvert");
    boutonMenu.setAttribute("aria-expanded", ouvert ? "true" : "false");
  });
}

// Année automatique dans le pied de page
const annee = document.getElementById("annee");
if (annee) {
  annee.textContent = new Date().getFullYear();
}
