import { createContext, useState, useEffect } from "react";
import SHOP_DATA from "../shop-data.js";
// import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";
// import { addCollectionsAndDocuments } from "../utils/firebase/firebase.utils.js";
export const CategoriesContext = createContext({
  categoriesMap: {},
  setCategoriesMap: () => null,
});

//provider alias component
export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState(SHOP_DATA);
  // useEffect(() => { for adding sample data
  //   addCollectionsAndDocuments("categories", SHOP_DATA);
  // }, []);
  console.log(categoriesMap);
  useEffect(() => {
    setCategoriesMap(SHOP_DATA);
  }, SHOP_DATA);
  // useEffect(() => {
  //   const getCategoriesMap = async () => {
  //     const categoryMap = await getCategoriesAndDocuments();
  //     console.log(categoryMap);
  //     if (categoriesMap !== categoryMap) setCategoriesMap(categoryMap);
  //   };
  //   getCategoriesMap();
  // });
  const valueSharer = { categoriesMap, setCategoriesMap };

  return (
    <CategoriesContext.Provider value={valueSharer}>
      {children}
    </CategoriesContext.Provider>
  );
};
