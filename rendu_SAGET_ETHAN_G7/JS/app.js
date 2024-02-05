document.addEventListener("DOMContentLoaded", function () {
    // Attend que le DOM soit chargé avant d'exécuter le script
  
    let form = document.querySelector("form");
    let pseudo = document.querySelector('[name="pseudo"]');
    let adresse = document.querySelector('[name="adresse"]');
    let email = document.querySelector('[name="email"]');
    let mdp = document.querySelector('[name="mdp"]');
    let country = document.querySelector("#country");
    let errors = document.querySelector("#errors");
    let body = document.querySelector("body");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      errors.innerHTML = "";
  
      // Validation de chaque champ du formulaire
      validateField(pseudo, "pseudo", "Veuillez entrer un pseudo avec au moins 2 caractères.");
      validateField(adresse, "adresse", "Veuillez entrer votre adresse.");
      validateField(email, "email", "Veuillez entrer une adresse e-mail valide.");
      validateField(mdp, "mdp", "Veuillez entrer un mot de passe avec au moins 6 caractères.");
  
      // Validation du champ "country"
      validateCountry();
  
      // Si aucune erreur n'est détectée, affiche un message de succès et réinitialise le formulaire
      if (errors.innerHTML === "") {
        displaySuccessMessage();
        form.reset();
      }
    });
  
    // Fonction de validation générique pour les champs de texte
    function validateField(field, fieldName, errorMessage) {
      if (field.value.length < 2) {
        field.style.background = "red";
        errors.innerHTML += "<div>" + errorMessage + "</div>";
      } else {
        field.style.background = "green";
      }
    }
  
    // Validation spécifique pour le champ "country"
    function validateCountry() {
      if (country.value === "selectionnez") {
        country.style.background = "red";
        errors.innerHTML += "<div>Veuillez sélectionner un pays.</div>";
      } else {
        country.style.background = "green";
      }
    }
  
    // Affichage d'un message de succès
    function displaySuccessMessage() {
      let p = document.createElement("p");
      p.textContent = "Formulaire envoyé";
      body.appendChild(p);
    }
  });
  