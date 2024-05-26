import React from 'react'
import { createContext } from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react'

let apiData = createContext()




const ContextApi = ({ children }) => {

    let [info, setInfo] = useState([])


    let getData = () => axios.get("https://dummyjson.com/products").then((response) => {
        setInfo(response.data.products);
    })

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <apiData.Provider value={info}>{children}</apiData.Provider>
        </>
    )
}

export { ContextApi, apiData }