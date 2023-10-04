import Logo from "../../assets/Logo.svg";
import { MdShoppingCart } from "react-icons/md";
import styles from "./style.module.scss"
import { CartModal } from "../CartModal";
import { useState } from "react";


export const Header = () => {
   //Criar um estado para abrir modal aqui
   // const [isOpen, setIsOpen] = useState(false);
   return (
      <header className={styles.header}>
         <img className={styles.logo} src={Logo} alt="Logo Kenzie Burguer" />
         <button className={styles.btn} onClick={() => setIsOpen(true)}>
            <MdShoppingCart size={21} />
            <span className={styles.count}>0</span>
         </button>
         {/* Condicional no JSX para abrir o Modal */}
         {/* {isOpen ? <CartModal setIsOpen={setIsOpen}>Teste</CartModal> : null} */}
      </header>
   );
};
