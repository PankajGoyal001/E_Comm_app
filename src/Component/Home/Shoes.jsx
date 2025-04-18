import React from 'react'
import { Link } from 'react-router-dom'
import AdidasShoes from '../Cards/AdidasShoes'
import ShoesData from "../../json/shoes.json";

const Shoes = () => {
  return (
    <>
      <div className="mt-[45px] mb-[49px] bg-primary-blue ">
        <div className="container">
          {
            ShoesData.map((item, index) => (
              <AdidasShoes key={index}
                title={item.title}
                detail={item.detail}
                shop={item.shop}
                images={item.image}
              />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Shoes
