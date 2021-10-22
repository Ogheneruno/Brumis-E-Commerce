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
    footer:{
        position: 'relative'
    },
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
        height: '200px',
        marginLeft: '30px'
    },
    footerImg:{
        display: 'flex',
        position:'absolute',
        top: '60px'
    },
    footerHead:{
        textAlign: 'center',
        color: '#0e233f'
    }

}));


const Footer = () => {
    const classes = useStyles();

    return (
        <>
        <div className={classes.footer}>
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
