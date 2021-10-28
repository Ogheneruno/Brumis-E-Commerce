import React, {useState, useEffect} from 'react';
import Rate from '../rate/Rate';
import Counter from '../counter/Counter';
import Option from '../option/Option';
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
    Box,
    useTheme,
   useMediaQuery
} from '@material-ui/core';
import { ShoppingCart, Search} from '@material-ui/icons';
import EcoIcon from '@material-ui/icons/Eco';
import DrawerComponent from "../Drawer";

const useStyles = makeStyles(theme => ({
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down("md")]:{
            justifyContent: (props) => (props.openDrawer? "space-between": "normal")
        }
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
        alignItems: 'center',
         [theme.breakpoints.down("md")]:{
             marginLeft: 'auto',
        },
        [theme.breakpoints.down("xs")]:{
            marginLeft: '20px',
       }
    },
    searchIcon:{
        // color: 'black',
        marginRight: '40px',
        [theme.breakpoints.down("md")]:{
            marginRight: '20px',
       }

    },
    cart:{
        // color: 'black',
        marginRight: '40px',
        [theme.breakpoints.down("md")]:{
            marginRight: '20px',
       }
    }
}))


const Navbar = () => {

    const classes = useStyles();
    const [count, setCount] = useState(1);
    const [navBackground, setNavBackground] = useState('appbar');
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
        <div>
            <AppBar className={classes[navRef.current]}>
                <Toolbar className={classes.toolbar}>
                    <Typography className={classes.type} variant="h6" noWrap>
                        BRUMIS
                    </Typography>
                    {isMobile ? (
                    <DrawerComponent />
                    ) : (
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
                            )}

                    <div className={classes.linkIcon}>
                        <Search className={classes.searchIcon} />
                        <Badge className={classes.badge}>
                            <ShoppingCart className={classes.cart} />
                        </Badge>
                        <Avatar />
                    </div>
                </Toolbar>
            </AppBar>
     </div>
    )
}

export default Navbar;
