// MOVIE CLASS

// Constructor
// Effects: Creates a new Movie object.
// Throws an error if either the rating or year are invalid.
let Movie = function(name, rating, year) {
    try {
        this.checkMovie(name);
        this.checkRating(rating);
        this.checkYear(year);
        this.name = name;
        this.rating = parseInt(rating);
        this.year = parseInt(year);
    }
    catch(e) {
        console.log(e + "\n Rating: " + rating + " Year: " + year);
        throw e;
    }
}

// Checks if the given movie title is valid (not an empty string).
// Returns: True if the movie title is not an empty string.
// Throws: Error if the movie title is an empty string. 
Movie.prototype.checkMovie = function(movie) {
    if (movie == "") {
        throw "Movie title cannot be empty.";
    }
    else {
        return true;
    }
}

// Checks if the given rating is valid.
// Returns: True if the given rating is an integer between 1 and 5.
// Throws: Error if the rating is not an integer.
//         Error if the rating is not between 1 and 5.
Movie.prototype.checkRating = function(rating) {
    if (Number.isInteger(rating)) {
        if (rating >= 1 && rating <= 5) {
            return true;
        }
        else {
            throw "Rating must be between 1 and 5.";
        }
    }
    else {
        throw "Rating must be an integer between 1 and 5.";
    }
}

// Checks if the given year is valid.
// Returns: True if the year is an integer.
// Throws: Error if the year is not an integer.
Movie.prototype.checkYear = function(year) {
    if (Number.isInteger(year)) {
        return true;
    }
    else {
        throw "Year must be an integer.";
    }
}

// toString method
// Returns: A string version of this movie.
Movie.prototype.toString = function() {
    return "Movie: " + this.name + ", Rating: " + this.rating + ", Year: " + this.year;
}

