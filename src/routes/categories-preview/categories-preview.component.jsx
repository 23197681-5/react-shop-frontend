import ProductCard from "../../components/product-card/product-card.component";
import {
  CategoryPreviewContainer,
  CategoryPreviewDiv,
  CategoryPreviewTitle,
} from "./category-preview.styles";
import { CategoriesContext } from "../../contexts/categories.context";
import { useContext } from "react";
import Spinner from "../../components/spinner/spinner.component";
import { Link } from "react-router-dom";
const CategoryPreview = () => {
  const { categoriesMap, loading } = useContext(CategoriesContext);
  return (
    <>
      {categoriesMap.map((category) => {
        return (
          <CategoryPreviewContainer key={category.title}>
            <h2>
              <CategoryPreviewTitle to={"/" + category.title.toLowerCase()}>
                {category.title.toUpperCase()} &gt;
              </CategoryPreviewTitle>
            </h2>
            <CategoryPreviewDiv>
              {category.items
                .filter((_, idx) => idx < 4)
                .map((product) => {
                  return <ProductCard key={product.id} product={product} />;
                })}
            </CategoryPreviewDiv>
          </CategoryPreviewContainer>
        );
      })}
    </>
  );
};
export default CategoryPreview;
