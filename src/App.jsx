import { useEffect, useState } from "react"
import { CartModal } from "./components/CartModal"
import { HomePage } from "./pages/HomePage"
import "./styles/index.scss"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const localStorageProducts = localStorage.getItem("@ProdutosHamburgueria")

  const [cartList, setCartList] = useState(
    localStorageProducts ? JSON.parse(localStorageProducts) : [])

  const addCart = (name, price, category, img, id) => {
    const hasCart = cartList.some((cart) => cart.id === id)
    const newCart = { name, price, category, img, id }
    if (!hasCart) {
      setCartList([...cartList, newCart])
      toast.success("Produto adicionado com sucesso!")
    } else {
      toast.warn("Este produto já foi adicionado ao carrinho!")
    }
  }

  const removeCart = (id) => {
    const listFiltered = cartList.filter((cart) => {
      if (cart.id !== id) {
        return cart
      }
    })
    setCartList(listFiltered)
    toast.success("Produto removido do carrinho!")
  }

  useEffect(() => {
    localStorage.setItem("@ProdutosHamburgueria", JSON.stringify(cartList))
  }, [cartList])

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <ToastContainer autoClose={2000} />
      <HomePage
        cartList={cartList}
        addCart={addCart}
        setIsOpen={setIsOpen} />
      {isOpen ?
        <CartModal
          cartList={cartList}
          addCart={addCart}
          removeCart={removeCart}
          setIsOpen={setIsOpen}
          setCartList={setCartList} />
        : null}
    </>
  )
}

export default App