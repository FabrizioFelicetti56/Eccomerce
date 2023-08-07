import { Link } from "react-router-dom"
import "./Item.css"

const Item = ({id, name, img, price, stock}) => {
    return (
            <div className="column card1">
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
                                <p className="subtitle is-6">Precio:{price}</p>
                                <p className="subtitle is-6">Stock Disponible:{stock}</p>
                            </div>
                        </div>
                            <Link to ={`/item/${id}`}>Ver Detalles</Link>
                        </div>
                </div>
            </div>
    )
}

export default Item