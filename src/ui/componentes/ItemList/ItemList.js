import React from 'react';
import Item from "../Item/Item";

const ItemList = ({item}) => {
  return (
    <section className="products-container">
      {item.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </section>
  )
}

export default ItemList