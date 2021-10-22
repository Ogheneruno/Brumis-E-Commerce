import React , {useState} from 'react';
import './order.css';
import cosmetic from '../../src/img/cosmetic7.png';

const Order = () => {  
    const [number, setNumber]  = useState(1)
    const [price, setPrice] = useState(266.88)

    function   sumPrice(){
        setPrice(price *  number)
    }
    function quantity(){
        setNumber(number + 1)
    }

    return (
        <>
            <div className='box'>
                <div className='cartDiv'>
        <div className='paBackground'>
            <div className='brandName'>
                <h1 className='textWhite bold'>BRUMIS</h1>
                <img src={cosmetic} className='productImg'/>
            </div>
        </div>
        <div className='mainProductCart'>
            <div className=''>
                <div className='ratingIcon'><span class="iconify" data-icon="emojione:star"></span> <span class="iconify" data-icon="emojione:star"></span>
            <span class="iconify" data-icon="emojione:star"></span>
            <span class="iconify" data-icon="emojione:star"></span>
            <span class="iconify" data-icon="emojione:star"></span>
            </div>
            <div className='productDetails'>
                <h2 className='productName bagTitle'>Bag C De Cartier</h2>
                <h2 className='productName'>Bag</h2>
                {number ? <p> $ {price *  number * 10} </p> : 266.88}
                <p className='textBlack productName'>Color</p>
                <p className='inline'>Products
                    <img src='' className='rounded'/>
                    <img src='' className='rounded'/>
                    <img src='' className='rounded'/>
                </p>
            </div>
            <div className ='productQuantity'>
                <h2>Qantity</h2>
                <input type='number'
                 value={number}
                  onChange={(e) => setNumber(+e.target.value)}/>
                <br/>
            </div>
            <div className='favoriteIcon'>
            </div>
            <div className='productBtn bgDark textWhite'></div>
        


            </div>
            <div className='cartIcon'>
            <span class="iconify py-2" data-icon="akar-icons:search"></span> 
                <span class="iconify py-2" data-icon="la:shopping-bag"></span> 
                <span class="iconify py-2" data-icon="akar-icons:person"></span> 

            
            </div>
            </div>
            </div>
            </div>
            
         
        </>
            
    )
}

export default Order
