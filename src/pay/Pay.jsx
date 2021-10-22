import React from 'react';
import './pay.css';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Cosmetic2 from '../img/cosmetic2.jpg';
import Cosmetic4 from '../img/cosmetic4.jpg';
import Cosmetic15 from '../img/cosmetic15.jpg';

const useStyles = makeStyles((theme) => ({
  mainCard:{
    display: 'flex'
  },
  root: {
    Width: 900,
    marginLeft:'40px'
  },
  media: {
    height: 100,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    // transform: 'rotate(0deg)',
    marginLeft: 'auto',
    backgroundColor: '#001e40',
    color: '#fff',
    padding: '2px',
    marginRight: '10px',
    '&:hover':{
        backgroundColor: '#fff',
        color: '#001e40',
        border: '2px solid #001e40'
    }
 
  },
 
}));


const Pay = () => {
    const classes = useStyles();
   
    return (
        <>
    <div className={classes.mainCard}>
            <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={Cosmetic2}
                title="Paella dish"
            />
            {/* <CardContent>
            
            </CardContent> */}
            <CardActions disableSpacing>
                <Typography>Night Cream</Typography><br/>
                <div>50</div>
                <IconButton
                className={classes.expand}
                >
                <ArrowRightAltIcon />
                </IconButton>
            </CardActions>
            
            </Card>

            <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={Cosmetic4}
                title="Paella dish"
            />
            {/* <CardContent>
            
            </CardContent> */}
            <CardActions disableSpacing>
                <Typography>Night Cream</Typography><br/>
                <div>50</div>
                <IconButton
                className={classes.expand}
                >
                <ArrowRightAltIcon />
                </IconButton>
            </CardActions>
            
            </Card>


            <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={Cosmetic15}
                title="Paella dish"
            />
            {/* <CardContent>
            
            </CardContent> */}
            <CardActions disableSpacing>
                <Typography>Night Cream</Typography><br/>
                <div>50</div>
                <IconButton
                className={classes.expand}
                >
                <ArrowRightAltIcon />
                </IconButton>
            </CardActions>
            
            </Card>
    </div>

    <div className="card-container">
        <div className="card">
            <div className="card-image">
                <img className="cardImg" src={Cosmetic2} />
            </div>
            <div className="spanContainer">
                <div className="span-text">Night Cream<br
                /><span className="span-price">$23.99</span></div>
                <IconButton
                className={classes.expand}>
                <ArrowRightAltIcon />
                </IconButton>  
            </div>          
        </div>

        <div className="card">
            <div className="card-image">
                <img className="cardImg" src={Cosmetic4} />
            </div>
            <div className="spanContainer">
                <div className="span-text">Organic Cream<br
                /><span className="span-price">$43.99</span></div>
                <IconButton
                className={classes.expand}>
                <ArrowRightAltIcon />
                </IconButton>  
            </div>          
        </div>

        <div className="card">
            <div className="card-image">
                <img className="cardImg" src={Cosmetic15} />
            </div>
            <div className="spanContainer">
                <div className="span-text">Under Eye Gel<br/>
                <span className="span-price">$26.99</span></div>
                <IconButton
                className={classes.expand}>
                <ArrowRightAltIcon />
                </IconButton>  
            </div>          
        </div>

    </div>
</>
    )
}

export default Pay;
