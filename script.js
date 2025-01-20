// Message de bienvenue
window.onload = function () {
  alert("Bienvenue sur la page officielle de Gandxo !");
};

// Animation sur les titres
document.addEventListener("DOMContentLoaded", function () {
  const titles = document.querySelectorAll("h3");

  titles.forEach((title) => {
    title.addEventListener("mouseover", function () {
      this.style.color = "blue";
      this.style.transition = "color 0.5s ease"; // Transition pour une animation douce
    });

    title.addEventListener("mouseout", function () {
      this.style.color = "black";
    });
  });
});

// Vérification des liens (éviter les liens vides ou invalides)
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", function (event) {
    // Vérifie si le lien a un href vide, ou s'il est égal à "#" ou "javascript:void(0)"
    if (!this.href || this.href === "#" || this.href === "javascript:void(0)") {
      event.preventDefault(); // Empêche l'action du lien
      alert("Le lien n'est pas encore disponible l'equipe GANDXO y travaille !");
    }
  });
});