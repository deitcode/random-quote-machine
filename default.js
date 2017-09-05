$(document).ready(function () {
  nextQuote();
  $("#newButton").on('click', nextQuote);
  $("#tweetButton").on('click', tweetQuote);
});

function nextQuote() {
  $.getJSON("https://talaikis.com/api/quotes/random/", function (jsonData) {
    $(".quotetext, .quoteauthor").fadeOut(300, function () {
      var texthtml = '<i class="fa fa-quote-left" aria-hidden="true" style="font-size: 20px; padding:0; border: none;"></i>';
      var authorhtml = "- "

      texthtml += jsonData.quote;
      authorhtml += jsonData.author;
      texthtml += '<i class="fa fa-quote-right" aria-hidden="true" style="font-size: 20px; padding:0; border: none;"></i>';

      $(".quotetext").html(texthtml);
      $(".quoteauthor").html(authorhtml);
    });
    $(".quotetext, .quoteauthor").fadeIn(300);
  });

  changeColour();
}

function tweetQuote() {
  window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent('"' + $(".quotetext").text() + '" ' + $(".quoteauthor").text()))
}

function changeColour() {
  var newColour = getRandomColour();

  $(".container").css("background-color", newColour);
  $(".quotebox").css("color", newColour);
  $(".quoteitems").css("color", newColour);
  $(".button").css("background-color", newColour);
}

function getRandomColour() {
  return "hsl(" + 360 * Math.random() + ',' +
  (25 + 30 * Math.random()) + '%,' + 
  (70 + 10 * Math.random()) + '%)';;
}