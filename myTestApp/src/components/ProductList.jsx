// import { ProductsContext } from "../Context/ProductsContext";
// import { useContext } from "react";

// function ProductList(props) {
//     const products = useContext(ProductsContext);

// return (
//     <div className="product-list">
//         {products.map(product => (
//             <div key={product.id} className="product-item">
//                 <h3>{product.title}</h3>
//                 <p>{product.description}</p>
//                 <p>${product.price}</p>
//             </div>
//         ))}
//     </div>
//     );
// }

// export default ProductList;


import { ProductsContext } from "../Context/ProductsContext";
import { useContext } from "react";

function ProductList() {
  const products = useContext(ProductsContext);

  if (!products) {
    return <p>Loading products...</p>;
  }

  return (
    <div className="product-list">
      {products.map(product => (
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
