import { useContext } from "react";
import { ProductsContext } from "../../context/products.context";
import ProductCard from "../../components/product-cards/product-card.component";
import "./shop.styles.scss";

const ShopComponent = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ShopComponent;
