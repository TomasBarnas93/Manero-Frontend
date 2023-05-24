const ReviewService = async (id) => {
    try {
      const response = await fetch(`https://manero-backend-group-3.azurewebsites.net/v1/api/Product/id/${id}`);
      const data = await response.json();
      return data.reviews;
    } catch (error) {
      console.error('Error fetching reviews:', error);
      throw error;
    }
  };
  
  export { ReviewService };
  