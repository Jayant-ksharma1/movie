let movies = [];
const movieInput = document.getElementById("movieInput");
const addMovieButton = document.getElementById("addMovieButton");
const movieList = document.getElementById("movieList");
const totalMovies = document.getElementById("totalMovies");
const clearListButton = document.getElementById("clearListButton");

function updateMovieList() {
    movieList.innerHTML = "";
    movies.forEach((movie, index) => {
        const li = document.createElement("li");
        li.textContent = movie;
        li.addEventListener("click", () => {
            movies.splice(index, 1);
            updateMovieList();
        });
        movieList.appendChild(li);
    });
    totalMovies.textContent = `Total Movies Added: ${movies.length}`;
}

addMovieButton.addEventListener("click", () => {
    const movieName = movieInput.value.trim();
    if (movieName !== "") {
        movies.push(movieName);
        movieInput.value = "";
        updateMovieList();
    }
});

clearListButton.addEventListener("click", () => {
    movies = [];
    updateMovieList();
});
