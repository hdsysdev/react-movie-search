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
                <p className={styles.text}>{movie.description}</p>
            </div>
        </Paper>
    )
}


export default MovieItem


