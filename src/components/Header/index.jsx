import Logo from "../../assets/Logo.svg"
import { MdShoppingCart } from "react-icons/md"
import styles from "./style.module.scss"

export const Header = ({ cartList, setIsOpen }) => {
   return (
      <header className={styles.header}>
         <img className={styles.logo} src={Logo} alt="Logo Kenzie Burguer" />
         <button className={styles.btn} onClick={() => setIsOpen(true)}>
            <MdShoppingCart size={21} />
            <span className={styles.count}>{cartList.length}</span>
         </button>
      </header>
   )
}