import React from 'react'
import {makeStyles, Paper} from "@material-ui/core";

const useStyles = makeStyles((theme) =>
({
    container: {
        display: 'flex',
        flex: 1,
        marginTop: '10px',
        marginBottom: '10px',
    },
    image: {
        backgroundColor: 'black'
    },
    text: {
        width: 'fit-content',
        marginLeft: '8px'
    },
    description: {

    },
    detailsContainer: {
        display: 'flex',
        flexDirection: 'column'
    }
}));

function MovieItem(props) {
    const movie = props.movie;
    const styles = useStyles();
    return (
        <Paper elevation={3} className={styles.container}>
            <img src={movie.poster} className={styles.image} alt='Movie cover'/>
            <div className={styles.detailsContainer}>
                <h2 className={styles.text}>{movie.title}</h2>
                <h3 className={styles.text}>Year: {movie.year}</h3>
                <h3 className={styles.text}>Type: {movie.description}</h3>
            </div>
        </Paper>
    )
}


export default MovieItem


