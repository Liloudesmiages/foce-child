//alert("fichier script lié");
// Sélectionne la vidéo de fond
const video = document.getElementById('background-video');
//  const image = document.querySelector('.fallback'); 
const breakpointLargePhone = 700;

function checkMediaQuery() {
  // Cache la vidéo en fonction de la largeur de la fenêtre
  if (window.innerWidth >= breakpointLargePhone) {
    video.style.display = 'block';
    video.play();
  } else {
    video.style.display = 'none';
    video.pause();
  }
}

// Exécute checkMediaQuery au chargement de la fenêtre
window.addEventListener('load', checkMediaQuery);

// Exécute checkMediaQuery lors du redimensionnement de la fenêtre
window.addEventListener('resize', checkMediaQuery);

