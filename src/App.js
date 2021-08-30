import { Container } from '@material-ui/core';
import React, {Component} from 'react';
import './App.css';
import AppToolbar from './AppToolbar';
import MovieItem from './MovieItem';

const axios = require('axios');
const apiUrl = 'http://www.omdbapi.com/?apikey=3c38531d&';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {movies: []}
    }
    componentDidMount(){

        axios.get(apiUrl + 's=Movie&page=1')
            .then(res => {
                const movieList = [];
                res.data.Search.forEach(movie => {
                    movieList.push({id: movie.imdbID, title: movie.Title, description: movie.Type, poster: movie.Poster});
                });
                this.setState({movies: movieList});
                console.log(res);
            })
            .catch(error => {
                console.log(error);
            })
    }
    render(){

        return (
            <div className="App">
                <AppToolbar/>
                <Container maxWidth="lg">
                    {this.state.movies.map((mov) => <MovieItem movie={mov} key={mov.id}/>)}
                </Container>
            </div>
        );
    }
}

export default App;
