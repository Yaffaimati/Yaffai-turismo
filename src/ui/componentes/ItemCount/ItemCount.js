 import { useEffect, useState } from "react"

const ItemCount = ({stock, initial, onAdd}) => {
  
 const [contador,setContador] = useState(initial)
 
 

 const aumentarContador = () => {
     setContador(contador + 1)    
 }
  const bajarContador = () => {
      setContador(contador-1)
    }

const confirmarContador = () => {}

  return (
    <div>
        <p>El contador va : {contador}</p>
        <button onClick={aumentarContador}>Aumentar</button>
        <button onClick={bajarContador}>Disminuir</button>
        <button onClick={confirmarContador}>Confirmar</button>
        </div>
  )
}

export default ItemCount