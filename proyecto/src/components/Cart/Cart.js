import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import CartItem from "../CartItem/CartItem"
import { Link } from "react-router-dom"

const Cart = () => {
    const { cart, totalQuantity, totalPrice, clearCart } = useContext(CartContext);


    if (totalQuantity() === 0) {
        return (
            <div className='container'>
                <h1 className='containerH1'> No hay Productos en el carrito </h1>
                <Link to='/' className='OptionP'> <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left-circle"><circle cx="12" cy="12" r="10"/><path d="m14 16-4-4 4-4"/></svg>  </Link>
            </div>
        )
    }

    return (
        <div className='Container2'>
            {
                cart.map(products => <CartItem key={products.id} products={products} />)
            }
            <div className='container-total'>
                <p className='Total'>
                    Total: {totalPrice()}
                </p>
                <div className='ButtonD'>
                    
                    <div className='containerCheckout'>

                    <Link to='/checkoutForm' className='c'> Finalizar Compra </Link>

                    </div>
                    <div className='containerCa'>
                    <button className='ca' onClick={() => clearCart()}> Vaciar carrito </button>

                    </div>

                    

            
                </div>
                
            </div>
            

        </div>
    )




}

export default Cart;
// const Cart = () => {

//     const { cart, clearCart, totalQuantity, total} = useContext(CartContext)

//     if(totalQuantity === 0) {
//         return (
//             <div>
//                 <h1>No hay Items en el carrito</h1>
//                 <Link to= '/'>Home</Link>
//             </div>
//         )
//     }

//     return (
//         <div>
//             {cart.map(p => <CartItem key={p.id} {...p}/>)}
//             <h3>Total: ${total}</h3>
//             <button onClick={() => clearCart()}>Limpiar Carrito</button>
//             <Link to='/checkout'>Checkout</Link>
//         </div>
//     )
// }

// export default Cart