import React, { useState } from 'react';
import './pay.css';


const Pay = () => {
    const [count, setCount] = useState (1);

    const [count1, setCount1] = useState (1);

    const [amount, setAmount] = useState (50.4);

    const [amount1, setAmount1] = useState (10.9);

    const [totalAmount, setTotalAmount] = useState (0);

    const [remove, setRemove] = useState (false);

    const handleIncreament = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        setCount(count - 1);
    }

    const handleIncreament1 = () => {
        setCount1(count1 + 1);
    };

    const handleDecrement1 = () => {
        setCount1(count1 - 1);
    }


    return (

        <div className="card-holder">
            
                <div className="card">

                    <div className="card-wrapper">

                        <img src="" alt="" className="" />
                        <h2 className="card-left__title">SHOPPING CART</h2>

                        <div display={remove} className="card-left">
                            <div className="card-left__one">
                                <img className="" src="" alt="" />
                                <div className="card-one__text">
                                    <h2 className=""></h2>
                                    <p className="">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Dicta ipsum aspernatur fuga debitis quae, vitae placeat praesentium voluptas.
                                    </p>
                                    <span className="moneySign">$</span><h4 className="">{setCount ? (amount * count): amount}</h4>
                                </div>
                            </div>

                            <div className="card-left__two">
                                <div className="">
                                    <span aria-hidden="true"><button className="span1" onClick={handleIncreament}>&times;</button></span>
                                </div>

                                <div className="count">
                                    0{count}
                                </div>

                                <div className="">
                                    <span aria-hidden="true"><button className="span2" onClick={handleDecrement}>&minus;</button></span>
                                </div>
                            </div>

                            <div className="card-left__three">
                                <button onClick={() => setRemove(true)} className="close">
                                <span className="span" aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        </div>

                        <div className="card-left">
                            <div className="card-left__one">
                                <img className="" src="" alt="" />
                                <div className="card-one__text">
                                    <h2 className=""></h2>
                                    <p className="">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Dicta ipsum aspernatur fuga debitis quae, vitae placeat praesentium voluptas.
                                    </p>
                                    <span className="moneySign">$</span><h4 className="">{setCount1 ? (amount1 * count1): amount1}</h4>
                                </div>
                            </div>

                            <div className="card-left__two">
                                <div className="">
                                    <span aria-hidden="true"><button className="span1" onClick={handleIncreament1}>&times;</button></span>
                                </div>

                                <div className="count">
                                    0{count1}
                                </div>

                                <div className="">
                                    <span aria-hidden="true"><button className="span2" onClick={handleDecrement1}>&minus;</button></span>
                                </div>
                            </div>

                            <div className="card-left__three">
                                <button onClick={''} className="close">
                                    <span className="span" aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        </div>

                        <hr className="card-left__bottom" />
                        
                        <div className="subtotal">
                            <h4 className="">SUBTOTAL</h4>
                            <h4 className=""><span className="moneySign1">$</span>{setTotalAmount ? (amount + amount1): totalAmount}</h4>
                        </div>

                    </div>

                    <div className="card-right">
                        right card
                    </div>
                    
                </div>

                <hr className="card__bottom" />

        </div>
    )
}

export default Pay
