import { getTrendingMovie } from '../API/movie-api';
import { useState, useEffect } from 'react';
import MovieList from '../components/MovieList';
import s from './Homepage.module.css';

const Homepage = () => {
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    getTrendingMovie().then(setMovie);
  }, []);

  return (
    <div>
      <h1 className={s.title}>Trending Today</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default Homepage;
