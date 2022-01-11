import { Container, makeStyles } from '@material-ui/core';
import React from 'react';
import Footer from '../footer/Footer';
import './profile.css';



const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: theme.spacing(10),
        [theme.breakpoints.down("sm")]: {
            paddingTop: theme.spacing(8)
        }
    }
}))

const Profile = () => {
    const classes = useStyles();


    return (
        <div className="profile">
                <Container className={classes.container}>
                    This is the profile page
                </Container>
                <Footer />
        </div>
    )
}

export default Profile;
