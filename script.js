$(document).ready(function () {
  // Mobile navigation
  $("#menuBtn").on("click", function () {
    $("#navLinks").toggleClass("open");
  });

  // Small scroll effect for the navigation bar
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 30) {
      $(".navbar").css("box-shadow", "0 4px 18px rgba(0,0,0,.05)");
    } else {
      $(".navbar").css("box-shadow", "none");
    }
  });

});
