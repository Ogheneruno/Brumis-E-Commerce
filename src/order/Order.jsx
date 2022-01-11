import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import "./order.css";
// import { Badge, Container } from "@material-ui/core";
// import { BiUser, BiSearch } from "react-icons/bi";
// import { GrCart } from "react-icons/gr";
import Rate from "../rate/Rate";
import Quantity from "../Quantity/Quantity";
import Like from "../Like/Like";
import Button from "../Buttons/Button";
// import Cosmetic2 from "../img/cosmetic2.png";
// import shopItems from "../database/shop";
// import AppContext from "../context/App-Context";
import {Container } from "@material-ui/core";
import { Data } from "../database/Data";
import { addProduct } from "../redux/cartRedux";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../navbar/Navbar";
import toast from "react-hot-toast";
// import Footer from "../footer/Footer";



const Order = () => {
	const cart = useSelector(state => state.cart);
	const dispatch = useDispatch();
	const { id } = useParams();
    const [quantity, setQuantity] = useState('');
    const [like, setLike] = useState({});
    const [rate, setRate] = useState(2);

    const handleAddToCart = () => {
        if (cart.quantity < 3) { 
        dispatch(addProduct({ 
            // product: Data.products.filter(item => item.id === id), 
            desc: Data.products.filter(item =>item.id === id).map(item => (item.desc)), 
            image: Data.products.filter(item =>item.id === id).map(item => (item.image)), 
            name: Data.products.filter(item =>item.id === id).map(item => (item.name)), 
            price: Data.products.filter(item =>item.id === id).map(item => (item.price)), 
            quantity,
            like,
            rate
        }));
    } else {
        toast.error("Maximum number of items added to cart is three.")
    }
    };

	return (
        <>
            <Navbar />
            <div className="order-container">
                {Data.products
                    .filter((item) => item.id === id)
                    .map((item)=>(
                        <Container  
                            key={item.id}
                            style ={{
                                // border: '8px solid black',
                                // borderRadius: '6px',
                                // display: 'flex',
                                maxwidth: '65vw',
                                // height: '80vh',
                                padding: '0 20px',
                                // marginTop: '100px',
                                background: 'linear-gradient(-243deg, crimson, crimson 40%, #fff 40%, #fff)'
                                }} 
                                fixed
                            >
                                <div className="order__nav__wrapper">
                                    <div className="order__nav">
                                        <div className="order__logo">
                                            <h1 className="order__logo__brand">
                                                BRUMIS
                                            </h1>
                                        </div>

                                        {/* <div className="order__icon">
                                            <li>
                                                <BiSearch className="order__icon__search"/>
                                            </li> */}

                                            {/* <li>
                                                <Badge style={{width: '25px', marginBottom: '4px'}} badgeContent={quantity}>
                                                    <GrCart className="order__icon__search" onClick={()=>(window.location.href="/pay")} />
                                                </Badge>
                                            </li>

                                            <li>
                                                <BiUser className="order__icon__search"/>
                                            </li>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="order__main">
                                    <div className="order__image__container">
                                        <img src={ item.image } alt="order" className ="order__image" />
                                    </div>
                                    <div className="order__desc">
                                        <div className="order__desc__ratings">
                                            <Rate value={ rate } setValue={ setRate } />
                                        </div>
                                        <div className="order__title">
                                            <h2 className = "order__title__header">
                                                {item.name}
                                            </h2>
                                        </div>
                                        <div className="order__price">
                                            <h1 className="order__price__header">
                                                $ {item.price}
                                            </h1>
                                        </div>
                                        <div>
                                            <Quantity quantity= { quantity } setQuantity={ setQuantity } />
                                        </div>
                                        <div className="order__like">
                                            <Like sate={ like } setState={ setLike } />
                                        </div>
                                        <div className="order__button">
                                            <Button handleAddToCart={ handleAddToCart } quantity={quantity} />
                                            {/* <button onClick={handleAddToCart} className="">Add</button> */}
                                        </div>    
                                    </div>
                                    <div className="order__line">
                                        <div class="order__solid"></div>
                                        <div class="order__dotted"></div>
                                    </div>
                                </div>
                        </Container>
                    ))
                }
            </div>
        {/* <Footer /> */}
        </>
    );
};

export default Order;