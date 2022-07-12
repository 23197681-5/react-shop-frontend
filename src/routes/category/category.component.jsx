import { useContext, useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoriesContext } from "../../contexts/categories.context";
import { CategoryContainer, CategoryTitle } from "./category.styles";
import Spinner from "../../components/spinner/spinner.component";
const Category = ({ category }) => {
  const { categoriesMap, loading } = useContext(CategoriesContext);
  const [products, setProducts] = useState(
    categoriesMap.filter((obj) => obj.title.toLowerCase() === category)[0].items
  );

  useEffect(() => {
    setProducts(categoriesMap);
  }, [category]);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <CategoryTitle>
            {
              categoriesMap.filter(
                (obj) => obj.title.toLowerCase() === category
              )[0].title
            }
          </CategoryTitle>
          <CategoryContainer>
            {products?.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
          </CategoryContainer>
        </div>
      )}
    </>
  );
};

export default Category;
