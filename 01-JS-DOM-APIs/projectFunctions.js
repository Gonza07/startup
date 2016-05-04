//2- Objet "objMovies" where movies are saved

var objMovies = [
    {
        name: "Titanic",
        gender: "Romance, drama",
        year: "1997",
        description: "00",
        protagonist: "Leonardo DiCaprio"

    },
    {
        name: "Ironman 3",
        gender: "Action, fiction",
        year: "2015",
        description: "00",
        protagonist: "00"

    },
    {
        name: "2012",
        gender: "Fiction, drama",
        year: "2011",
        description: "00",
        protagonist: "00"

    }];

$("#showListMovies").click(listMovies);
$("#btnShowLatestMovies").click(lastMovies);
$("#btnAdd").click(addMovie);
$("#btnSearchMovie").click(search);
$("#btnShowGender").click(genders);


$("#tblMovies").hide();


//1- We create a function to list the all movies on a table

function listMovies() {


    for (var i = 0; i <= objMovies.length; i++) {

        $("#tblMovies").show();
        $("#tblMovies").append("<tr><td>" + objMovies[i].name +
                "</td><td>" + objMovies[i].gender +
                "</td><td>" + objMovies[i].year +
                "</td><td>" + objMovies[i].description +
                "</td><td>" + objMovies[i].protagonist +
                "</td></tr>");

    }



}

//2.1- Here we use a function to put the movies in a year order

function lastMovies() {

    orderMovies;
}

function orderMovies(a, b) {
 
 var order;
 
 if (a.year > b.year) {
 
 order = -1;
 }
 else {
 order = 1;
 
 }
 return order;
 }
 



//2.4 search movie function, you can serch with the movie actor name, or simply with movie title



function search() {

    var movieFinder = $("#txtSearchMovie").val();

    for (var i = 0; i <= objMovies.length; i++) {
        var answer = $("#result");
        if (movieFinder === objMovies[i].name || movieFinder === objMovies[i].protagonist) {
            answer.html("");
            answer.append("-" + "Name:" + objMovies[i].name + "<br>" +
                    "-" + "Gender:" + objMovies[i].gender + "<br>" +
                    "-" + "Year:" + objMovies[i].year + "<br>" +
                    "-" + "Description:" + objMovies[i].description + "<br>" +
                    "-" + "Protagonists:" + objMovies[i].protagonist);
            break;
        }
        else {
            answer.html("");
            answer.html("Your movie does not exist");
        }
    }
}


//2.5 Add movie and verify


function addMovie() {

    var addTit = $("#txtMovieTitle").val();
    var addYear = parseFloat($("#txtMovieYear").val());
    var addGenere = $("#txtMovieGenere").val();
    var addDesc = $("#txtaDescription").val();
    var addProt = $("#txtProtagonists").val();

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
        $("#addResult").html("Your movie was added!");

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

    else { //This is the error message

        $("#addResult").html("Imposible to add your movie. Verify the information.");

    }

}


//2.3 Return generes

function genders() {

    for (var i = 0; i <= objMovies.length; i++) {

        $("#result").append("-" + "Genders:" + " " + objMovies[i].gender + "<br>");

    }

}