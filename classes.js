/* window.addEventListener('DOMContentLoaded', function () {
    debugger;
    var params = new URLSearchParams(window.location.search);
    if (params.toString().length === 0) {
        return;
    }

    var movie = {
        movieName: params.get('MovieName') || '',
        movieDescription: params.get('MovieDescription') || '',
        releaseDate: params.get('ReleaseDate') || '',
        genre: params.get('Genre') || '',
        director: params.get('Director') || '',
        actor: params.get('Actor') || '',
        language: params.get('Language') || '',
        country: params.get('Country') || '',
        budget: params.get('Budget') || ''
    };

    // Example: populate the inputs from query params (useful when reloading)
    var setValue = function (id, value) {
        var el = document.getElementById(id);
        if (el && value) {
            el.value = value;
        }
    };
    setValue('txtMovieName', movie.movieName);
    setValue('txtMovieDescription', movie.movieDescription);
    setValue('txtReleaseDate', movie.releaseDate);
    setValue('txtGenre', movie.genre);
    setValue('txtDirector', movie.director);
    setValue('txtActor', movie.actor);
    setValue('txtLanguage', movie.language);
    setValue('txtCountry', movie.country);
    setValue('txtBudget', movie.budget);

    // Example: do something with the movie object
    console.log('Movie from query params:', movie);
});
 */
class MovieManager {
    /**
     * This function is used to create a movie.
     * @param {Event} event - The event object.
     * @returns {Void} Void
     */
    createMovie(event) {
        if (event) event.preventDefault();
        debugger

        let arryMovies = [];
        let movie = {};
        movie.movieName = document.getElementById("txtMovieName").value;
        movie.movieDescription = document.getElementById("txtMovieDescription").value || '';
        movie.releaseDate = document.getElementById("txtReleaseDate").value || '';
        movie.genre = document.getElementById("txtGenre").value;
        movie.director = document.getElementById("txtDirector").value;
        movie.actor = document.getElementById("txtActor").value;
        movie.language = document.getElementById("txtLanguage").value;
        movie.country = document.getElementById("txtCountry").value;
        movie.budget = document.getElementById("txtBudget").value;

        if (localStorage.getItem("lsMovies") != null) {
            arryMovies = JSON.parse(localStorage.getItem("lsMovies"));

        }

        arryMovies.push(movie);

        localStorage.setItem("lsMovies", JSON.stringify(arryMovies));

        document.getElementById("formMovie").reset();


 
    }
     searchMovie(event) {
        if (event) event.preventDefault();
        debugger;
        let searchMovie = document.getElementById("txtSearchMovie").value;
        
        if (!searchMovie.trim()) {
            alert("Please enter a search term!");
            return;
        }
        
        let storedMovies = localStorage.getItem("lsMovies");
        if (!storedMovies) {
            alert("No movies found in storage!");
            return;
        }
        
        let arryMovies = JSON.parse(storedMovies);
        let movie = arryMovies.find(movie => movie.movieName === searchMovie || movie.movieDescription === searchMovie
            || movie.releaseDate === searchMovie || movie.genre === searchMovie || movie.director === searchMovie
            || movie.actor === searchMovie || movie.language === searchMovie || movie.country === searchMovie
            || movie.budget === searchMovie);
        if (movie) {
            alert(`Movie found: ${movie.movieName} - ${movie.movieDescription}-${this.ageDiffrence(movie.releaseDate)}`);
        } else {
            alert("Movie not found!");
        }
    }
    ageDiffrence(releaseDate){
        if (!releaseDate) {
            return "";
        }

        const release = new Date(releaseDate);
        if (isNaN(release.getTime())) {
            return "invalid date";
        }

        // Normalize to date-only to avoid timezone hour shifts
        let start = new Date(release.getFullYear(), release.getMonth(), release.getDate());
        let end = new Date();
        end = new Date(end.getFullYear(), end.getMonth(), end.getDate());

        let future = false;
        if (start > end) {
            future = true;
            const tmp = start; start = end; end = tmp;
        }

        let years = end.getFullYear() - start.getFullYear();
        let months = end.getMonth() - start.getMonth();
        let days = end.getDate() - start.getDate();

        if (days < 0) {
            months -= 1;
            const prevMonthEnd = new Date(end.getFullYear(), end.getMonth(), 0).getDate();
            days += prevMonthEnd;
        }

        if (months < 0) {
            years -= 1;
            months += 12;
        }

        const suffix = future ? "from now" : "ago";
        return `${years}y ${months}m ${days}d ${suffix}`;

    }
}

const movieManager = new MovieManager();

/**
 * This function is used to create a movie.
 * @param {Event} event - The event object.
 * @returns {Void} Void
 */
function createMovie(event) {

    movieManager.createMovie(event);
}
function _searchMovie() {
    debugger;
    movieManager.searchMovie();
}

const btnSearchMovie = document.getElementById("btnSearchMovie");
btnSearchMovie.onclick = _searchMovie;

// Attach the handler to the form submit event
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById("formMovie");
    if (form) {
        form.onsubmit = createMovie;
    }
  

});






