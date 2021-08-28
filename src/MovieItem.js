import React from 'react'
import PropTypes from 'prop-types'

function MovieItem(props) {
    const movie = props.movie;
    return (
        <div>
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
        </div>
    )
}

MovieItem.propTypes = {
    movie: {id: PropTypes.number, title: PropTypes.string, description: PropTypes.string}

}

export default MovieItem


