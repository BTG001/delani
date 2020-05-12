$(document).ready(function() {
  $("#showcase").css("text-align", "center");
  $("h1").css("font-weight", "bold");
  $("#about-us").css("text-align", "center");
});

$(document).ready(function() {
  $(".clickable").click(function(event) {
    event.preventDefault();
    $(".design-hidden").toggle();
    $(".design-showing").toggle();
  });
});
$(document).ready(function() {
  $(".dev").click(function(event) {
    event.preventDefault();
    $(".development-hidden").toggle();
    $(".development-showing").toggle();
  });
});