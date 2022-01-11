import './button.css';

const Button = ({ handleAddToCart } ) => {

    return (
        <div className="button__cart">
            <button class="btn btn-2 btn-sep icon-cart" onClick={handleAddToCart}>Add to cart</button>
        </div>
    )
}

export default Button
