const getProductService = async () => {
  try {
    const response = await fetch('https://manero-backend-group-3.azurewebsites.net/v1/api/products', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

const getSingleProductService = async ({id}) => {
  try {
    const response = await fetch(`https://manero-backend-group-3.azurewebsites.net/v1/api/Product/id/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

const favoriteItemService = async ({id}) => {
  let productId = {
    productId: id,
  };

  try {
    const response = await fetch("https://manero-backend-group-3.azurewebsites.net/v1/api/Wish", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
      body: JSON.stringify(productId)
    });


    return response;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }

};

const unfavoriteItemService = async ({id}) => {
  let productId = {
    productId: id,
  };

  try {
    const response = await fetch("https://manero-backend-group-3.azurewebsites.net/v1/api/Wish", {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
      body: JSON.stringify(productId)
    });

    return response;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  } 
};

const getFavoriteItemsService = async () => {
  try {
    const response = await fetch('https://manero-backend-group-3.azurewebsites.net/v1/api/Wishes', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}

export { getProductService, getSingleProductService, favoriteItemService, getFavoriteItemsService, unfavoriteItemService };
