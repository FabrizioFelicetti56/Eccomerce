import cart from "../../img/cart.svg"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext" 
import { useContext } from "react"


const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext);

    return (
        <Link to='/cart' className="navbar-end cart" style={{display: cart.length > 0 ? 'block' : 'none'}}>
                <img src={cart} alt="cart"/>
                <span>({totalQuantity()})</span>
        </Link>
    )
}

export default CartWidget