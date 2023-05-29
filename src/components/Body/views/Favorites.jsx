import {React, useContext, useEffect, useState} from 'react'
import { ProductContext } from '../../../contexts/ProductProvider'
import { useNavigate } from 'react-router-dom'
import WishListItem from '../components/WishListItem'


const Favorites = () => {

    const { getFavorites } = useContext(ProductContext);
    const [favorites, setFavorites] = useState();

    const navigate = useNavigate();

    useEffect(() => {
        let token = localStorage.getItem('accessToken')
    
        if (!token) {
            navigate('/login')
        } else {
            getFavorites().then((res) => {
                setFavorites(res)
            });
        }
    }, [getFavorites, navigate]);

    if(favorites === undefined){
        return (<>Loading ...</>);
    }

    if(favorites.length === 0){
        return (
            <div className="flex justify-center items-center h-screen">
                <h1 className="text-3xl font-bold">You have no favorites</h1>
            </div>
        )
    }

  return (
    <div className="flex flex-col items-center">
        <h1 className=' m-4 text-3xl'>Favorites</h1>
        {favorites.map((product) => (
            <WishListItem key={product.id} product={product} />
        ))}
    </div>

  )
}

export default Favorites