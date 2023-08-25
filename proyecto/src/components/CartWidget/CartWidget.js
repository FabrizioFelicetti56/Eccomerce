import { useContext } from "react"
import cart from "../../img/cart.svg"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const CartWidget = () => {
    
    const {totalQuantity} = useContext(CartContext)

    return (
        <Link to='/cart' className="navbar-end cart" style={{display:totalQuantity > 0 ? 'block' : 'none'}}>
                <img src={cart} alt="cart"/>
                {totalQuantity}
        </Link>
    )
}

export default CartWidget