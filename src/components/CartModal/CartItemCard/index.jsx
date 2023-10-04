import { MdDelete } from "react-icons/md";
import styles from "./style.module.scss"

export const CartItemCard = ({ removeCart, product }) => {
   // console.log(product)
   return (
      <li className={styles.listProducts}>
         <div className={styles.divProduct}>
            <img className={styles.img} src={product.img} alt={product.name} />
            <div className={styles.namePrice}>
               <h3 className="title3 nowrap">{product.name}</h3>
               <p className="body-600">{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</p>
            </div>
         </div>
         <button className={styles.buttonTrash} aria-label="delete" title="Remover item" onClick={() => removeCart(product.id)}>
            <MdDelete size={21} />
         </button>
      </li>
   );
};
