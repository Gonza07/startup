//5- JS PRACTICE: Using attribute "hidden" in html part, here we remove it to show the div

$(document).ready(iniciar);

function iniciar() {

    $("#hiddenDiv").removeAttr("hidden");

}
;

/*6- FadeIn part:  we use the "fadeIn" method to change the text box from hidden to visible and 
 "focus" to put the cursor in the textbox */

$(document).ready(init);

function init() {
    $("#btnShow").click(fade);
}

function fade() {
    var aliasControl = $(".alias");
    aliasControl.fadeIn();
    aliasControl.focus();
}

/*
 * 7- Next, we create an array call "movies" and show the content in order on a paragraph
 */

$(".boton").click(showContent);

var movies = ["Ironman", "Avengers", "Titanic"];


function showContent() {

 	movies.sort();
    for (var i = 0; i <= movies.length; i++) {

        
        $("#result").append(movies[i] + "<br>");

    }

}


/*
 * 8-  
 */