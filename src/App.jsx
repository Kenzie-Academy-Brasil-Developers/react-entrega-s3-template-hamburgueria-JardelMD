import { useState } from "react";
import { CartModal } from "./components/CartModal";
import { HomePage } from "./pages/HomePage"
import "./styles/index.scss"

function App() {
  const [cartList, setCartList] = useState([]);
  //Adicionar item ao carrinho
  const addCart = (name, price, category, img, id) => {
    // const id = crypto.randomUUID(); //Não precisa desse id pois cada produto tem seu único id
    const newCart = { name, price, category, img, id }
    setCartList([...cartList, newCart])
    // console.log(cartList)
  }
  const removeCart = (id) => {
    const listFiltered = cartList.filter((cart) => {
      if (cart.id !== id) {
        return cart
      }
    })
    setCartList(listFiltered)
  }

  return (
    <>
      <HomePage addCart={addCart}/>
      <CartModal cartList={cartList} addCart={addCart} removeCart={removeCart}/>
    </>
  )
}

export default App
