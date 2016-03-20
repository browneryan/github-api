var getRepos = require("./../js/get-repos.js").getRepos;

$(function() {
  $('.showUsers').hide();
  $("#submit").submit(function(e) {
    var search = $('#search').val();
    getRepos(search);
    $('#search').val("");
    e.preventDefault();
  });
});
