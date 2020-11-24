//Do something

$(function(){

    var $w = $(window),
        $background = $('#background');
  
    // Fix background image jump on mobile
    if ((/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
      $background.css({'top': 'auto', 'bottom': 0});
  
      $w.resize(sizeBackground);
      sizeBackground();
    }
  
    function sizeBackground() {
       $background.height(screen.height);
    }
  });