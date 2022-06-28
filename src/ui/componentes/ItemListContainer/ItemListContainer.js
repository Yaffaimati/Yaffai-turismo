import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import {useParams} from "react-router-dom";

import { traerProductos } from "../../productos/products"
import { ProductLoader } from "../../productos/productLoader"


const ItemListContainer = ({ greeting }) => {

  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const { category } = useParams()

  useEffect(() => {

    setLoading(true)

    new Promise((res, rej) => {
      setTimeout(() => {
        res(category ? traerProductos.filter((products)=>{
          
          return products.category == category

        }) : traerProductos)
      }, 2000)
    })
      .then(resultado => {
        setItems(resultado)
        setLoading(false)
      })
      .catch(() => {
        
      })

  }, [category])



  return (
    <>
     <ItemList items={items} />
    </>
  )
}

export default ItemListContainer