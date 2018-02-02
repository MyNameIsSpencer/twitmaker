// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
document.addEventListener("DOMContent", function() {
  var form = document.querySelector('#new_tweet');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    $.ajax({
      url: form.getAttribute('action'),
      method: form.getAttribute('method'),
      data: $(form).serialize(),
      dataType: 'json'
    }).done(function(info) {
      var tweetMessage = document.querySelector('#tweet_message');
      tweetMessage.value = "";
      var freshTweet = document.createElement('li');
      freshTweet.innerHTML = info;
      freshTweet.className = 'tweet';
      var list = document.querySelector('tweets');
      list.prepend(freshTweet);
    }).fail(function() {
      window.location.reload()
    });
  });

});
