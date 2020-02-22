 

    
      $(".typ").click(function(){
      $(this).hide();
      $("typ").toggle();
      $("#ttt").show();
      $(".typ").toggle();
      });



$(document).ready(function(){

$("#tbt").click(function() {
    $(".eg").show("2000");
    $("#tbt").hide("slow")
  }); 
  $(".eg").click(function() {
    $("#tbt").show("2000");
    $(".eg").hide("slow")
  });
});

$(document).ready(function(){
$("#image1").hover(function(){
    $("#text1").toggle()
   })
$("#image2").hover(function(){
    $("#text2").toggle()
})
$("#image5").hover(function(){
    $("#text5").toggle()
   })
});
