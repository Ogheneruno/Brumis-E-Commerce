import React, {useState, useEffect} from 'react';
import Rate from '../rate/Rate';
import Counter from '../counter/Counter';
import Option from '../option/Option';
import Arrival from '../arrival/Arrival';
import Product from '../product/Product';
import Footer from '../footer/Footer';
import {
    alpha,
    AppBar,
    Avatar, 
    Toolbar, 
    IconButton, 
    Typography, 
    InputBase, 
    Badge, 
    MenuItem, 
    makeStyles,
    Paper,
    Box
} from '@material-ui/core';
import { ShoppingCart, Search} from '@material-ui/icons';
import EcoIcon from '@material-ui/icons/Eco';
import './home.css';
import Image from '../img/banner.png'; // Import using relative path



const useStyles = makeStyles(theme => ({
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between'
    },

    appbar: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        color: 'black'
    },

    appbarSolid: {
        backgroundColor: '#001e40'
    },

    linkItems:{
        display:'flex'
    },

    linkItem:{
        // color: 'black',
        marginLeft: '60px',
        cursor: 'pointer',
    
      '&:hover':{
        borderBottom: '1px solid #e791a1'
      }
    },
    linkIcon:{
        display: 'flex',
        alignItems: 'center'
    },
    searchIcon:{
        // color: 'black',
        marginRight: '40px'
    },
    cart:{
        // color: 'black',
        marginRight: '40px'
    },
    paperContainer: {
        // backgroundImage: `url(${Image})`,
        width: '100%',
        height: '600px',
        boxShadow: '0px'

    },
    paperImg:{
        position: 'relative',
        width: '100%',
        height: '600px',
        boxShadow: 'none'
    },
    paperText:{
        position: 'absolute',
        width: '40%',
        top: '100px',
        left: '20px'
    },
    iconColor:{
        width: '30%',
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(1),
        backgroundColor: '#fff2f4',
        borderRadius: '20px',
        marginBottom: theme.spacing(3)
    },
    iconColorText:{
        fontSize: '13px',
        marginLeft: theme.spacing(1)
    },
    topHead:{
        color: '#0e233f',
        fontWeight: 'bold'
    },
    bottomHead:{
        color: '#15283e',
        fontWeight: 'bold'
    },
    paperBody:{
        fontSize: '14px'
    }

    
}))


const Home = () => {
    const classes = useStyles();
    const [count, setCount] = useState(1);
    const [navBackground, setNavBackground] = useState('appbar');

    const navRef = React.useRef()
    navRef.current = navBackground;

    useEffect(()=>{
        const handleScroll = () =>{
            const show = window.scrollY > 50
            if(show){
                setNavBackground('appbarSolid')
            } else{
                setNavBackground('appbar')
            }
        }
        document.addEventListener('scroll', handleScroll)
        return ()=>{
            document.removeEventListener('scroll', handleScroll)
        }
    }, []);

    const handleIncrement = () => {
        setCount( (add) => add + 1);
    };

    const handleDecrement = () =>{
        setCount( (sub) => sub - 1);
    };
    return (
        <>
        <AppBar className={classes[navRef.current]}>
            <Toolbar className={classes.toolbar}>
                <Typography className={classes.type} variant="h6" noWrap>
                    BRUMIS
                </Typography>
                <div className={classes.linkItems}>
                    <div className={classes.linkItem}>
                        <Typography className={classes.linkText}>Home</Typography>
                    </div>

                    <div className={classes.linkItem}>
                        <Typography className={classes.linkText}>About</Typography>
                    </div>

                    <div className={classes.linkItem}>
                        <Typography className={classes.linkText}>Shop</Typography>
                    </div>

                    <div className={classes.linkItem}>
                        <Typography className={classes.linkText}>Blog</Typography>
                    </div>

                    <div className={classes.linkItem}>
                        <Typography className={classes.linkText}>Contact</Typography>
                    </div>
                </div>
                <div className={classes.linkIcon}>
                    <Search className={classes.searchIcon} />
                    <Badge className={classes.badge}>
                        <ShoppingCart className={classes.cart} />
                    </Badge>
                    <Avatar />
                </div>
            </Toolbar>
        </AppBar>
        <div>
            <div className={classes.PaperContainer}>
                <img className={classes.paperImg} src={Image} />
                <div className={classes.paperText}>
                    <div className={classes.iconColor}>
                        <EcoIcon/>
                        <Typography className={classes.iconColorText}>Natural Products</Typography>
                    </div>
                        <Typography className={classes.topHead} variant="h4">Be good to your skin.</Typography>
                        <Typography className={classes.bottomHead} variant="h5">You will wear it everyday for you.</Typography>
                        <Rate/>
                        <Typography className={classes.paperBody} mt={2}>Most dermatologist agree it is important to cleanse the face twice daily to get bacteria, dirt and pollutants off your skin</Typography>
                        <Counter/>
                        <Option/>
                       
                </div>
           </div>
        </div>
        <Arrival />
        <Product />
        <Footer />
        </>
        
    )
}

export default Home
