import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import StarRating from '../../misc/StarRating';
import { ProductContext } from '../../../contexts/ProductProvider';

function Details() {
  const { id } = useParams();
  
  const products = useContext(ProductContext);

  const product = products.find((item) => item.id === id);

  return (
    <>
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <StarRating rating={product.starRating} />
      {/* <Reviews/> */}
    </div>
    </>
  );
}

export default Details;
