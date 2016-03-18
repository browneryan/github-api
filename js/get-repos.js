var apiKey = require('./../.env').apiKey;
Search = function(){
};
exports.Search = Search;

Search.prototype.getRepos = function(search){
  $.get("https://api.github.com/users/" + search + "/repos?access_token=" + apiKey).then(function(response){
    console.log(search);

    $('.showUser').text("");
    $('.showUser').text("Your search for " + search + " returned: ");
    console.log(response);
  }).fail(function(error){
    $('.showUser').text(error.responseJSON.message);
    console.log(error.responseJSON.message);
  });
};
