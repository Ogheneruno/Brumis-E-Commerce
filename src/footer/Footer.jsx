import React from 'react';
import './footer.css';
import {
    Typography,
    Paper, 
    Button,
    IconButton,
    makeStyles
} from '@material-ui/core';
import Cosmetic8 from '../img/cosmetic8.jpg';
import Cosmetic9 from '../img/cosmetic9.jpg';
import Cosmetic10 from '../img/cosmetic10.jpg';

const useStyles = makeStyles(theme => ({
    footerTop:{
        width: '100%',
        height: '30vh'
    },
    footerBottom:{
        width: '100%',
        height: '50vh',
        backgroundColor: '#0e233f'
    },
    footerImages:{
        width: '200px',
        height: '200px'
    },
    footerImg:{
        display: 'flex'
    }

}));


const Footer = () => {
    const classes = useStyles();

    return (
        <>
        <div>
            <div className={classes.footerTop}>
                <Typography className={classes.footerHead} variant="h4">Instagram Feed</Typography>
            </div>
            <div className={classes.footerBottom}>
                <div className={classes.footerImg}>
                    <div className={classes.footerImages}>
                        <img className="footerImage1" src={Cosmetic8} />
                    </div>

                    <div className={classes.footerImages}>
                        <img className="footerImage1" src={Cosmetic9} />
                    </div>

                    <div className={classes.footerImages}>
                        <img className="footerImage1" src={Cosmetic10} />
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}

export default Footer;
