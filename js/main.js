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

// ==================== FORMULAIRE DE CONTACT ====================
// Le site est statique : il n'a aucun serveur pour envoyer un courriel.
// Le formulaire prépare donc le message dans le logiciel de messagerie
// du visiteur, qui l'envoie lui-même. Aucun message ne passe par un
// service extérieur.
//
// L'adresse de destination n'est PAS écrite ici : elle est lue dans
// l'attribut action="mailto:..." du formulaire, dans contact.html.
// Pour la changer, modifiez-la dans contact.html et en/contact.html.
const formContact = document.getElementById("form-contact");

if (formContact) {
  // Récupère la valeur du premier champ trouvé (les noms de champs
  // diffèrent entre la version française et la version anglaise).
  const valeurChamp = (noms) => {
    for (const nom of noms) {
      const champ = formContact.querySelector('[name="' + nom + '"]');
      if (champ) return champ.value.trim();
    }
    return "";
  };

  formContact.addEventListener("submit", (evenement) => {
    // Le navigateur a déjà vérifié les champs obligatoires avant
    // d'arriver ici : on peut reprendre la main sans risque.
    evenement.preventDefault();

    // Piège anti-robots : un visiteur humain ne voit pas ce champ, donc
    // ne le remplit jamais. S'il est rempli, on ignore silencieusement.
    const piege = formContact.querySelector('[name="_gotcha"]');
    if (piege && piege.value !== "") return;

    const destinataire =
      (formContact.getAttribute("action") || "").replace(/^mailto:/, "");
    if (!destinataire) return;

    const nom = valeurChamp(["nom", "name"]);
    const courriel = valeurChamp(["email"]);
    const sujet = valeurChamp(["sujet", "subject"]);
    const message = valeurChamp(["message"]);

    const objet = sujet || "Message depuis le site FERCOMEX-TCN";
    const corps = message + "\n\n--\n" + nom + "\n" + courriel;

    window.location.href =
      "mailto:" + destinataire +
      "?subject=" + encodeURIComponent(objet) +
      "&body=" + encodeURIComponent(corps);
  });
}
