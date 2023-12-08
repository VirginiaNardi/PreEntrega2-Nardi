import { useEffect, useState } from "react"
import { getProductos, getProductosbyCategory } from "../../asyncMock"
import ItemList from '../ItemList/ItemList'

import { useParams } from "react-router-dom"

const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductosbyCategory : getProductos

        asyncFunc(categoryId)
            .then(response =>{
                setProductos(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])

    return (
        <div>
            <br/>
            <h1>{greeting}</h1>
            <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer