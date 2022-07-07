import ProductCard from "../../components/product-card/product-card.component";
import "./category-preview.styles.scss";
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
          <div className="category-preview-container" key={category.title}>
            <h2>
              <Link to={"/" + category.title.toLowerCase()} className="title">
                {category.title.toUpperCase()} &gt;
              </Link>
            </h2>
            <div className="preview">
              {category.items
                .filter((_, idx) => idx < 4)
                .map((product) => {
                  return <ProductCard key={product.id} product={product} />;
                })}
            </div>
          </div>
        );
      })}
    </>
  );
};
export default CategoryPreview;
