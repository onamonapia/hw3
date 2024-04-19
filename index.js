// the saved list of movies 
const movieList = [];
// the html list element that will display movies
const showMovieList = document.getElementById("movieList");

document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById("enter").addEventListener("click", enterMovie);
    document.getElementById("show").addEventListener("click", showMovies);

});

// Adds a new Movie object to the movie list.
function enterMovie() {
    let movieName = document.getElementById("movieName").value;
    let movieRating = parseInt(document.getElementById("movieRating").value);
    //console.log(typeof(movieRating));
    let movieYear = parseInt(document.getElementById("movieYear").value);

    try {
        let newMovie = new Movie(movieName, movieRating, movieYear);
        movieList.push(newMovie);
    }
    catch(e) {
        alert(e);
    }
    document.getElementById("movieName").value = "";
    document.getElementById("movieRating").value = "";
    document.getElementById("movieYear").value = "";
    //console.log(movieList);
}

// Will show all of the inputted movies on the HTML page.
function showMovies() {
    
    showMovieList.innerHTML = "";
    for (let i = movieList.length - 1; i >= 0; i--) {
        let item = document.createElement("li");
        item.textContent = movieList[i].toString();
        showMovieList.appendChild(item);        
    }
}