function getQuotes() {
  let i = Math.floor(Math.random() * 100);
  $.ajax({
    type: "GET",
    url: "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json",
    dataType: "json",
    success: function (quotes) {
      $("p#text").replaceWith(`<p id="text" class="animate-flicker"><i id="quote" class="fa fa-quote-left"></i>${quotes.quotes[i].quote}</p>`);
      $("p#author").replaceWith(`<p id="author" class="animate-flicker">- ${quotes.quotes[i].author}</p>`);
    },
  });
}
function tweetIntent() {
  let currentQuote = document.querySelector("#text");
  let currentAuthor = document.querySelector("#author");
  $("#tweet-quote").attr("href", "https://twitter.com/intent/tweet?hashtags=quotes&related=icszal&text=" + encodeURIComponent('"' + currentQuote.textContent + '" ' + currentAuthor.textContent));
}
function changeFont() {
  $("#text").each(function () {
    var classes = ["font-1", "font-2", "font-3", "font-4", "font-5"];
    this.className = classes[($.inArray(this.className, classes) + 1) % classes.length];
  });
}
function changeColor() {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}
