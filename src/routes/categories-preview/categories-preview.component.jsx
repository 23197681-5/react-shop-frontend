import ProductCard from "../../components/product-card/product-card.component";
import {
  CategoryPreviewContainer,
  CategoryPreviewDiv,
  CategoryPreviewTitle,
} from "./category-preview.styles";
import SHOP_DATA from "../../shop-data";
import { Link } from "react-router-dom";
const CategoryPreview = () => {
  const categoryTitle = SHOP_DATA[0].title;
  console.log(categoryTitle);
  const products = SHOP_DATA[0].items;
  return (
    <>
      {SHOP_DATA.map((category) => {
        console.log(category);
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
