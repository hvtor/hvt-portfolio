$(document).ready(function(){
  
  // function ButtonTap for HomeButton and AppsWhenTapped/Clicked
    $(".homebutton").mousedown(function() {
        $(this).addClass("homebuttondown");
        $(".homebutton").mouseup(function() {
            $(".homebuttondown").removeClass("homebuttondown");
        });
    });
  

});