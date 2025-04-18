import React from 'react'
import ProductBanner from '../Component/Product/ProductBanner'
import BestSeller from '../Component/Home/BestSeller'
import selling from "../json/bestselling.json";


const Product = () => {
  return (
    <>
    <ProductBanner/>
    <BestSeller data={selling.Section1} VARIENT={false} Title={"RELATED PRODUCTS"}/>
    </>
  )
}

export default Product
