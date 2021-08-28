import { Container } from '@material-ui/core';
import React from 'react';
import './App.css';
import AppToolbar from './AppToolbar';
import MovieItem from './MovieItem';


function App() {
  // let value = "Value";
  const movies = [
    {id: 1, title: 'Movie Title', description: 'Movie description',},
    {id: 2, title: 'Movie Title 2', description: 'Movie description',},
    {id: 3, title: 'Movie Title 3', description: 'Movie description',},
  ]
  return (
    <div className="App">
      <AppToolbar></AppToolbar>
      <Container maxWidth="lg">
        {movies.map((mov) => <MovieItem movie={mov}></MovieItem>)}
        
      </Container>
    </div>
  );
}

export default App;
