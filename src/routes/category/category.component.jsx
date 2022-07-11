import { useContext, useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoriesContext } from "../../contexts/categories.context";
import { CategoryContainer, CategoryTitle } from "./category.styles";

const Category = ({ category }) => {
  //   const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(
    categoriesMap.filter((obj) => obj.title.toLowerCase() === category)[0].items
  );

  useEffect(() => {
    // setProducts(categoriesMap);
  }, [category]);
  return (
    <>
      <CategoryTitle>
        {
          categoriesMap.filter((obj) => obj.title.toLowerCase() === category)[0]
            .title
        }
      </CategoryTitle>
      <CategoryContainer>
        {products?.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </CategoryContainer>
    </>
  );
};

export default Category;
