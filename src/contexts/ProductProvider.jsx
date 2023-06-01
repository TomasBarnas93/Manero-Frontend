import React, { createContext, useEffect, useState } from 'react';
import { favoriteItemService, getProductService, getFavoriteItemsService, unfavoriteItemService } from '../components/services/GetProductsService';

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
      const response = await fetch(`https://manero-backend-group-3.azurewebsites.net/v1/api/Product/id/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
          }
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching product:', error);
      throw error;
    }
  };

  const fetchSearchProduct = async (searchCondition) => {
    try {
      const response = await fetch(`https://manero-backend-group-3.azurewebsites.net/v1/api/Product/search/${searchCondition}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching product:', error);
      throw error;
    }
  };

  const adjustFavorite = async ({id, liked}) => {


    if(liked === false){
      return await favoriteItemService({id});
    }
    else{
      return await unfavoriteItemService({id});
    }

  };

  const getFavorites = async () => {
    return await getFavoriteItemsService();
  };

  return (
    <ProductContext.Provider value={{ products, fetchSingleProduct, fetchSearchProduct, adjustFavorite, getFavorites }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };