// import { createContext } from 'react'

// function fetchProducts() {
//   return fetch('https://fakestoreapi.com/products')
//     .then(response => response.json()).then(data => {console.log(data); return data})
//     .catch(error => console.error('Error fetching products:', error));
// }

// function ProductsProvider(props) {
//     const [productsState, setProductsState] = useState(null);

//     useEffect(() => {
//         fetchProducts().then(data => setProductsState(data));
//     }, []);

//     return (
//         <ProductsContext.Provider value={productsState}>
//             {props.children}
//         </ProductsContext.Provider>
//     );
// }

// export const ProductsContext = createContext();


import { createContext, useState, useEffect } from 'react';

export const ProductsContext = createContext();

function fetchProducts() {
  return fetch('https://fakestoreapi.com/products')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      return data;
    })
    .catch(error => {
      console.error('Error fetching products:', error);
      return [];
    });
}


function fetchSingleProduct(id) {
  return fetch(`https://fakestoreapi.com/products/${id}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch product');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      return data;
    })
    .catch(error => {
      console.error('Error fetching product:', error);
      return null;
    });
}

// // Usage
// fetchSingleProduct(1);
// fetchSingleProduct(5);

export function ProductsProvider(props) {
  const [productsState, setProductsState] = useState([]);

  useEffect(() => {
    fetchProducts().then(data => setProductsState(data));
  }, []);

  return (
    <ProductsContext.Provider value={productsState}>
      {props.children}
    </ProductsContext.Provider>
  );
}

export function SingleProductProvider(props) {
  const [singleProductState, setSingleProductState] = useState(null);

  useEffect(() => {
    setSingleProductState(null);

    fetchSingleProduct(props.id)
      .then(data => setSingleProductState(data));

  }, [props.id]); // useEffect will run whenever the id prop changes

  return (
    <ProductsContext.Provider value={singleProductState}>
      {props.children}
    </ProductsContext.Provider>
  );
}

// //#region 
// export default ProductsProvider;
// export default SingleProductProvider;
// //#endregion
