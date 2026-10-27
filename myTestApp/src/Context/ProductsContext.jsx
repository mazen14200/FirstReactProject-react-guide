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

function ProductsProvider(props) {
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

export default ProductsProvider;
