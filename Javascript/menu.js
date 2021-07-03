$(function() {
  var menuOpen = false;
  $(".nav-btn").click(function() {
    var navBars = $(".nav-btn-dec");
    if (!menuOpen) {
      window.scrollTo(0, 0);
      navBars.eq(0).css("transform", "translateY(12px) rotate(135deg)");
      navBars.eq(1).css("opacity", "0");
      navBars.eq(2).css("transform", "translateY(-12px) rotate(45deg)");
      $("nav").css("right", "0");
      menuOpen = true;
    } else {
      navBars.eq(0).css("transform", "translateY(0px) rotate(0deg)");
      navBars.eq(1).css("opacity", "1");
      navBars.eq(2).css("transform", "translateY(0px) rotate(0deg)");
      $("nav").css("right", "-" + $("nav").css("width"));
      menuOpen = false;
    }
  });

  $(window).resize(function() {
    if (window.innerWidth > 1500 && menuOpen) {
      var navBars = $(".nav-btn-dec");
      navBars.eq(0).css("transform", "translateY(0px) rotate(0deg)");
      navBars.eq(1).css("opacity", "1");
      navBars.eq(2).css("transform", "translateY(0px) rotate(0deg)");
      $("nav").css("right", "-" + $("nav").css("width"));
      menuOpen = false;
    }
  });
});
