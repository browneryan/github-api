var Search = require("./../js/get-repos.js").Search;
var newSearch = new Search();

$(function() {
  $('.showUsers').hide();
  $("#submit").submit(function(e) {
    var search = $('#search').val();
    newSearch.getRepos(search);
    $('#search').val("");
    e.preventDefault();
  });
});
