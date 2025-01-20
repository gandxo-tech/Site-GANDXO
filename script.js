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
      this.style.transition = "color 0.5s";
    });

    title.addEventListener("mouseout", function () {
      this.style.color = "black";
    });
  });
});

// Vérification des liens
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", function (event) {
    if (!this.href) {
      event.preventDefault();
      alert("Le lien n'est pas encore disponible l'equipe GANDXO y travaille !");
    }
  });
});

