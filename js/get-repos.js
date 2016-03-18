var apiKey = require('./../.env').apiKey;

Search = function(){
};

exports.Search = Search;

Search.prototype.getRepos = function(search){
  $('.listUsers').empty();
  $.get("https://api.github.com/users/" + search + "/repos?access_token=" + apiKey).then(function(response){
    $('.showUsers').append("Your search for " + search + " returned:");
    $('.showUsers').show();
    for (key of response) {
      $('.listUsers').append("<h3>Name: " + key.name + "</h3>");
      if (key.description) {
      $('.listUsers').append("<h4>Description: " + key.description + "</h4>");
      }
    }
  }).fail(function(error){
    $('.showUsers').text(error.responseJSON.message);
    console.log(error.responseJSON.message);
  });
};
