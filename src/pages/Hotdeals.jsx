import React from 'react'
import { Link } from 'react-router-dom'
import hotDealData from "../json/Hotdeals.json";

const Hotdeals = () => {
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
                    <div className="grid max-w-[270px] w-full gap-[30px]">
                        <div className="flex flex-col pt-[19px] pb-[26px] pr-[15px] pl-5 bg-light-background rounded-[5px] gap-[25px]">
                            {
                                hotDealData.hotdeal.map((item,index)=>(
                                    <div key={index} className="flex flex-col gap-5">
                                        <div className="flex justify-between">
                                            <p className="">{item.text}</p>
                                            <p className="">{item.count}</p>
                                        </div>
                                    </div>
                                ))              
                            }
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hotdeals
