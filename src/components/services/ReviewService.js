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
  
  const ReviewPostService = async (review) => {

    console.log(review);
    try {
      const response = await fetch(`https://manero-backend-group-3.azurewebsites.net/v1/api/Review`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        body: JSON.stringify(review)
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching reviews:', error);
      throw error;
    }


  };

  


  export { ReviewService,ReviewPostService };
  