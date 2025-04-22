import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import hotDealData from "../json/Hotdeals.json";

const Hotdeals = () => {
    const [Price, setPrice] = useState(13.99)
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

                <div className="flex pt-[50px] gap-[31px]">
                    {/* hotdeal */}
                    <div className="grid max-w-[270px] w-full gap-[30px]">
                        <div className="flex flex-col pt-[19px] pb-[26px] pr-[15px] pl-5 bg-light-background rounded-[5px] gap-[25px]">
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
                    </div>
                    {/* price */}
                    <div className="flex flex-col max-w-[270px] w-full bg-border-gray p-[19px_15px_26px_20px] rounded gap-5">
                        <h1 className='font-poppins font-medium text-lg text-primary'>Price</h1>
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
                </div>
            </div>
        </>
    )
}

export default Hotdeals
