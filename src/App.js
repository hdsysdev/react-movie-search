import { Container } from '@material-ui/core';
import React, {useState} from 'react';
import './App.css';
import AppToolbar from './AppToolbar';
import MovieItem from './MovieItem';

const axios = require('axios');
const apiUrl = 'http://www.omdbapi.com/?apikey=3c38531d&';
function App() {
    const [movies, setMovies] = useState([]);

  axios.get(apiUrl + 's=Movie')
      .then(res => {
          const movieList = [];
          res.data.Search.forEach(movie => {
              movieList.push({id: movie.imdbID, title: movie.Title, description: movie.Type, poster: movie.Poster});
          });
          setMovies(movieList);
          console.log(res);
          // movies
      })
      .catch(error => {
          console.log(error);
      })
  return (
    <div className="App">
      <AppToolbar/>
      <Container maxWidth="lg">
        {movies.map((mov) => <MovieItem movie={mov} key={mov.id}/>)}
      </Container>
    </div>
  );
}

export default App;
