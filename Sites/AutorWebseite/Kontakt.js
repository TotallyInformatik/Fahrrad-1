$(function() {
  $("#Kontakt").submit(function(e) {

    e.preventDefault();

    var name = $("#name").val();
    var subject = $("#subject").val();
    var message = $("#message").val();

    message = message.replace(new RegExp('\r?\n','g'), "%0D%0A");
    window.open(`mailto:totallyturing@gmail.com?subject=${name}: ${subject}&body=${message}`);

  });
});
