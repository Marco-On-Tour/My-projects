const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('607822ae81ce4848aa640d784f369fa6');

newsapi.v2.topHeadlines({
    //sources: 'bbc-news,the-verge, bloomberg',
    q: 'finance',
    category: 'business',
    language: 'en',
    //country: 'us'
  }).then(response => {
    console.log(response);
    /*
      {
        status: "ok",
        articles: [...]
      }
    */
  });

  function getItems(articles) {
    var items = (data.articles) ? data.articles.description : data.articles.url;
    return items;
}


// React to clicks on the search button
$("#search-button").on("click", function() {

    // Get the data from the form fields into variables
    var search = $("[name=search]").val();
    var type   = $("[name=type]").val();


    // Make the AJaX call to "spotify"
    isLoading = true;
    $.ajax({
        topHeadlines,
        articles: {
            q: search,
            type: type
        },
        success: function(data) {
            isLoading = false;
            
            // Getting items from the data
            var items = getItems(data);
                    
            // Putting results on the page
            var resultHTML = generateHTML(items);
            $("main").html(resultHTML);

            // put the nextURL into the "global" variable
            nextURL = generateNextURLFromReponseData(data);

            if(nextURL) {
                $("#more").show();
            }
        
        } // success function of AJaX call
    }); // end AJaX call

}); // end search-button click