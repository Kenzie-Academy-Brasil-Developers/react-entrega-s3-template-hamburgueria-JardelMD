import { useEffect, useState } from "react";
import { CartModal } from "./components/CartModal";
import { HomePage } from "./pages/HomePage"
import "./styles/index.scss"
//Importações para uso do toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  //Pega a lista de produtos do localStorage
  const localStorageProducts = localStorage.getItem("@ProdutosHamburgueria");
  //Configura o valor inicial da lista de produtos, carregando o valor presente em localStorage, caso ele exista, caso contrário, cria uma lista vazia:
  const [cartList, setCartList] = useState(
    localStorageProducts ? JSON.parse(localStorageProducts) : [] );
  //Função para adicionar item ao carrinho:
  const addCart = (name, price, category, img, id) => {
    const hasCart = cartList.some((cart) => cart.id === id)
    const newCart = { name, price, category, img, id }
    //Condição para evitar duplicidade de produtos no carrinho
    if(!hasCart){
      setCartList([...cartList, newCart])
      //Aplica um toast com mensagem de sucesso
      toast.success("Produto adicionado com sucesso!")
    } else{
      //Aplica um toast com uma mensagem de aviso
      toast.warn("Este produto já foi adicionado ao carrinho!")
    }
  }
  //Função para remover item ao carrinho
  const removeCart = (id) => {
    const listFiltered = cartList.filter((cart) => {
      if (cart.id !== id) {
        return cart
      }
    })
    setCartList(listFiltered)
    toast.success("Produto removido do carrinho!")
  }

  //Salvando lista de produtos no localStorage através de um efeito de atualização:
  useEffect(()=> {
      localStorage.setItem("@ProdutosHamburgueria", JSON.stringify(cartList))
  }, [cartList])
  return (
    <>
      <ToastContainer autoClose ={1000}/> 
      <HomePage addCart={addCart}/>
      <CartModal cartList={cartList} addCart={addCart} removeCart={removeCart}/>
    </>
  )
}

export default App
