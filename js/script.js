$(window).on("load", function() {
  $(".loader")
    .delay(1000)
    .fadeOut("slow");
});

$(document).ready(function() {
  $("#currentYear").text(new Date().getFullYear());
  $("#toggle-menu").click(function(e) {
    e.preventDefault();
    $("#main").toggleClass("toggled");
  });
});