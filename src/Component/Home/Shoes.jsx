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
                classname={" max-w-[592px] py-[163px] w-full "}
                titleText={"text-[55px] pb-[23px]"}
                detailText={"text-2xl pb-3"}
                imageText={"absolute right-[-120px]  top-[-95px]"}
                shopText={"pb-1  text-xl"}
              />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Shoes
