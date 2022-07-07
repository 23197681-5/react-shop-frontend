import { useContext, useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoriesContext } from "../../contexts/categories.context";
import "./category.styles.scss";

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
      <h2 className="category-title">
        {
          categoriesMap.filter((obj) => obj.title.toLowerCase() === category)[0]
            .title
        }
      </h2>
      <div className="category-container">
        {products?.map((product) => {
          console.log(product);

          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </>
  );
};

export default Category;
