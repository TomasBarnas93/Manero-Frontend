import StarRating from '../../misc/StarRating';
import HeartIcon from './HeartIcon';
import { useNavigate } from 'react-router-dom';

const WishListItem = (props) => {

    let product = props.product;


    const navigate = useNavigate();

    const goToDetails = () => {
        navigate(`/details/${product.id}`);
    }


  return (
    <div className='w-full border-b flex p-3 max-h-[20em] relative border hover:border-blue-500 cursor-pointer'>
        <img src={product.imageUrl} alt="" className='w-1/3 max-w-[17em] border ' onClick={() => goToDetails()}/>
        <div className='flex flex-col pl-5'  onClick={() => goToDetails()} >
            <h2 className=''>{product.name}</h2>
            <p className='font-bold'>${product.price}</p>
            <StarRating rating={product.rating} reviewCount={product.reviewCount}/>
        </div>
        <div className='flex flex-col top-3 right-3 absolute'>
         <HeartIcon id={product.id} liked={product.liked} />
        </div>
        
        
    </div>
  )
}

export default WishListItem