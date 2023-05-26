import {useContext, useState, useEffect} from 'react'
import { ProductContext } from '../../../contexts/ProductProvider'
import { useNavigate } from 'react-router-dom'


const HeartIcon = ({id, liked}) => {

    const { adjustFavorite } = useContext(ProductContext);
    const [likedState, setLikedState] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        setLikedState(liked);
    }, []);


    const submitFavorite = () => {
        if (!localStorage.getItem("accessToken")) {
          navigate("/login");
        }

        adjustFavorite({id, liked:likedState});

        setLikedState(!likedState);
    };

  return (
    <div>
        <button onClick={() => submitFavorite()} className="link rounded-full p-1 px-2 hover:bg-gray-300">
            <i className={`fa-regular fa-heart ${likedState ? 'text-red-500' : 'opacity-50'}`}></i>
        </button>
    </div>
  )
}

export default HeartIcon