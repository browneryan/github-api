var apiKey = require('./../.env').apiKey;
var newSearch = new Search();

$(function() {
  $('#searchUsername').click(function() {
    var search = $('#search').val();
    $('#search').val("");
    // newSearch.getRepos();use an object??
    $('.showUser').text("Your search for " + search + " returned: ");//add specific item from API you want here
    }).fail(function(error) {
      $('.showUser').text(error.responseJSON.message);
    });
  });
});
