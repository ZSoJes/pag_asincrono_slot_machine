$(document).ready(function() {
  $("form").submit(function(event){

    var url = $("form").attr("action");
    event.preventDefault();
    $.post(url, function(data){
        $("#die").html(data);       // llamar al codigo dentro del id die
    });

  });
});