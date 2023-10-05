import { MdClose } from "react-icons/md"
import { CartItemCard } from "./CartItemCard"
import styles from "./style.module.scss"
import { useOutclick } from "../../hooks/useOutclick"
import { useKeydown } from "../../hooks/useKeydown"

export const CartModal = ({ setCartList, setIsOpen, removeCart, cartList }) => {
   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price
   }, 0)

   const modalRef = useOutclick(() => {
      setIsOpen(false)
   })

   const buttonRef = useKeydown("Escape", (element) => {
      element.click()
   })

   return (
      <div className={styles.modalOverlay} role="dialog">
         <div ref={modalRef} className={styles.modalBox}>
            <div className={styles.modalHeader}>
               <h2 className="title3 white">Carrinho de compras</h2>
               <button
                  className={styles.close}
                  ref={buttonRef} aria-label="close" title="Fechar"
                  onClick={() => setIsOpen(false)}>
                  <MdClose size={21} />
               </button>
            </div>
            <div className={styles.modalMain}>
               <ul className={styles.list}>
                  {cartList.map((product) => (
                     <CartItemCard
                        key={product.id}
                        product={product}
                        removeCart={removeCart} />
                  ))}
               </ul>
            </div>
            <div className={styles.modalFooter}>
               <hr className={styles.separator}></hr>
               <div className={styles.totalSum}>
                  <span className="body-600">Total</span>
                  <span className="text2 grey300">
                     {total.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}
                  </span>
               </div>
               <button onClick={() => setCartList([])} className="btnDefault">Remover todos</button>
            </div>
         </div>
      </div>
   )
}