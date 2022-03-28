import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: 'Some Dummy Movie',
  //     openingText: 'This is the opening text of the movie',
  //     releaseDate: '2021-05-18',
  //   },
  //   {
  //     id: 2,
  //     title: 'Some Dummy Movie 2',
  //     openingText: 'This is the second opening text of the movie',
  //     releaseDate: '2021-05-19',
  //   },
  // ];

  const [movies, setMovies] = useState([]);

  // adding a second state to show loading data from api or done
  const [isLoading, setIsloading] = useState(false);

  // adding a second state to show error
  const [error, setError] = useState(null);

  const fetchMoviesHandler = async () => {
    setIsloading(true);
    setError(null);

    // we use try catch to handle error when using async/await
    // we have to throw error to catch in case http request errored

    try {
      const result = await fetch("https://swapi.dev/api/films");

      if (!result.ok) {
        throw new Error('Something went wrong');
      }

      // if we put throw error after json, it will show a different JSON error
      // than the one we defined
      const data = await result.json();


      // transform data
      const transferomData = data.results.map((movie) => {
        return {
          id: movie.episode_id,
          title: movie.title,
          openingText: movie.opening_crawl,
          releaseDate: movie.release_date,
        };
      });

      setMovies(transferomData);
      setIsloading(false);
    } catch (error) {
      setError(error.message);
      setIsloading(false);
    }
  };

  // way 2
  // async function fetchMoviesHandler() {
  //   const result = await fetch("https://swapi.dev/api/films")
  //   const data = await result.json()
  //   // transform data
  //   const transferomData = data.results.map((movie) => {
  //     return {
  //       id: movie.episode_id,
  //       title: movie.title,
  //       openingText: movie.opening_crawl,
  //       releaseDate: movie.release_date,
  //     };
  //   });
  //   setMovies(transferomData);
  // }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && <p>No movies to show</p>}
        {isLoading && <p>Loading...</p>}
        {!isLoading && error && <p>{error}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
