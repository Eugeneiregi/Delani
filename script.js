 

    
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
$(".sikes").hover(function(){
    $(".project-text").toggle()
    
})
});
