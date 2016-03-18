var Search = require("./../js/get-repos.js").Search;
var newSearch = new Search();

$(function() {
  $('#searchUsername').click(function() {
    var search = $('#search').val();
    newSearch.getRepos(search);
    $('#search').val("");
    });
  });
