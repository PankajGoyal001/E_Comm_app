import React, { Fragment, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import hotDealData from "../json/Hotdeals.json";
import ShoesData from "../json/shoes.json";
import AdidasShoes from '../Component/Cards/AdidasShoes';
import bestselling from "../json/bestselling.json";
import SellerCard from "../Component/Cards/SellerCard";

const Hotdeals = () => {
    const [Price, setPrice] = useState(13.99)
    const [selectColor, setselectColor] = useState(false)
    const [isgrid, setisgrid] = useState(true)
    const [isrow, setisrow] = useState(false)
    const [click, setClick] = useState(2)

    const onrow = () => {

        setisgrid(false)
        setisrow(true)
    }
    const grid = () => {
        setisrow(false)
        setisgrid(true)
    }
    return (
        <>
            <div className="container">
                <div className="flex mt-[40px] py-3.5 bg-light-background justify-center">
                    <div className="flex items-center gap-[9px]">
                        <Link to={"/"}>
                            <h3 className='text-lg font-normal leading-[100%] font-proxima text-skyblue'>Home</h3>
                        </Link>
                        <p className='text-sm font-normal leading-[100%] font-proxima text-light-gray'>/</p>
                        <h3 className='text-lg font-normal leading-[100%] font-proxima text-primary'>Hot Deal</h3>
                    </div>
                </div>

                <div className="flex py-[50px] gap-[31px]">
                    {/* hotdeal */}
                    <div className="flex flex-col max-w-[270px] w-full gap-[30px]">
                        <div className="flex flex-col p-[19px_15px_26px_20px] bg-light-background rounded-[5px] gap-[25px]">
                            <h2 className='text-primary-dark text-lg font-medium font-poppins '>Hot Deals</h2>
                            <div className="flex flex-col gap-5">
                                {
                                    hotDealData.hotdeal.map((item, index) => (
                                        <div key={index} className="flex justify-between">
                                            <p className="text-primary text-lg  font-proxima font-normal">{item.text}</p>
                                            <p style={{ opacity: 0.5 }} className="text-primary text-lg  font-proxima font-normal">{item.count}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        {/* price */}
                        <div className="flex flex-col p-[19px_15px_26px_20px] bg-light-background rounded-[5px] gap-5">
                            <h1 className='font-poppins font-medium text-lg text-primary-dark'>Prices</h1>
                            <div className="flex w-full justify-between">
                                <h4 className='font-proxima font-normal text-lg text-primary'>Range:</h4>
                                <span>${Price.toFixed(2)}</span>
                            </div>
                            <input
                                type="range"
                                min="13.99"
                                max="25.99"
                                step="0.01"
                                value={Price}
                                onChange={(e) => setPrice(parseFloat(e.target.value))}
                                className="
                            w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer
                            [&::-webkit-slider-thumb]:appearance-none
                            [&::-webkit-slider-thumb]:w-4
                            [&::-webkit-slider-thumb]:h-4
                            [&::-webkit-slider-thumb]:bg-blue-500
                            [&::-webkit-slider-thumb]:rounded-full
                            [&::-webkit-slider-thumb]:shadow-md
                            [&::-webkit-slider-thumb]:transition
                            [&::-webkit-slider-thumb]:duration-300
                            
                            [&::-moz-range-thumb]:w-4
                            [&::-moz-range-thumb]:h-4
                            [&::-moz-range-thumb]:bg-blue-500
                            [&::-moz-range-thumb]:rounded-full
                            [&::-moz-range-thumb]:border-none
                            "
                            />
                        </div>

                        {/* color */}
                        <div className="flex flex-col p-[19px_15px_26px_20px] bg-light-background rounded-[5px] gap-[25px]">
                            <h2 className='text-primary-dark text-lg font-medium font-poppins '>COLOR</h2>
                            <div className="flex gap-[17px]">
                                {hotDealData.Colors.map((item, index) => (
                                    <Fragment key={index}>
                                        <div
                                            className="flex items-center w-5 h-5 justify-center rounded-full"
                                            style={{ border: `2px solid  ${selectColor === index ? item.Color : "transparent"}` }}
                                        >
                                            <button
                                                style={{ background: item.Color }}
                                                onClick={() => setselectColor(index)}
                                                className={`${selectColor === index ? "w-3 h-3" : "h-4 w-4"
                                                    } rounded-full cursor-pointer`}
                                            ></button>
                                        </div>
                                    </Fragment>
                                ))}
                            </div>
                        </div>

                        {/* Brands */}
                        <div className="flex flex-col p-[19px_15px_26px_20px] bg-light-background rounded-[5px] gap-[25px]">
                            <h2 className='text-primary-dark text-lg font-medium font-poppins '>Hot Deals</h2>
                            <div className="flex flex-col gap-5">
                                {
                                    hotDealData.Brand.map((item, index) => (
                                        <div key={index} className="flex justify-between">
                                            <p className="text-primary text-lg  font-proxima font-normal">{item.text}</p>
                                            <p style={{ opacity: 0.5 }} className="text-primary text-lg  font-proxima font-normal">{item.count}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        {/* More */}
                        <div className="flex flex-col pt-[19px] pb-4  bg-light-background rounded-[5px] gap-[25px]">
                            <h2 className='text-primary-dark text-lg text-center  font-medium font-poppins '>MORE</h2>
                        </div>
                    </div>

                    <div className="flex w-full flex-col gap-6">
                        {/* Adidas Shoes */}
                        <div className="w-full bg-primary-blue ">
                            {
                                ShoesData.map((item, index) => (
                                    <AdidasShoes key={index}
                                        title={item.title}
                                        detail={item.detail}
                                        shop={item.shop}
                                        images={item.image}
                                        classname={" max-w-[350px] py-[58px_55px] ml-[110px] w-full "}
                                        titleText={"text-[30px] pb-3"}
                                        detailText={"text-sm pb-6"}
                                        imageText={"absolute right-[113px] max-w-[397px] w-full bottom-[35px]"}
                                        shopText={"pb-[3px]  text-xl"}
                                    />
                                ))
                            }
                        </div>

                        {/* Bar */}
                        <div className="flex bg-border-gray rounded">
                            {
                                hotDealData.types.map((item, index) => (
                                    <div key={index}>
                                        <Link to={item.path}>
                                            <div className="flex  w-[961.50px]">
                                                <div className="flex gap-12 pt-[11px] pb-[9px] pl-[13px] items-center">
                                                    <div className="flex gap-1.5">
                                                        <h4 className='font-proxima font-normal text-base'>{bestselling.Data1.length}</h4>
                                                        <h1 className='font-proxima font-normal text-base'>{item.title}</h1>
                                                    </div>
                                                    <div className="flex justify-between items-center w-[421px]">
                                                        <div className="flex items-center gap-3 w-[192px]">
                                                            <h1 className='font-proxima font-normal w-[55px] text-base'>{item.sort}</h1>
                                                            <div className="flex gap-11 p-[10px_18px]">
                                                                <h1 className='font-proxima font-normal text-base'>{item.name}</h1>
                                                                <img src={`src/assets/svg/${item.image}`} alt="grid" />
                                                            </div>
                                                        </div>
                                                        <div className="flex gap-1 items-center">
                                                            <h1 className='font-proxima font-normal text-base'>{item.show}</h1>
                                                            <div className="flex gap-11 p-[10px_18px]">
                                                                <h4 className='font-proxima font-normal text-base'>{bestselling.Data1.length}</h4>
                                                                <img src={`src/assets/svg/${item.image}`} alt="grid" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex w-full justify-end">
                                                    <button onClick={grid}>
                                                        <img className='p-[19px_17px] cursor-pointer' src={`src/assets/svg/${item.Doted}`} alt="Doted" />
                                                    </button>
                                                    <button onClick={onrow}>
                                                        <img className='p-[19px_17px] cursor-pointer' src={`src/assets/svg/${item.bar}`} alt="sidebar" />
                                                    </button>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>

                        {/* grid type products */}
                        <div className={`grid grid-cols-3 gap-5 ${isgrid ? "block" : "hidden"}`}>
                            {
                                bestselling.Data1.map((item, index) => (
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

                        {/* Row type product */}
                        <div className={`flex flex-col gap-[25px] ${isrow ? "block z-50" : "hidden -z-10"}`}>
                            {
                                bestselling.Data2.map((item, index) => (
                                    <div key={index} className="flex relative pb-[30px] border-b-2 border-light-border items-start gap-4">
                                        <img src={`src/assets/Images/${item.image}`} alt="images" />
                                        <p className="absolute top-[11px] left-[25px] p-[2px_7px_3px_8px] bg-primary-red rounded text-xs font-proxima font-normal text-white">{item.hot}</p>
                                        <div className="flex flex-col">
                                            <h5 className="text-2xl font-medium font-poppins text-primary-dark">{item.title}</h5>
                                            <div className="flex items-center pt-3.5 gap-4">
                                                <div className="flex gap-1">
                                                    <img className='w-2.5' src={`src/assets/svg/${item.star}`} alt="star" />
                                                    <img className='w-2.5' src={`src/assets/svg/${item.star}`} alt="star" />
                                                    <img className='w-2.5' src={`src/assets/svg/${item.star}`} alt="star" />
                                                    <img className='w-2.5' src={`src/assets/svg/${item.star}`} alt="star" />
                                                    <img className='w-2.5' src={`src/assets/svg/${item.lightStar}`} alt="star" />
                                                </div>
                                                <div className="flex gap-[13px]">
                                                    <p className="text-sm font-normal font-proxima text-light-gray">0 reviews</p>
                                                    <p className="text-sm font-normal font-proxima text-skyblue">Submit a review</p>
                                                </div>
                                            </div>
                                            <span className='border-b-2 border-light-background pt-[17px]'></span>
                                            <div className="flex gap-[9px] pt-3.5 items-center">
                                                <p className="text-xl font-poppins font-bold text-primary-blue leading-[180%] tracking-[0.5px]">{item.price}</p>
                                                <div className="flex gap-2">
                                                    <p className="text-sm font-poppins font-normal leading-[150%] tracking-[0.5px] text-netural-gray"><del>$534,33</del></p>
                                                    <p className="text-sm font-poppins font-bold leading-[150%] tracking-[0.5px] text-primary-red">24% Off</p>
                                                </div>
                                            </div>
                                            <p className="text-sm font-poppins font-normal text-primary">{item.text}</p>
                                            <div className="flex items-center gap-4">
                                                <div className="flex gap-[15px] p-[13px_26px_15px_20px] rounded bg-[#ebf6ff]  items-center">
                                                    <img src={`src/assets/svg/${item.cart}`} alt="cart_2" />
                                                    <p className="text-skyblue text-nowrap text-base font-normal font-proxima">Add To Cart</p>
                                                </div>
                                                <img className='bg-[#ebf6ff] p-4 rounded' src={`src/assets/svg/${item.heart}`} alt="heart_2" />
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                        {/* Pagination */}
                        <div className="flex justify-center bg-light-background gap-1">
                            {["1","2","3","4","5"].map((item,index)=>(
                                <button onClick={()=>setClick(index)}>
                                    <p className={`py-4 px-[25px] ${click === index && "bg-skyblue"}`}>{item}</p>
                                </button>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Hotdeals
