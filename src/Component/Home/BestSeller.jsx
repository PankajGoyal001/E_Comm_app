import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import selling from "../../json/bestselling.json";
import SellerCard from '../Cards/SellerCard';


const BestSeller = ({ data, VARIENT, Title }) => {
    return (
        <>
            <div className=" pb-[45px]">
                <div className="container">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-[26px] items-center">
                            <h2 className='text-[35px] leading-[100%] tracking-normal font-poppins font-semibold text-primary-dark'>{Title}</h2>
                            {
                                VARIENT === true && (<>
                                    <ul className="max-w-[627px] w-full flex justify-between ">
                                        {
                                            selling.Heading.map((item, index) => (
                                                <NavLink key={index}>
                                                    <li className='text-[22px] font-normal font-poppins text-primary tracking-normal hover:cursor-pointer nav'>{item.menu}</li>
                                                </NavLink>
                                            ))
                                        }
                                    </ul>
                                </>) 
                            }
                        </div>
                        <div className="grid grid-cols-4 gap-[20px]">
                            {
                                data.map((item, index) => (
                                    <SellerCard key={index}
                                        image={item.image}
                                        title={item.title}
                                        star={item.star}
                                        lightStar={item.lightStar}
                                        price={item.price}
                                        deletedata={item.deletedata}
                                        offer={item.offer}
                                        heart={item.heart}
                                        shop={item.shop}
                                        hot={item.hot}
                                    />
                                ))
                            }
                        </div>
                        {
                            VARIENT === true ? (<><div className='text-center '>
                                <button className=" text-xl  cursor-pointer leading-[100%] text-skyblue font-poppins  border-b-[3px] border-b-skyblue">LOAD MORE</button></div>
                            </>)
                                : ""
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default BestSeller
