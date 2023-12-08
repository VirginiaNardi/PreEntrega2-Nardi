import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import {getProductosbyId} from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [producto, setProductos] = useState(null)
    const { itemId } = useParams()

    useEffect(() => {
        getProductosbyId(itemId)  
            .then(response =>{
                setProductos(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [itemId])

    return(
        <div className='ItemDetailContainer'>
            <ItemDetail {...producto} />
        </div>
    )

}

export default ItemDetailContainer