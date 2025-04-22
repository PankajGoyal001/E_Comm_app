import React from 'react'

const SellerCard = ({ image, title, star, lightStar, price, deletedata, offer, heart, shop, hot }) => {
    return (
        <>
            <div className="flex flex-col border-[3px] rounded-[8px] border-[#F6F7F8] sm:gap-[10px] gap-2 p-4 sm:p-0 items-center">
                <div className="relative cursor-pointer group ">
                    <img className="z-30" src={`src/assets/Images/${image}`} alt="images" />

                    {hot !== undefined && (
                        <p className="absolute bg-secondary-red pt-[5px] pb-1.5 pl-[13px] pr-[14px] rounded-[3px] text-white text-lg font-proxima font-normal left-0 top-0">
                            {hot}
                        </p>
                    )}

                    <div className='hover:bg-[#2d95704d] bg-opacity-[0.6] absolute top-0 left-0 right-0 bottom-0'>
                        <div className="flex absolute justify-center left-1/2 top-1/2 transform -translate-x-1/2  group-hover:w-[200px] group-hover:opacity-100 opacity-0 w-0 gap-[10px]">
                            <img className="border-2 bg-white border-[#33A0FF] p-4 rounded-full" src={`src/assets/svg/${heart}`} alt="heart" />
                            <img className="border-2 bg-white border-[#33A0FF] p-4 rounded-full" src={`src/assets/svg/${shop}`} alt="shop" />
                        </div>
                    </div>

                </div>
                <div className="flex flex-col gap-1.5 sm:pb-[25px] sm:items-center">
                    <h5 className="sm:text-lg text-xs leading-[150%] tracking-[0.5px] font-bold font-poppins text-netural-blue">{title}</h5>
                    <div className="flex gap-[2px] sm:gap-[13.65px]">
                        <img src={`src/assets/svg/${star}`} alt="star" />
                        <img src={`src/assets/svg/${star}`} alt="star" />
                        <img src={`src/assets/svg/${star}`} alt="star" />
                        <img src={`src/assets/svg/${star}`} alt="star" />
                        <img src={`src/assets/svg/${lightStar}`} alt="star" />
                    </div>
                    <div className="sm:flex-row flex flex-col gap-1 sm:gap-[13px] sm:items-center">
                        <p className="sm:text-lg text-xs leading-[180%] tracking-[0.5px] font-poppins font-bold text-primary-blue">{price}</p>
                        <div className="flex gap-2">
                            <p className="sm:text-sm text-[10px] font-normal leading-[150%] tracking-[0.5px] text-netural-gray font-poppins"><del>{deletedata}</del></p>
                            <p className="sm:text-sm text-[10px] font-bold leading-[150%] tracking-[0.5px] text-primary-red font-poppins">{offer}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SellerCard
