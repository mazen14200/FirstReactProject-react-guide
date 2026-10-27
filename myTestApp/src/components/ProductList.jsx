
import React, { useEffect } from "react";
import { ProductsContext } from "../Context/ProductsContext";
import { useContext,useState } from "react";

function ProductList(props) {
  const products = useContext(ProductsContext);

// 1.Hooks then 2.Conditional Rendering
  //#region  For SetTimer before showing the products
  const [showProducts, setShowProducts] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowProducts(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!showProducts) {
    return <p>Loading products...</p>;
  }
  //#endregion  For SetTimer before showing the products

  if (products === null || products === undefined || products.length === 0) {
    return <p>Loading products...</p>;
  }

 const productList = Array.isArray(products)
    ? products
    : [products];
    
  return (
    <div className="product-list">
      {productList.map(product => (
        <div key={product.id} className="product-item">
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
