


$("#search").on("click", function(event) {

    event.preventDefault();

    var search = $("#searchTerm").val();
    console.log(search);

    var pubYear = $("#startYear");

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&api-key=GzmNz2por4oYWvJELn3746DO5getGmv8";

    $.ajax({
        url : queryURL,
        method : "GET"
        }).then(function(response) {

            console.log(response)

            var results = response.response.docs;


            for (var i = 0; i<results.length ; i++){

                var articleDiv = $("<div>");

                var abstract = $("<p>").text(results[i].abstract);

                var link = $("<a>").text(results[i].web_url);

                link.attr("href", results[i].web_url);

                var image = $("<img>");
                console.log(results[i].multimedia[0].url);
                image.attr("src", "https://static01.nyt.com/" + results[i].multimedia[0].url);



                articleDiv.append(abstract);
                articleDiv.append(link);
                articleDiv.append(image);

                $("#topArticles").prepend(articleDiv);
            }
     
     
    });


});