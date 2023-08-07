import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css"

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
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
                        <ItemCount initial={1} stock={stock} onAdd={(quantity)  => console.log("Cantidad agregada", quantity)}/>
                    </div>
                </div>
            </div>
    )
}

export default ItemDetail