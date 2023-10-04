import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { api } from "../../services/api";

export const HomePage = ({addCart}) => {
   const [productList, setProductList] = useState([]);   
   useEffect(() => {
      const getProducts = async () => {
        const { data } = await api.get("products");
        setProductList(data);
      //   console.log(data);
      }
      getProducts();
    }, [])
   return (
      <>
         <Header />
         <main>
            <ProductList addCart={addCart} productList={productList} />
         </main>
      </>
   );
};
