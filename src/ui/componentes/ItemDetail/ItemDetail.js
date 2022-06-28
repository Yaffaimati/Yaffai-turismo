import React from 'react';
import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = ({ item }) => {

  
  const onAdd = (cantidadSeleccionada) => {
    console.log("Desde Item Detail : " + cantidadSeleccionada)
      }

  return (
    <div>
      <h2>{item.title}</h2>
      <img className="detail-image" src={item.image} alt="thumbnail" />
      <p>{item.description}</p>
      <p>Precio : ${item.price}</p>
      {}
      <ItemCount initial={1} onAdd={onAdd} stock={5}/>
      <button>terminar mi compra</button>
    </div>
  )
}
export default ItemDetail