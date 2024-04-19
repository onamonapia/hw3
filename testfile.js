
// Test rating ranges outside range. 
try {
    let movie1 = new Movie("x", 0, 20);
}
catch(e) {
    alert(e);
}

// let movie2 = new Movie("x", 6, 20);

// // // Test non-integer ratings.
// let movie3 = new Movie("x", 1.5, 20);
// let movie4 = new Movie("x", "y", 20);

// // // Test non-integer year.
// let movie5 = new Movie("x", 1, 2.5);

// // // if everything works
let movie6 = new Movie("x", 1, 5);
console.log(movie6.toString());

