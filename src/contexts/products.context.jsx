import { createContext, useState, useEffect } from "react";
import PRODUCTS from "../shop-data.json";
export const ProductsContext = createContext({
  currentProducts: [],
  setCurrenProducts: () => null,
});

//provider alias component
export const ProductsProvier = ({ children }) => {
  const [currentProducts, setCurrenProducts] = useState(PRODUCTS);
  const valueSharer = { currentProducts, setCurrenProducts };

  return (
    <ProductsContext.Provider value={valueSharer}>
      {children}
    </ProductsContext.Provider>
  );
};
