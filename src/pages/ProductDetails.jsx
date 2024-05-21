import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
let [singleData, setSingleData] = useState([])
    let ProductId = useParams()



    let getData = () => (
        axios.get(`https://dummyjson.com/products/11${ProductId.id}`).then((response) => {
            setSingleData(response.data);
        })
    )

    useEffect(() => {
        getData()
    }, [])



    return (
        <>
            <h1>ProductDetails</h1>
        </>
    )
}

export default ProductDetails
