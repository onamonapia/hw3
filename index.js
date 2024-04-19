const movieList = [];
const showMovieList = document.getElementById("movieList");

document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById("enter").addEventListener("click", enterMovie);
    document.getElementById("show").addEventListener("click", showMovies);

});

// Adds a new Movie object to the movie list.
function enterMovie() {
    let movieName = document.getElementById("movieName").value;
    let movieRating = document.getElementById("movieRating").valueAsNumber;
    console.log(typeof(movieRating));
    let movieYear = document.getElementById("movieYear").valueAsNumber;

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

function showMovies() {
    showMovieList.innerHTML = "";
    for (let i = 0; i < movieList.length; i++) {
        let item = document.createElement("li");
        item.textContent = movieList[i].toString();
        showMovieList.appendChild(item);        
    }
}