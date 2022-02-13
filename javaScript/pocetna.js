$(document).ready(function(){
  
  $("#slika1").css({
    width:'100%',
    opacity:'1',
    height:'100%',
    transition:'all 2s'
  })
  })
  
  //Klik na dugme Vrati se na početak
  onTop = document.getElementById("onTopBtn");
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      onTop.style.display = "block";
    } else {
      onTop.style.display = "none";
    }
  }
  
  //Klikom na dugme, vraćamo se na vrh stranice
  function topFunction() {
    document.body.scrollTop = 0; // za Safari
    document.documentElement.scrollTop = 0; // za Chrome, Firefox, IE i Opera-u
  }