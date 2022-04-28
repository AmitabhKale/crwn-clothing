import { createContext, useEffect, useState } from "react";
import { addCollectionAndDocuments, getCategoriesAndDocuments } from "../utils/firebase/Firebase.js";

// import SHOP_DATA from '../shop-data.js';

export const ProductsContext = createContext({
    products: []
})

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

        useEffect(() => {
           const getCategoriesMap = async () => {
                const categoryMap = await getCategoriesAndDocuments();
                console.log(categoryMap);
           }
           getCategoriesMap();
        },[])

    const value = { products };
    return (
        <ProductsContext.Provider value={value}>{children} </ProductsContext.Provider>
    )
}