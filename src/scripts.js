$(document).ready(function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".dayPageBox__prayer").each(function() {
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      if (objectBottom < windowBottom) {
        if (($(this).css("opacity")==0) && (parseInt($(".dayPageBox").css("height")) > 500)) {
          // $(this).addClass("animateRevealOfText");
          $(this).fadeTo(500,1);
        }
        console.log("at bottom");
      }
    });
    $(".homepage__secondBox__leftBox").each(function() {
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      if (objectBottom < windowBottom) {
        if ($(this).css("opacity")==0) {

          $(this).fadeTo(800,1);
        }
        console.log("at bottom");
      }
    });
    $(".homepage__secondBox__rightBox").each(function() {
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      if (objectBottom < windowBottom) {
        if ($(this).css("opacity")==0) {

          $(this).fadeTo(800,1);
        }
        console.log("at bottom");
      }
    });
  }).scroll();
});
