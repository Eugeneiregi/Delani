$(document).ready(function(){
    $("#tbt").click(function(){
       $(this).hide();
       $("#tbt").hide();
       $(".eg").toggle();
       $("#tbt").toggle();
    });
    
      $(".typ").click(function(){
      $(this).hide();
      $("typ").toggle();
      $("#ttt").show();
      $(".typ").toggle();
      });

})
