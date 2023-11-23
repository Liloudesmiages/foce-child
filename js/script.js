//alert("fichier script lié");
document.addEventListener("DOMContentLoaded", function () {
  // Sélectionne la vidéo de fond
  const video = document.getElementById("background-video");
  //  const image = document.querySelector('.fallback');
  const breakpointLargePhone = 700;

  function checkMediaQuery() {
    // Cache la vidéo en fonction de la largeur de la fenêtre
    if (window.innerWidth >= breakpointLargePhone) {
      video.style.display = "block";
      video.play();
    } else {
      video.style.display = "none";
      video.pause();
    }
  }

  // Exécute checkMediaQuery au chargement de la fenêtre
  window.addEventListener("load", checkMediaQuery);

  // Exécute checkMediaQuery lors du redimensionnement de la fenêtre
  window.addEventListener("resize", checkMediaQuery);

  // Initialise skroll
  var s = skrollr.init();
});

  //Coverflow-effect parameters.
  const swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true, //main
    centeredSlides: true, //centre la diapo
    slidesPerView: "auto",
    loop: true, //boucle: la fin rejoint le début
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    //Adaptation automatique du nb diapos visibles en fonction de la taille des de l'écran .
    breakpoints: {
      640: {
        slidesPerView: "auto",
      },
      768: {
        slidesPerView: "auto",
      },
      1024: {
        slidesPerView: "auto",
      },
    },
  });

// Animations des titres
const handleIntersectTitles = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("anim");
    } else {
      entry.target.classList.remove("anim");
    }
  });
};

const observerTitles = new IntersectionObserver(handleIntersectTitles);
const elementsToObserveTitles = document.querySelectorAll("h2, h3");

elementsToObserveTitles.forEach((element) => {
  observerTitles.observe(element);
});

// Rotation accélérée au scroll
const handleIntersectRotation = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("rotation2");
      // Retirer la classe après 5 secondes
      setTimeout(() => {
        entry.target.classList.remove("rotation2");
      }, 5000);
    }
  });
};

const observerRotation = new IntersectionObserver(handleIntersectRotation);
const elementsToObserveRotation = document.querySelectorAll(
  "#story, #characters, #place, #studio, #oscars"
);

elementsToObserveRotation.forEach((element) => {
  observerRotation.observe(element);
});

/**Animation nuages
const handleIntersectPlace = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animationnuages");
    } else {
      entry.target.classList.remove("animationnuages");
  }
  });
};

const observerPlace = new IntersectionObserver(handleIntersectPlace);
const elementsToObservePlace = document.querySelectorAll(".nuages");

elementsToObservePlace.forEach((element) => {
  observerPlace.observe(element);
});*/

//Effet parallaxe nuages
document.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  var nuages = document.querySelector('.nuages');
  var speed = 0.5; // Vitesse de l'effet de parallaxe
  nuages.style.transform = 'translateX(300px)'; nuages.style.transform = 'translateX(' + scrollPosition * speed + 'px)';
});

//Effet parallaxe logo
document.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  var logo = document.querySelector('.logo-header');
  var parallaxOffset = scrollPosition * 0.5; 

  // Appliquer la transformation parallaxe sans écraser l'animation de flottement
  logo.style.transform = 'translateY(' + (parallaxOffset - 15) + 'px)'; // -10 pour compenser l'animation initiale
});
