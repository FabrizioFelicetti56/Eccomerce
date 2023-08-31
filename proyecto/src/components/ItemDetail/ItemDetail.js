import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css"
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const {addItem} = useContext(CartContext)

    const handleOnAdd= (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price
        }

        addItem(item, quantity)
    }


    return(
        <div className="column is-half is-offset-one-quarter card2">
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <img src={img} alt={name}/>
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4">{name}</p>
                                <p className="subtitle is-6">{description}</p>
                                <p className="subtitle is-6">Categoria:{category}</p>
                                <p className="subtitle is-6">Precio:{price}</p>
                                <p className="subtitle is-6">Stock Disponible:{stock}</p>
                            </div>
                        </div>
                        <div>
                            {
                                quantityAdded > 0 ? (
                                    <Link to= '/cart'> Terminar compra </Link>
                                ) : (
                                    <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default ItemDetail