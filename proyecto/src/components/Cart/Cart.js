import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import CartItem from "../CartItem/CartItem"
import { Link } from "react-router-dom"
import "./Cart.css"

const Cart = () => {
    const { cart, totalPrice, clearCart } = useContext(CartContext);


    if (cart.length === 0) {
        return (
            <div className='container'>
                <h1 className='h1-size'> No hay Productos en el carrito </h1>
                <Link to='/' className='OptionP'> <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left-circle"><circle cx="12" cy="12" r="10"/><path d="m14 16-4-4 4-4"/></svg>  </Link>
            </div>
        )
    } 
    else {
        return (
            <div className='Container2 1'>
                <div className="font-card">
                {
                    cart.map(items => <CartItem key={items.id} items={items} />)
                }
                </div>
                <div className='container-total'>
                    <p className='font-checkout'>
                        Total: ${totalPrice()}
                    </p>
                    <div className='ButtonD'>
                        
                        <div className='containerCheckout'>

                        <Link to='/checkout' className='font-checkout'> Finalizar Compra </Link>

                        </div>
                        <div>
                        <button className='button button1' onClick={() => clearCart()}> Vaciar carrito </button>

                        </div>

                        

                
                    </div>
                    
                </div>
                

            </div>
        )

    }


}

export default Cart;
