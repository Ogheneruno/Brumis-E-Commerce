import React, {useState} from 'react';
import {
    Typography,
    Paper, 
    makeStyles
} from '@material-ui/core';
import '../arrival/arrival.css';
import Bg from '../img/newbackground.jpg';
import Lady from '../img/cosmetic16.png';
import Cosmetic2 from '../img/cosmetic2.jpg';
import Cosmetic4 from '../img/cosmetic4.jpg';
import Cosmetic15 from '../img/cosmetic15.jpg';


const useStyles = makeStyles(theme => ({
    arrivalContainer:{
        width: '100%',
        marginTop: '30px'

    },
    arrivalBg:{
        width: '50%',
        position: 'relative'
    },
    paperBg:{
        position: 'relative',
        width: '100%',
        height: '500px',
        borderRadius: '0% 40% 40% 0%',
        marginTop: '110px'
    },
    paperLady:{
        position: 'absolute',
        top: '0',
        marginLeft: '-400px',
        width: '350px'
    },
    arrivalText:{
        width: '50%'
    }
}))

const Arrival = () => {
    const classes = useStyles();
    return (
        <>
        <div>
            <Paper className={classes.arrivalContainer}>
                <div className={classes.arrivalBg}>
                    <img className={classes.paperBg} src={Bg} />
                    <img className={classes.paperLady} src={Lady} />

                </div>

                <div className={classes.arrivalText}>

                </div>
            </Paper>
        </div>
        </>
    )
}

export default Arrival
