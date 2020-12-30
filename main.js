/* $(document).ready(function () {
  jAlert("Example of a basic alert box in jquery", "jquery basic alert box");
}); */

/* $(window).scroll(function() {

    if ($(this).scrollTop()>0)
     {
        $('.a').fadeOut();
     }
    else
     {
      $('.a').fadeIn();
     }
 });
 */
/* $(window).scroll(function () {
    var Bottom = $(window).height() + $(window).scrollTop() >= $(document).height();
  if(Bottom )
  {
  $('.a').hide();
  }
  }); */





  /* window.onload = function() {
alert("Hello! I am an alert box!!");  
} */
/* function Scroll() { 
    alert("Hello! I am an alert box!!"); 
    window.scroll(200, 900,); 
} */

/* window.onscroll(function() {
    document.getElementsByClassName("ups").style.display = "none";
}); */


function testScroll(ev){
    /* var Pula = document.getElementsByClassName('ups'); */
    if(window.pageYOffset>2){
        /* alert('User has scrolled at least 400 px!'); */
        document.getElementById("ups").classList.add("fadeOutCLASS");
        document.getElementById("ups").classList.add("d-none");
        /* Pula.ClassList.remove('') */
    } else /* if (window.pageYOffset>1) */ {
        document.getElementById("ups").classList.remove("d-none");
        document.getElementById("ups").classList.remove("fadeOutCLASS");
        
    }
}
window.onscroll=testScroll


