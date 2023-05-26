import React, { createContext, useEffect, useState } from 'react';
import { getProductService } from '../components/services/GetProductsService';

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProductService();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  const fetchSingleProduct = async (id) => {
    try {
      const response = await fetch(`https://manero-backend-group-3.azurewebsites.net/v1/api/Product/id/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching product:', error);
      throw error;
    }
  };

  return (
    <ProductContext.Provider value={{ products, fetchSingleProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
