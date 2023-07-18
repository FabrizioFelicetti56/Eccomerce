import cart from "../../img/cart.svg"

const CartWidget = () => {
    return (
        <div className="navbar-end cart">
            <img src={cart} alt="cart"/>
            0
        </div>
    )
}

export default CartWidget