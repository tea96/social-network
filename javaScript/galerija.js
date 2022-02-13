$(document).ready(function(){
  var i = 0;
  var j = 0;
  var l = 0;
  var o = 0;
  var k = 0;

 
    $("#dugme1").click(function(){

        if(i==0){

        

        $("#demo1").removeClass('d-none')
        
        $("#ikonica1").removeClass('fa-angle-down')
        
        $("#ikonica1").addClass('fa-angle-up')
    i++
        }
        else{
            $("#demo1").addClass('d-none')
        
            $("#ikonica1").removeClass('fa-angle-up')

            $("#ikonica1").addClass('fa-angle-down')
            
           i--
        }
    
    })




    $("#dugme2").click(function(){

        if(j==0){

        

        $("#demo2").removeClass('d-none')
        
        $("#ikonica2").removeClass('fa-angle-down')
        
        $("#ikonica2").addClass('fa-angle-up')
    j++
        }
        else{
            $("#demo2").addClass('d-none')
        
            $("#ikonica2").removeClass('fa-angle-up')

            $("#ikonica2").addClass('fa-angle-down')
            
           j--
        }
    
    })





    $("#dugme3").click(function(){

        if(k==0){

        

        $("#demo3").removeClass('d-none')
        
        $("#ikonica3").removeClass('fa-angle-down')
        
        $("#ikonica3").addClass('fa-angle-up')
    k++
        }
        else{
            $("#demo3").addClass('d-none')
        
            $("#ikonica3").removeClass('fa-angle-up')

            $("#ikonica3").addClass('fa-angle-down')
            
           k--
        }
    
    })






    $("#dugme4").click(function(){

        if(o==0){

        

        $("#demo4").removeClass('d-none')
        
        $("#ikonica4").removeClass('fa-angle-down')
        
        $("#ikonica4").addClass('fa-angle-up')
    o++
        }
        else{
            $("#demo4").addClass('d-none')
        
            $("#ikonica4").removeClass('fa-angle-up')

            $("#ikonica4").addClass('fa-angle-down')
            
           o--
        }
    
    })




    $("#dugme5").click(function(){

        if(l==0){

        

        $("#demo5").removeClass('d-none')
        
        $("#ikonica5").removeClass('fa-angle-down')
        
        $("#ikonica5").addClass('fa-angle-up')
    l++
        }
        else{
            $("#demo5").addClass('d-none')
        
            $("#ikonica5").removeClass('fa-angle-up')

            $("#ikonica5").addClass('fa-angle-down')
            
           l--
        }
    
    })
});
