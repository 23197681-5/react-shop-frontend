import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() =>{
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments('categories');
      dispatch(setCategoriesMap(categoryMap));
    };
    getCategoriesMap();
  })
  return(
  <Routes>
    {/* <Route path="/" element={<CategoriesPreview />} /> */}
    <Route index element={<CategoriesPreview />} />
    <Route path=":category" element={<Category />} />
  </Routes>);
};

export default Shop;
