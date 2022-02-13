$(document).ready(function(){

    var i = 0;
    var j = 0;
    var k = 0;
    var l = 0;

   
    $("#drugidivOautorima").css(({
      opacity:'1',
      transition: 'all 2s'
    }))
$("#obrazovanje1").click(function(){
   if(i==0){
    $("#ceoprvi").css({
       width:'auto',
       height:'auto',
       opacity:'1',
       
       transition: 'all 3s'
    })
    i++;
   }
   else{
    $("#ceoprvi").css({
        
      
        width:'0',
       height:'0',
       opacity:'0',
       
       transition: 'all 100ms'

    })
    i--;
   }
})
$("#uvodnitext").hide();
$("#projekat").click(function (){

   $("#uvodnitext").toggle();
})
    


$("#obrazovanje2").click(function(){
   if(j==0){
    $("#ceodrugi").css({
       width:'auto',
       height:'auto',
       opacity:'1',
       
       transition: 'all 3s'
    })
    j++;
   }
   else{
    $("#ceodrugi").css({
        
      
        width:'0',
       height:'0',
       opacity:'0',
       
       transition: 'all 100ms'

    })
    j--;
   }
})
    

$("#obrazovanje3").click(function(){
   if(k==0){
    $("#ceotreci").css({
       width:'auto',
       height:'auto',
       opacity:'1',
       
       transition: 'all 3s'
    })
    k++;
   }
   else{
    $("#ceotreci").css({
        
      
        width:'0',
       height:'0',
       opacity:'0',
       
       transition: 'all 100ms'

    })
    k--;
   }
})


$("#obrazovanje4").click(function(){
   if(l==0){
    $("#ceocetvrti").css({
       width:'auto',
       height:'auto',
       opacity:'1',
       
       transition: 'all 3s'
    })
    l++;
   }
   else{
    $("#ceocetvrti").css({
        
      
        width:'0',
       height:'0',
       opacity:'0',
       
       transition: 'all 100ms'

    })
    l--;
   }
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
})