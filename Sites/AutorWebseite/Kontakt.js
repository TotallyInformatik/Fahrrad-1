$(function() {
  $("#Kontakt").submit(function(e) {
    e.preventDefault();
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();

    var varData = "name=" + name + "&email=" + email + "&message=" + message;

    $.ajax({
      type: "POST",
      url: "Kontakt.php",
      data: varData,
      success: function() {
        alert("E-Mail gesendet!");
      }
    });
  });
});
