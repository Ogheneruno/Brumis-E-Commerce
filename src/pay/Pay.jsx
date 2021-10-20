import React from 'react';
import './pay.css';


const Pay = () => {
    return (
        <div className="card-holder">
            
                <div className="card">

                    <div className="card-wrapper">
                    <div className="card-left">
                        <div className="card-left__one">
                            <img className="" src="" alt="" />
                            <div className="card-one__text">
                                <h2 className=""></h2>
                                <p className="">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    Dicta ipsum aspernatur fuga debitis quae, vitae placeat praesentium voluptas.
                                </p>
                            </div>
                        </div>

                        <div className="card-left__two">
                            <input type="number" className="" />
                        </div>

                        <div className="card-left__three">
                            <a href= "#/" class="close">
                            <span className="span" aria-hidden="true">&times;</span>
                            </a>
                        </div>
                    </div>

                    <hr className="card-left__bottom" />

                    <div className="card-left">
                        <div className="card-left__one">
                            <img className="" src="" alt="" />
                            <div className="card-one__text">
                                <h2 className=""></h2>
                                <p className="">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    Dicta ipsum aspernatur fuga debitis quae, vitae placeat praesentium voluptas.
                                </p>
                            </div>
                        </div>
                        </div>

                        <div className="card-left__two">
                            <input type="number" className="" />
                        </div>

                        <div className="card-left__three">
                            <a href= "#/" class="close">
                            <span className="span" aria-hidden="true">&times;</span>
                            </a>
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
