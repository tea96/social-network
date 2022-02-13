// Regulisanje dugmica za prikaz dobrih i loših primera Facebook-a
$("#facelos").hide();
$("#facebookdobar").hide();
$("#dobro").click(function () {
  $("#facelos").hide();
  $("#facebookdobar").toggle();
});
$("#lose").click(function () {
  $("#facebookdobar").hide();
  $("#facelos").toggle();
})

// Regulisanje dugmica za prikaz dobrih i loših primera  Instagrama
$("#instalos").hide();
$("#instadobar").hide();
$("#dobroinsta").click(function () {
  $("#instalos").hide();
  $("#instadobar").toggle();
});
$("#loseinsta").click(function () {
  $("#instadobar").hide();
  $("#instalos").toggle();
})

// Regulisanje dugmica za prikaz dobrih i loših primera YouTube-a
$("#youtubelos").hide();
$("#youtubedobar").hide();
$("#dobroyoutube").click(function () {
  $("#youtubelos").hide();
  $("#youtubedobar").toggle();
});

$("#loseyoutube").click(function () {
  $("#youtubedobar").hide();
  $("#youtubelos").toggle();
})




//Uzimanje modela slike
var modal = document.getElementById('myModal');

// Uzimanje slike
var img = $('.myImg');
var modalImg = $("#img01");
var captionText = document.getElementById("caption");
$('.myImg').click(function () {
  modal.style.display = "block";
  var newSrc = this.src;
  modalImg.attr('src', newSrc);
  captionText.innerHTML = this.alt;
});

// Funkcija za zatvaranje
var span = document.getElementsByClassName("close")[0];

//Kada korisnik klikne X onda se zatvara
span.onclick = function () {
  modal.style.display = "none";
}
// Uzimamo model
var modal = document.getElementById("myModal");
var i;

var img = document.getElementsByClassName("myImg");
//For petlja da bi funkcionisalo za sve slike koje imaju klasu "myImg"
var modalImg = document.getElementById("img01");

for (i = 0; i < img.length; i++) {
  img[i].onclick = function () {

    modal.style.display = "block";
    modalImg.src = this.src;

  }
}

var span = document.getElementsByClassName("close")[0];


span.onclick = function () {
  modal.style.display = "none";
}


