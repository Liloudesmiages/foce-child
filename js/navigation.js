//alert("fichier lié");
document.addEventListener('DOMContentLoaded', function () {

// Cette ligne doit sélectionner le conteneur du menu, pas le bouton toggle.
const menu = document.getElementById('menu-content'); // Utilisation de l'ID du conteneur du menu

// Cette ligne doit sélectionner le bouton pour toggle le menu.
const button = document.querySelector('.menu-toggle'); // Utilisation du sélecteur de classe pour le bouton
  
	  // Fonction pour changer basculer(toggle) le menu et l'icône du bouton
	  function toggleMenu() {
		button.classList.toggle('menu-opened');
		menu.classList.toggle('toggled');
		const isExpanded = button.getAttribute('aria-expanded') === 'true';
		button.setAttribute('aria-expanded', !isExpanded);
	  }
  
	  // Écouteur d'événement pour le bouton
	  button.addEventListener('click', function(event) {
		toggleMenu();
	});
});