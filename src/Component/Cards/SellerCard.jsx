import React from 'react'

const SellerCard = ({ image, title, star, lightStar, price, deletedata, offer, heart, shop, hot }) => {
    return (
        <>
            <div className="flex flex-col border-[3px] rounded-[8px] border-[#F6F7F8] gap-[10px] items-center">
                <div className="relative cursor-pointer group ">
                    <img className=' hover:blur-xs' src={`src/assets/Images/${image}`} alt="images" />
                    {
                        hot !== undefined && (<> <p className='absolute bg-secondary-red pt-[5px] pb-1.5 pl-[13px] pr-[14px] rounded-[3px] text-white text-lg  font-proxima font-normal left-0 top-0'>{hot}</p></>)
                    }
                    <div className="flex absolute group-hover:w-[200px] transition-all duration-200 group-hover:z-50 group-hover:opacity-100 -z-50 opacity-0  w-0  top-[109px] left-[82px]  gap-[10px]">
                        <img className='border-2 bg-white  border-[#33A0FF] p-4 rounded-full' src={`src/assets/svg/${heart}`} alt="heart" />
                        <img className='border-2 bg-white  border-[#33A0FF] p-4 rounded-full' src={`src/assets/svg/${shop}`} alt="shop" />
                    </div>
                </div>
                <div className="flex flex-col gap-1.5 pb-[25px] items-center">
                    <h5 className="text-lg leading-[150%] tracking-[0.5px] font-bold font-poppins text-netural-blue">{title}</h5>
                    <div className="flex gap-[13.65px]">
                        <img src={`src/assets/svg/${star}`} alt="star" />
                        <img src={`src/assets/svg/${star}`} alt="star" />
                        <img src={`src/assets/svg/${star}`} alt="star" />
                        <img src={`src/assets/svg/${star}`} alt="star" />
                        <img src={`src/assets/svg/${lightStar}`} alt="star" />
                    </div>
                    <div className="flex gap-[13px] items-center">
                        <p className="text-lg ;eading-[180%] tracking-[0.5px] font-poppins font-bold text-primary-blue">{price}</p>
                        <div className="flex gap-2">
                            <p className="text-sm font-normal leading-[150%] tracking-[0.5px] text-netural-gray font-poppins"><del>{deletedata}</del></p>
                            <p className="text-sm font-bold leading-[150%] tracking-[0.5px] text-primary-red font-poppins">{offer}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SellerCard
