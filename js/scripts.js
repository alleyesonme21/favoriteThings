$(document).ready(function() {
  $("#favorites").submit(function(event) {
    event.preventDefault();
    var thing1 = $("#thing1").val();
    var thing2 = $("#thing2").val();
    var thing3 = $("#thing3").val();
    var thing4 = $("#thing4").val();
    var thing5 = $("#thing5").val();

    var favoriteThings = [thing1, thing2, thing3, thing4, thing5];
    var mostFavoriteThings = [];
    mostFavoriteThings.push(favoriteThings[0], favoriteThings[1], favoriteThings[2]);

    $("#fav1").text(mostFavoriteThings[0]);
    $("#fav2").text(mostFavoriteThings[1]);
    $("#fav3").text(mostFavoriteThings[2]);

    $("#result").show();
  });
});