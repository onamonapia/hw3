// MOVIE CLASS

// Constructor
// Effects: Creates a new Movie object.
// Throws an error if either the rating or year are invalid.
let Movie = function(name, rating, year) {
    try {
        checkRating(rating);
        checkYear(year);
        this.name = name;
        this.rating = rating;
        this.year = year;
    }
    catch(e) {
        throw e;
    }
}

// Checks if the given rating is valid.
// Returns: True if the given rating is an integer between 1 and 5.
// Throws: TypeError if the rating is not an integer.
//         RangeError if the rating is not between 1 and 5.
let checkRating = function(rating) {
    if (Number.isInteger(rating)) {
        if (rating >= 1 && rating <= 5) {
            return true;
        }
        else {
            throw new RangeError("Rating must be between 1-5.");
        }
    }
    else {
        throw new TypeError("Rating is not an integer.");
    }
}

// Checks if the given year is valid.
// Returns: True if the year is an integer.
// Throws: TypeError if the year is not an integer.
let checkYear = function(year) {
    if (Number.isInteger(year)) {
        return true;
    }
    else {
        throw new TypeError("Year is not an integer.");
    }
}

