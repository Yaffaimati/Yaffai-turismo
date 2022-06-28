import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import {useParams} from "react-router-dom";
import { traerProducto } from "../../productos/products";
import { SkeletonCard } from "../../productos/productLoader";

const ItemDetailContainer = () => {


    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)
    const {id} = useParams()
  
    useEffect(() => {
  
      setLoading(true)
  
      
  
      new Promise((res, rej) => {
        setTimeout(() => {
          res(traerProducto.find(producto => producto.id == id))
        }, 2000)
      })
        .then(respuesta => {
          setLoading(false)
          setItem(respuesta)
        })
  
    },[])
  
  
    return (
      <>
        {loading? <SkeletonCard/> : <ItemDetail item={item} />}
      </>
    )
  }
  export default ItemDetailContainer
