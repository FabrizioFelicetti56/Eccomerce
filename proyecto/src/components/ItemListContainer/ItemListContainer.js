import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import  ItemList  from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import Nosotros from "../Nosotros/Nosotros"
import "./ItemListContainer.css"

const ItemListContainer = () => {

    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])

    return (
        <div>
            <div>
                <Nosotros/>
            </div>
            <div>
                <h1 className="h1-size">Productos a la Venta</h1>
                <ItemList products={products}/>
            </div>
        </div>
    )
}

export default ItemListContainer