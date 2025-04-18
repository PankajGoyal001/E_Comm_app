import React from 'react'
import product from "../../json/feature.json";

const FeatureProduct = () => {
    return (
        <>
            <div className="pt-[55px]">
                <div className="container">
                    <div className="flex items-center flex-col gap-[55px]">
                        <h1 className='text-[35px] leading-[100%] tracking-normal text-center font-poppins font-semibold text-primary-dark'>FEATURED PRODUCTS</h1>
                        <div className="flex ">
                            {
                                product.map((item, index) => (
                                    <div key={index} className="flex gap-[25px]  max-w-[476px] w-full">
                                        <img src={`src/assets/Images/${item.image}`} alt="images" />
                                        <div className="flex flex-col gap-[17px] max-w-[249px] w-full">
                                            <p className="text-[22px] text-primary leading-[100%] tracking-normal font-proxima">{item.title}</p>
                                            <div className="flex gap-[5.33px]">
                                                <img src={`src/assets/svg/${item.star}`} alt="star" />
                                                <img src={`src/assets/svg/${item.star}`} alt="star" />
                                                <img src={`src/assets/svg/${item.star}`} alt="star" />
                                                <img src={`src/assets/svg/${item.star}`} alt="star" />
                                                <img src={`src/assets/svg/${item.lightStar}`} alt="lightStar" />
                                            </div>
                                            <div className="flex gap-1">
                                                <p className="text-xl leading-[100%] font-medium font-poppins text-primary-red">{item.price}</p>
                                                <p className="text-xl leading-[100%] font-normal font-proxima text-light-gray"><del>{item.delete}</del></p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="mt-[110px] pb-[95px]">
                        <div className="border-2 border-[#BCDDFE] rounded-[2px] max-w-[635px] w-full flex justify-between justify-self-center">
                            <input className='outline-none pl-[21px] normalText3 text-[#262626]' type="text" placeholder='Search query...' />
                            <button className="px-[27px] py-[17px] cursor-pointer bg-[#40BFFF] text-xl leading-[100%] text-[#fff] tracking-normal font-poppins_semibold ">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeatureProduct
