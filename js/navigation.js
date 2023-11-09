//alert("fichier lié")
 //File navigation.js.
 document.addEventListener('DOMContentLoaded', function () {
	(function() {
  
	  // Sélectionner l'élément de navigation
	  const siteNavigation = document.getElementById('site-navigation');
	  if (!siteNavigation) return;
  
  // Cette ligne doit sélectionner le conteneur du menu, pas le bouton toggle.
const menu = document.getElementById('menu-content'); // Utilisation de l'ID du conteneur du menu

// Cette ligne doit sélectionner le bouton pour toggle le menu.
const button = document.querySelector('.menu-toggle'); // Utilisation du sélecteur de classe pour le bouton
  
	  // Fonction pour changer la visibilité du menu et l'icône du bouton
	  function toggleMenu() {
		button.classList.toggle('menu-opened');
		menu.classList.toggle('toggled');
		const isExpanded = button.getAttribute('aria-expanded') === 'true';
		button.setAttribute('aria-expanded', !isExpanded);
	  }
  
	  // Écouteur d'événement pour le bouton
	  button.addEventListener('click', function(event) {
		toggleMenu();
		event.stopPropagation(); // Empêcher la propagation de l'événement
	  });
  
	  // Récupérer tous les liens dans le menu
	  const links = menu.getElementsByTagName('a');
	  // Récupérer les liens ayant des sous-menus
	  const linksWithChildren = menu.querySelectorAll('.menu-item-has-children > a, .page_item_has_children > a');
  
	  // Ajouter la gestion du focus sur les liens
	  for (const link of links) {
		link.addEventListener('focus', toggleFocus, true);
		link.addEventListener('blur', toggleFocus, true);
	  }
  
	  // Gérer le focus sur les liens avec sous-menus sur touchstart
	  for (const link of linksWithChildren) {
		link.addEventListener('touchstart', toggleFocus, false);
	  }
  
	  // Fonction pour gérer le focus
	  function toggleFocus(event) {
		let self = this;
		// Remonter jusqu'au menu
		while (!self.classList.contains('nav-menu')) {
		  // Basculer la classe focus sur les éléments li
		  if (self.tagName.toLowerCase() === 'li') {
			self.classList.toggle('focus');
		  }
		  self = self.parentNode;
		}
  
		// Gérer le focus sur touchstart pour les éléments de menu
		if (event.type === 'touchstart') {
		  const menuItem = this.parentNode;
		  // Enlever le focus des autres éléments
		  for (const link of menuItem.parentNode.children) {
			if (menuItem !== link) {
			  link.classList.remove('focus');
			}
		  }
		  // Basculer le focus sur l'élément touché
		  menuItem.classList.toggle('focus');
		  event.preventDefault(); // Empêcher le comportement par défaut
		}
	  }
	})();
  });
  