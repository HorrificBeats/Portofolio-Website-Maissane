//Fonction JS pour cacher/afficher le "scroll hint" sur la page d'accueil
function hideScrollHint(ev) {
  if (window.pageYOffset > 500) {
    document.getElementById("scrollHint").classList.add("d-none");
  } else {
    document.getElementById("scrollHint").classList.remove("d-none");
  }
}

//Demarer la fonction lorsque l'utilisateur fait défiler la page
window.onscroll = hideScrollHint;

/* Movement automatique carousel Bootstrap */
/* Désactivé avec jQuery */
$(document).ready(function () {
  //Event for pushed the video
  $("#your-carousel-id").carousel({
    pause: true,
    interval: false,
  });
});
