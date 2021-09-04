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
        this.state = {movies: [], displayedMovies: [],
            value: '', searchValue: ''};

        this.filterList = this.filterList.bind(this);
        this.filterByString = this.filterByString.bind(this);
        this.searchMovie = this.searchMovie.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    filterList(event){
        this.setState({value: event.target.value}, () => {
            this.filterByString(this.state.value);
        });
    }

    filterByString(filterStr){
        if (filterStr){
            const newList = this.state.movies.filter(mov => mov.title.includes(this.state.value));
            this.setState({displayedMovies: newList});
        } else {
            this.setState({displayedMovies: this.state.movies});
        }
    }

    handleSearchChange(event){
        this.setState({searchValue: event.target.value});
    }

    searchMovie(event){
        axios.get(`${apiUrl}s=${this.state.searchValue}&page=1`)
            .then(res => {
                const newList = [];
                res.data.Search.forEach(movie => newList.push({
                    id: movie.imdbID,
                    title: movie.Title,
                    description: movie.Type,
                    poster: movie.Poster
                }));

                this.setState({movies: newList}, () => {
                    this.filterByString(this.state.value);
                });
            })
            .catch(error => console.error(error));
        event.preventDefault();
    }

    componentDidMount(){

        axios.get(apiUrl + 's=Movie&page=1')
            .then(res => {
                const movieList = [];
                res.data.Search.forEach(movie => {
                    movieList.push({id: movie.imdbID, title: movie.Title, description: movie.Type, poster: movie.Poster});
                });
                this.setState({movies: movieList, displayedMovies: movieList});
                console.log(res);
            })
            .catch(error => {
                console.error(error);
            });
    }
    render(){

        return (
            <div className="App">
                <AppToolbar
                    value={this.state.value}
                    searchValue={this.state.searchValue}
                    onSearchSubmit={this.searchMovie}
                    onSearchChange={this.handleSearchChange}
                    onFilterChange={this.filterList}/>
                <Container maxWidth="lg">
                    {this.state.displayedMovies.map((mov) => <MovieItem movie={mov} key={mov.id}/>)}
                </Container>
            </div>
        );
    }
}

export default App;
