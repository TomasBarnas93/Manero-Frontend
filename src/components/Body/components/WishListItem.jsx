import StarRating from '../../misc/StarRating';
import HeartIcon from './HeartIcon';

const WishListItem = (props) => {

    let product = props.product;



  return (
    <div className='w-full border-b flex p-3 max-h-44 max-w-2xl relative'>
        <img src={product.imageUrl} alt="" className='w-1/3 border'/>
        <div className='flex flex-col pl-5'>
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