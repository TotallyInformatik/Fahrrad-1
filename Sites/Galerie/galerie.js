$(function() {

  ScrollOut({
    once: true,
    threshold: 0.3
  });


  // Images
  window.Images = ["180Unispin.jpg", "270.jpg", "HopOnWheel.jpg", "InspinLuft.jpg", "seatOut.jpg", "Moi.jpg", "Moi2.jpg", "Wheel.jpg", "Footjam.jpg"];
  window.currentImgIndex;
  var running = false;

  $(".exit-btn").click(function() {
    $(".Image-slider").animate({opacity: "0"}, 300);
    $(".exit-btn").css("display", "none");
    setTimeout(function () {$(".Image-slider").css("display", "none");$(".exit-btn").css("display", "none");}, 300);
  });

  $(".prev-btn").click(function() {
    if (!running) {
      running = true;
      currentImgIndex--;
      if (currentImgIndex < 0) {
        currentImgIndex = Images.length-1;
      }

      $(".slider-img").animate({opacity: "0"}, 500);
      setTimeout(function() {$(".slider-img").attr("src", `../../Images/${Images[currentImgIndex]}`)}, 500);
      $(".slider-img").animate({opacity: "1"}, 500);
      setTimeout(function() {running = false;}, 600);
    }
  });



  $(".next-btn").click(function() {
    if (!running) {
      running = true;
      currentImgIndex++;
      if (currentImgIndex > Images.length-1) {
        currentImgIndex = 0;
      }

      $(".slider-img").animate({opacity: "0"}, 500);
      setTimeout(function() {$(".slider-img").attr("src", `../../Images/${Images[currentImgIndex]}`)}, 500);
      $(".slider-img").animate({opacity: "1"}, 500);
      setTimeout(function() {running = false;}, 600);
    }
  });

  // Videos
  window.Videos = ["Sidejump.mp4", "180UniSpin.mp4", "270.mp4", "DoubleLegwrapMount.mp4", "rolling270back.mp4", "360to180.mp4", "InSpin.mp4"];
  window.currentVidIndex;

  $(".exit-btn-video").click(function() {
    $(".Video-slider").animate({opacity: "0"}, 300);
    $(".exit-btn-video").css("display", "none");
    setTimeout(function () {$(".Video-slider").css("display", "none");$(".exit-btn-video").css("display", "none");}, 300);
  });

  $(".prev-btn-video").click(function() {
    if (!running) {
      running = true;
      currentVidIndex--;
      if (currentVidIndex < 0) {
        currentVidIndex = Videos.length-1;
      }

      $(".slider-vid").animate({opacity: "0"}, 500);
      setTimeout(function() {$(".slider-vid").attr("src", `../../Videos/${Videos[currentVidIndex]}`);}, 500);
      $(".slider-vid").animate({opacity: "1"}, 500);
      setTimeout(function() {running = false;}, 600);
    }
  });



  $(".next-btn-video").click(function() {
    if (!running) {
      running = true;
      currentVidIndex++;
      if (currentVidIndex > Videos.length-1) {
        currentVidIndex = 0;
      }

      $(".slider-vid").animate({opacity: "0"}, 500);
      setTimeout(function() {$(".slider-vid").attr("src", `../../Videos/${Videos[currentVidIndex]}`);}, 500);
      $(".slider-vid").animate({opacity: "1"}, 500);
      setTimeout(function() {running = false;}, 600);
    }
  });
});

function openImageSlider(imgIndex) {
  currentImgIndex = imgIndex;
  $(".Image-slider").css("display", "flex");
  $(".Image-slider").animate({opacity: "1"}, 300);
  $(".exit-btn").css("display", "block");
  $(".slider-img").attr("src", `../../Images/${Images[imgIndex]}`);
}

function openVideoSlider(vidIndex) {
  currentVidIndex = vidIndex;
  $(".Video-slider").css("display", "flex");
  $(".Video-slider").animate({opacity: "1"}, 300);
  $(".exit-btn-video").css("display", "block");
  $(".slider-vid").attr("controls", "");
  $(".slider-vid").attr("src", `../../Videos/${Videos[vidIndex]}`);
}
