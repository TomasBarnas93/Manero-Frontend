import React from 'react'
import ShowCase from '../components/ShowCase'
import SmallShowCase from '../components/SmallShowCase'
import CollectionProducts from '../components/CollectionProducts'
import Carousel from '../components/Carousel'

const Home = () => {
  return (
    <>
        <ShowCase/>
        <Carousel/>
        {/* Skickar in lista med BestSellers via api */}
        <CollectionProducts title='Best sellers' api='bestsellers'/>
        <SmallShowCase/>
        <CollectionProducts title='Featured Products' api='featured'/>
    </>
  )
}

export default Home