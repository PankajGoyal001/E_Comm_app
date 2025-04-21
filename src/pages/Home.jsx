import React from 'react'
import Banner from '../Component/Home/Banner'
import OfferBanner from '../Component/Home/OfferBanner'
import BestSeller from '../Component/Home/BestSeller'
import FeatureProduct from '../Component/Home/FeatureProduct'
import Shoes from '../Component/Home/Shoes'
import LatestNews from '../Component/Home/LatestNews'
import WhyUs from '../Component/Home/WhyUs'
import selling from "../json/bestselling.json";
import Catagory from '../Component/Home/Catagory'
import FlashSale from '../Component/Home/FlashSale'
import FlashData from "../json/FlaseSale.json";
import MegaData from "../json/MegaSale.json";
import NewBanner from '../Component/Home/NewBanner'


const Home = () => {
  return (
    <>
    <OfferBanner/>
    {/* <Banner/> */}
    <Catagory/>
    <FlashSale Data={FlashData} Heading={"Flash Sale"} />
    <FlashSale Data={MegaData} Heading={"Mega Sale"} />
    <NewBanner/>
    <BestSeller data={selling.Section} VARIENT={true} Title={"BEST SELLER"}/>
    {/* <Shoes/> */}
    <WhyUs/>
    <LatestNews/>
     {/* <FeatureProduct/> */}
    </>
  )
}

export default Home
