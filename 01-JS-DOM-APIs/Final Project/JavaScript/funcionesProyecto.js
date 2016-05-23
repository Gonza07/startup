//JSON with movies
var objMovies =
        [{"Title": "Frozen",
                "Year": "2013",
                "Rated": "PG",
                "Released": "27 Nov 2013",
                "Runtime": "102 min",
                "Genre": "Animation, Adventure, Comedy",
                "Director": "Chris Buck, Jennifer Lee",
                "Writer": "Jennifer Lee (screenplay), Hans Christian Andersen (story inspired by \"The Snow Queen\" by), Chris Buck (story by), Jennifer Lee (story by), Shane Morris (story by)",
                "Actors": "Kristen Bell, Idina Menzel, Jonathan Groff, Josh Gad",
                "Plot": "When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister, Anna, teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition.",
                "Language": "English, Icelandic", "Country": "USA", "Awards": "Won 2 Oscars. Another 70 wins & 56 nominations.",
                "Poster": "http://ia.media-imdb.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_SX300.jpg",
                "Metascore": "74",
                "imdbRating": "7.6",
                "imdbVotes": "410,734",
                "imdbID": "tt2294629",
                "Type": "movie",
                "Response": "True"},
            
            {"Title": "Titanic",
                "Year": "1997",
                "Rated": "PG-13",
                "Released": "19 Dec 1997",
                "Runtime": "194 min",
                "Genre": "Drama, Romance",
                "Director": "James Cameron",
                "Writer": "James Cameron",
                "Actors": "Leonardo DiCaprio, Kate Winslet, Billy Zane, Kathy Bates",
                "Plot": "A seventeen-year-old aristocrat falls in love with a kind, but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
                "Language": "English", "Country": "USA",
                "Awards": "Won 11 Oscars. Another 109 wins & 73 nominations.",
                "Poster": "http://ia.media-imdb.com/images/M/MV5BMjExNzM0NDM0N15BMl5BanBnXkFtZTcwMzkxOTUwNw@@._V1_SX300.jpg", "Metascore": "74", "imdbRating": "7.7", "imdbVotes": "778,968",
                "imdbID": "tt0120338",
                "Type": "movie",
                "Response": "True"},
            {
                "Title": "The Hobbit: An Unexpected Journey",
                "Year": "2012",
                "Rated": "PG-13",
                "Released": "14 Dec 2012",
                "Runtime": "169 min",
                "Genre": "Adventure, Fantasy",
                "Director": "Peter Jackson",
                "Writer": "Fran Walsh (screenplay), Philippa Boyens (screenplay), Peter Jackson (screenplay), Guillermo del Toro (screenplay), J.R.R. Tolkien (novel)",
                "Actors": "Ian McKellen, Martin Freeman, Richard Armitage, Ken Stott",
                "Plot": "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug.",
                "Language": "English",
                "Country": "USA, New Zealand",
                "Awards": "Nominated for 3 Oscars. Another 9 wins & 66 nominations.",
                "Poster": "http://ia.media-imdb.com/images/M/MV5BMTcwNTE4MTUxMl5BMl5BanBnXkFtZTcwMDIyODM4OA@@._V1_SX300.jpg",
                "Metascore": "58",
                "imdbRating": "7.9",
                "imdbVotes": "623,304",
                "imdbID": "tt0903624",
                "Type": "movie",
                "Response": "True"
            },
            {
                "Title": "Batman",
                "Year": "1989",
                "Rated": "PG-13",
                "Released": "23 Jun 1989",
                "Runtime": "126 min",
                "Genre": "Action, Adventure",
                "Director": "Tim Burton",
                "Writer": "Bob Kane (Batman characters), Sam Hamm (story), Sam Hamm (screenplay), Warren Skaaren (screenplay)",
                "Actors": "Michael Keaton, Jack Nicholson, Kim Basinger, Robert Wuhl",
                "Plot": "The Dark Knight of Gotham City begins his war on crime with his first major enemy being the clownishly homicidal Joker.",
                "Language": "French, English",
                "Country": "USA, UK",
                "Awards": "Won 1 Oscar. Another 9 wins & 22 nominations.",
                "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg",
                "Metascore": "69",
                "imdbRating": "7.6",
                "imdbVotes": "263,082",
                "imdbID": "tt0096895",
                "Type": "movie",
                "Response": "True"

            },
            {
                "Title": "Jobs",
                "Year": "2013",
                "Rated": "PG-13",
                "Released": "16 Aug 2013",
                "Runtime": "128 min",
                "Genre": "Biography, Drama",
                "Director": "Joshua Michael Stern",
                "Writer": "Matt Whiteley",
                "Actors": "Ashton Kutcher, Dermot Mulroney, Josh Gad, Lukas Haas",
                "Plot": "The story of Steve Jobs' ascension from college dropout into one of the most revered creative entrepreneurs of the 20th century.",
                "Language": "English",
                "Country": "USA, Switzerland",
                "Awards": "2 nominations.",
                "Poster": "http://ia.media-imdb.com/images/M/MV5BMTM5NTQ3MTYxN15BMl5BanBnXkFtZTcwODE2Nzk3OQ@@._V1_SX300.jpg",
                "Metascore": "44",
                "imdbRating": "5.9",
                "imdbVotes": "74,889",
                "imdbID": "tt2357129",
                "Type": "movie",
                "Response": "True"

            },
            {
                "Title": "The Social Network",
                "Year": "2010",
                "Rated": "PG-13",
                "Released": "01 Oct 2010",
                "Runtime": "120 min",
                "Genre": "Biography, Drama",
                "Director": "David Fincher",
                "Writer": "Aaron Sorkin (screenplay), Ben Mezrich (book)",
                "Actors": "Jesse Eisenberg, Rooney Mara, Bryan Barter, Dustin Fitzsimons",
                "Plot": "Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, but is later sued by two brothers who claimed he stole their idea, and the co-founder who was later squeezed out of the business.",
                "Language": "French, English",
                "Country": "USA",
                "Awards": "Won 3 Oscars. Another 158 wins & 157 nominations.",
                "Poster": "http://ia.media-imdb.com/images/M/MV5BMTM2ODk0NDAwMF5BMl5BanBnXkFtZTcwNTM1MDc2Mw@@._V1_SX300.jpg",
                "Metascore": "95",
                "imdbRating": "7.7",
                "imdbVotes": "466,536",
                "imdbID": "tt1285016",
                "Type": "movie",
                "Response": "True"

            },
            {
                "Title": "21",
                "Year": "2008",
                "Rated": "PG-13",
                "Released": "28 Mar 2008",
                "Runtime": "123 min",
                "Genre": "Crime, Drama, Thriller",
                "Director": "Robert Luketic",
                "Writer": "Peter Steinfeld (screenplay), Allan Loeb (screenplay), Ben Mezrich (book)",
                "Actors": "Jim Sturgess, Kevin Spacey, Kate Bosworth, Aaron Yoo",
                "Plot": "\"21\" is the fact-based story about six MIT students who were trained to become experts in card counting and subsequently took Vegas casinos for millions in winnings.",
                "Language": "English",
                "Country": "USA",
                "Awards": "1 win & 5 nominations.",
                "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAyNTU5OTcxOV5BMl5BanBnXkFtZTcwMDEyNjM2MQ@@._V1_SX300.jpg",
                "Metascore": "48",
                "imdbRating": "6.8",
                "imdbVotes": "189,260",
                "imdbID": "tt0478087",
                "Type": "movie",
                "Response": "True"


            }];

var express = require('express');
var app = express();
app.get("/movies/:tagId", function (req, res) {

    function sendJSON() {

        var result = search();
        console.log(result);
        if (result.length >= 0) {
            var json = JSON.stringify(result);
            res.send(json);
        }
        else {
            res.send("Error");
        }

    }

});

//function to search movies
function searchMovie(objMovies, query) {

    var result = [];
    for (var i = 0; i <= objMovies.length; i++) {

        if ((objMovies[i].name.search(query) != -1) || objMovies[i].protagonist) {

            result.push(objMovies[i]); //Add to the empty array
        }

    }
    return result; //return the final value of var result
}




function movieFilter(objMovies, filter) {

    if (filter == 'all') {
        return objMovies; //return all movies
    }

    else if (filter == 'recent') {
        return objMovies.sort(function (x, y) {

            return Num(y.Year) - Num(x.Year);

        }); // order movies for year
    }
    else if (filter == 'popular') {
        return objMovies.sort(function (x, y) {

            return Num(y.imdb); // order movies for year
        })

    }
}



app.get('/movies', function (req, res) {

    console.log(objMovies);
    var json = JSON.stringify(objMovies);
    res.send(json);
});
var server = app.listen(8081, function () {

    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
});

//Funcion to show genres
function genres() {

    for (var i = 0; i <= objMovies.length; i++) {

        $("#result").append("-" + "Genres:" + " " + objMovies[i].Genre + "<br>");//Show genres in a paragraph

    }

}

//function to add a new movie
function addMovie() {

    var addTit = $("#txtMovieTitle").val();
    var addYear = parseFloat($("#txtMovieYear").val());
    var addGenere = $("#txtMovieGenere").val();
    var addDesc = $("#txtaDescription").val();
    var addProt = $("#txtProtagonists").val();

    var res = $("#addResult");
    /*Here below, we create a new object to load new movies, and next, 
     make a push to put it on the objMovies*/
    var objNewMovie = [{
            title: addTit,
            year: addYear,
            gen: addGenere,
            descr: addDesc,
            prot: addProt

        }];

    if (addTit !== "" && !isNaN(addYear) && addYear !== "" && addGenere !== "" && addDesc !== "" && addProt !== "") {

        objMovies.push(objNewMovie);
        res.html("Your movie was added!");

        for (var i = 0; i < objMovies; i++) {

//We show the upload movie on a table 
            $("#tblMovies").append("<tr><td>" + objNewMovie[i].addTit +
                    "</td><td>" + objNewMovie[i].addYear +
                    "</td><td>" + objNewMovie[i].addGenere +
                    "</td><td>" + objNewMovie[i].addDesc +
                    "</td><td>" + objNewMovie[i].addProt +
                    "</td></tr>");
        }

    }

    else { //We add an else with an error message

        res.html("Imposible to add your movie. Verify the information.");

    }

}