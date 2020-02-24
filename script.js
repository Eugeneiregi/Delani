 

    
      // $(".typ").click(function(){
      // $(this).hide();
      // $("typ").toggle();
      // $("#ttt").show();
      // $(".typ").toggle();
      // });



$(document).ready(function(){

$("#tbt").click(function() {
    $(".eg").show("3000");
    $("#tbt").hide("slow");
  }); 
  $(".eg").click(function() {
    $("#tbt").show("2000");
    $(".eg").hide("slow")
  });
  $("#typ").click(function() {
    $(".ttt").show("2000");
    $("#typ").hide("slow");
  }); 
  $(".ttt").click(function() {
    $("#typ").show("2000");
    $(".ttt").hide("slow");
  });
  $("#txm").click(function() {
    $(".pge").show("2000");
    $("#txm").hide("slow");
  }); 
  $(".pge").click(function() {
    $("#txm").show("2000");
    $(".pge").hide("slow")
  });
});

$(document).ready(function(){
$("#image1").hover(function(){
    $("#text1").toggle()
   })
$("#image2").hover(function(){
    $("#text2").toggle()
})
$("#image3").hover(function(){
  $("#text3").toggle()
 })
 $("#image4").hover(function(){
  $("#text4").toggle()
 })
$("#image5").hover(function(){
    $("#text5").toggle()
   })
   $("#image6").hover(function(){
    $("#text6").toggle()
   })
   $("#image7").hover(function(){
    $("#text7").toggle()
   })
   $("#image8").hover(function(){
    $("#text8").toggle()
   })
});




function myFunction(){
  var firstName = $('input#firstName').val();
  var secondName = $("input#secondName").val();
  var email = $("input#email").val();
  var validate = (firstName !== '' && secondName !== '' && email !== '');
  if(validate ==true){
    // document.getElementById("output").innerHTML=("Your input have been recorded");
    alert("Your message has been recorded");
  }
   else if (validate == false){
    alert( "Your message has not been recorded ");
  }
  event.preventDefault();
  // alert("Your input have been recorded");
  // alert("Your message has been recorded")
  
  
}