import ItemListContainer from "../../componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../../componentes/ItemDetailContainer/ItemDetailContainer"
import {Routes, Route} from "react-router-dom"


const Main = () => {
  return ( 
  <main> 
    <Routes>
      <Route path="/" element={<ItemListContainer/>} />
      <Route path="/categoria/:category" element={<ItemListContainer/>} />
      <Route path="/item/:id" element={<ItemDetailContainer/>} />
    </Routes>
  </main>
  )
}

export default Main