import styles from "./style.module.scss"

export const ProductCard = ({ product, addCart }) => {
    return (
        <li className={styles.productList}>
            <div className={styles.cardImg}>
                <img className={styles.img} src={product.img} alt={product.name} />
            </div>
            <div className={styles.info}>
                <h3 className="title3">{product.name}</h3>
                <span className="text3">{product.category}</span>
                <span className="body-600">
                    {product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}
                </span>
                <button
                    onClick={() => addCart(product.name, product.price, product.category, product.img, product.id)}
                    className="btnMedium">
                    Adicionar
                </button>
            </div>
        </li>
    )
}