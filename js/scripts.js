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

$(document).ready(function() {
  $(".prod").click(function(event) {
    event.preventDefault();
    $(".product-hidden").toggle();
    $(".product-showing").toggle();
  });
});

$(document).ready(function () {
  $('.col-md-3').mouseover(function () {
      $('.overlay', this).show();                
  }).mouseout(function () {
      $('.overlay', this).hide();
  });
});

function validate() {
    var username = document.getElementById("name");
    var mail = document.getElementById("email");
    var textarea = document.getElementById("text");

    
  if(username.value.trim() == "" || mail.value.trim() == "" || textarea.value.trim() == "")
  {
      alert("No blank values allowed");
      return false;
  }
  else
  {
    true;
  }
  var textarea = document.getElementById("text").value;
    alert(username.value + " we have received your message." + " Thank you for reaching out to us.")
}