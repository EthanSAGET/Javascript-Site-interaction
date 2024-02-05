// Sélection de tous les éléments <li> à l'intérieur de la balise <nav>
const links = document.querySelectorAll("nav li");

// Ajout d'un écouteur d'événement au clic sur l'icône (ou le bouton) qui active/désactive la classe "active" sur la balise <nav>
icons.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Pour chaque lien dans la barre de navigation, ajout d'un écouteur d'événement au clic
links.forEach((link) => {
  link.addEventListener("click", () => {
    // Lorsqu'un lien est cliqué, la classe "active" est retirée de la balise <nav>
    nav.classList.remove("active");
  });
});
