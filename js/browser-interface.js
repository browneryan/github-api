var getRepos = require('./../js/get-repos.js').getRepos;
var Search = require("./../js/get-repos.js").Search;
var newSearch = new Search();

$(function() {
  $('#searchUsername').click(function() {
    // $('#search').val("");
    var search = $('#search').val();
    console.log(search);
    newSearch.getRepos(search);
    });
  });
