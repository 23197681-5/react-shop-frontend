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
      {loading ? (
        <Spinner></Spinner>
      ) : (
        (console.log(categoriesMap),
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreviewContainer key={title}>
              <h2>
                <CategoryPreviewTitle to={"/" + title.toLowerCase()}>
                  {title.toUpperCase()} &gt;
                </CategoryPreviewTitle>
              </h2>
              <CategoryPreviewDiv>
                {products
                  .filter((_, idx) => idx < 4)
                  .map((product) => {
                    return <ProductCard key={product.id} product={product} />;
                  })}
              </CategoryPreviewDiv>
            </CategoryPreviewContainer>
          );
        }))
      )}
    </>
  );
};
export default CategoryPreview;
