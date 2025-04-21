import React from 'react'
import letestData from "../../json/latest.json"

const LatestNews = () => {
    return (
        <>
            <div className="md:block hidden pt-[60px] pb-[55px]">
                <div className="container">
                    <div className="flex flex-col gap-[72px] justify-between ">
                        <h1 className='text-[35px] leading-[100%] tracking-normal text-center font-poppins font-semibold text-primary-dark'>LATEST NEWS</h1>
                        <div className="flex items-center justify-between">
                            {
                                letestData.map((item, index) => (
                                    <div key={index} className="flex lg:gap-5 gap-2 items-center">
                                        <img src={`src/assets/svg/${item.image}`} alt="image" />
                                        <div className="grid max-w-[197px] w-full">
                                            <p className="pb-[2px] lg:text-lg text-sm leading-[100%] font-poppins font-medium text-light-gray">{item.date}</p>
                                            <h6 className="lg:text-[22px] text-xl leading-[100%] text-primary-dark tracking-normal font-poppins font-semibold">{item.title}</h6>
                                            <p className="lg:text-lg text-xs leading-[100%] font-normal font-proxima text-primary-dark">{item.text}</p>
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

export default LatestNews
