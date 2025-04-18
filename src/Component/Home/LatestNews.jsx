import React from 'react'
import letestData from "../../json/latest.json"

const LatestNews = () => {
    return (
        <>
            <div className="pt-[60px] pb-[55px]">
                <div className="container">
                    <div className="flex flex-col gap-[72px] justify-between ">
                        <h1 className='text-[35px] leading-[100%] tracking-normal text-center font-poppins font-semibold text-primary-dark'>LATEST NEWS</h1>
                        <div className="flex items-center justify-between">
                            {
                                letestData.map((item, index) => (
                                    <div key={index} className="flex gap-5 items-center">
                                        <img src={`src/assets/svg/${item.image}`} alt="image" />
                                        <div className="grid max-w-[197px] w-full">
                                            <p className="pb-[2px] text-lg leading-[100%] font-poppins font-medium text-light-gray">{item.date}</p>
                                            <h6 className="text-[22px] leading-[100%] text-primary-dark tracking-normal font-poppins font-semibold">{item.title}</h6>
                                            <p className="text-lg leading-[100%] font-normal font-proxima text-primary-dark">{item.text}</p>
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
