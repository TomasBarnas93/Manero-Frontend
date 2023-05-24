const getProductService = async () => {
  try {
    const response = await fetch('https://manero-backend-group-3.azurewebsites.net/v1/api/products');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export { getProductService };
