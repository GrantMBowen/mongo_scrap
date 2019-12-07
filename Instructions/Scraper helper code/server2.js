var axios = require("axios");
var cheerio = require("cheerio");

axios.get("http://www.echojs.com/").then(function(response) {
    // Then, we load that into cheerio and save it to $ for a shorthand selector
    var $ = cheerio.load(response.data);
    var title = "";
    var link = "";
    var results = [];
    // Now, we grab every h2 within an article tag, and do the following:
    $("article h2").each(function(i, element) {
      // Save an empty result object

      // Add the text and href of every link, and save them as properties of the result object
      title = $(this)
        .children("a")
        .text();
      link = $(this)
        .children("a")
        .attr("href");

      results.push({title: title, link: link});
    });
    console.log(results);
  });