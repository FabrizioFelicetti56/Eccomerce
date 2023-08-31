import { useState } from "react";
import "./ItemCount.css"

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState (initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity-1)
        }
    }

    return (
        <div>
            <div className="columns is-5">
                <button className="button button1" onClick={decrement}>-</button>
                <h4 className="h4">{quantity}</h4>
                <button className="button button1" onClick={increment}>+</button>
            </div>
            <div>
                <button className="button button1" onClick={() => onAdd(quantity)} disabled = {!stock}>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount