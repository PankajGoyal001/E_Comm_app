import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductImg from "../../assets/Images/ProductImg.png";
import star from "../../assets/svg/star.svg";
import star1 from "../../assets/svg/star1.svg";
import ProductMainImg from "../../assets/Images/ProductMainImg.png";
import img1 from "../../assets/Images/img1.png";
import img2 from "../../assets/Images/img2.png";
import img3 from "../../assets/Images/img3.png";
import img4 from "../../assets/Images/img4.png";
import cart_2 from "../../assets/svg/cart_2.svg";
import heart_2 from "../../assets/svg/heart_2.svg";
import facebook_2 from "../../assets/svg/facebook_2.svg";
import twitter_2 from "../../assets/svg/twitter_2.svg";

const ProductBanner = () => {
    const [count, setcount] = useState(1)
    const [selectColor, setselectColor] = useState(false)
    const color = ["#006CFF", "#FC3E39", "#171717", "#FFF600"]
    return (
        <>
            <div className="container">
                {/* header ....... */}
                <div className="flex mt-[30px] py-3.5 bg-light-background justify-center">
                    <div className="flex items-center gap-[9px]">
                        <Link to={"/"}>
                            <h3 className='text-lg font-normal leading-[100%] font-proxima text-skyblue'>Home</h3>
                        </Link>
                        <p className='text-sm font-normal leading-[100%] font-proxima text-light-gray'>/</p>
                        <h3 className='text-lg font-normal leading-[100%] font-proxima text-skyblue'>Hot Deal</h3>
                        <p className='text-sm font-normal leading-[100%] font-proxima text-light-gray'>/</p>
                        <h3 className='text-lg font-normal leading-[100%] font-proxima text-primary'>Nike Airmax 270 React</h3>
                    </div>
                </div>

                {/* banner ............ */}
                <div className="flex justify-between gap-8 pt-[42px] items-start">
                    <div className="flex flex-col gap-12 ">
                        <div className="flex  gap-[35px]">
                            <div className="flex flex-col ">
                                <img src={ProductMainImg} alt="ProductMainImg" />
                                <div className="flex pt-[134px] gap-[15px]">
                                    <img className='border-2 border-[#E5E8EA]' src={img1} alt="" />
                                    <img className='border-2 border-[#E5E8EA]' src={img2} alt="" />
                                    <img className='border-2 border-[#E5E8EA]' src={img3} alt="" />
                                    <img className='border-2 border-[#E5E8EA]' src={img4} alt="" />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <h3 className='text-2xl font-medium font-poppins text-primary-dark'>Nike Airmax 270 React</h3>
                                <div className="flex pt-[22px] gap-4">
                                    <div className="flex gap-[5px]">
                                        <img className='w-3' src={star} alt="star" />
                                        <img className='w-3' src={star} alt="star" />
                                        <img className='w-3' src={star} alt="star" />
                                        <img className='w-3' src={star} alt="star" />
                                        <img className='w-3' src={star1} alt="star1" />
                                    </div>
                                    <p className="text-base font-proxima font-normal text-light-gray ">0 reviews</p>
                                    <p className="text-base font-proxima font-normal text-skyblue ">Submit a review</p>
                                </div>
                                <span className='border-b w-full border-light-background mt-[19px] mb-[17px]'></span>
                                <div className="flex items-center gap-[9px]">
                                    <p className="text-xl font-poppins font-bold text-primary-blue leading-[180%] tracking-[0.5px]">$299,43</p>
                                    <div className="flex items-center gap-2">
                                        <p className="text-sm leading-[150%] tracking-[0.5px]  font-poppins font-normal text-netural-gray">$534,33</p>
                                        <p className="text-sm leading-[150%] tracking-[0.5px]  font-poppins font-bold text-primary-red">24% Off</p>
                                    </div>
                                </div>
                                <div className="grid mt-[18px] gap-4 grid-cols-2">
                                    <p className="text-sm font-normal font-poppins text-primary">Availability:</p>
                                    <p className="text-sm font-normal font-poppins text-primary">In stock</p>
                                    <p className="text-sm font-normal font-poppins text-primary">Category:</p>
                                    <p className="text-sm font-normal font-poppins text-primary">Accessories</p>
                                    <p className="text-sm font-normal font-poppins text-primary">Free shipping</p>
                                </div>
                                <span className='border-b w-full border-light-background mt-[22px] mb-5'></span>
                                <div className="flex gap-[23px] mb-[21px] items-center">
                                    <p className="text-base font-poppins font-normal text-primary">Select Color:</p>
                                    <div className="flex gap-[17px]">
                                        {color.map((item, index) => (
                                            <Fragment key={index}>
                                                <div
                                                    className="flex items-center w-5 h-5 justify-center rounded-full"
                                                    style={{ border: `2px solid  ${selectColor === index ? item : "transparent"}` }}
                                                >
                                                    <button
                                                        style={{ background: item }}
                                                        onClick={() => setselectColor(index)}
                                                        className={`${selectColor === index ? "w-3 h-3" : "h-4 w-4"
                                                            } rounded-full cursor-pointer`}
                                                    ></button>
                                                </div>
                                            </Fragment>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex items-center gap-[98px]">
                                    <p className="text-base font-poppins font-normal text-primary">Size</p>
                                    <select name="shoes-size" id="size" className='max-w-[123px] cursor-pointer border-2 border-primary-border rounded-[2px] outline-none w-full py-[11px] px-4'>
                                        <option value="sizes">XS</option>
                                        <option value="sizes">X</option>
                                        <option value="sizes">13</option>
                                        <option value="sizes">12</option>
                                    </select>
                                </div>
                                <span className='border-b w-full border-light-background mt-[21px] mb-5'></span>
                                <div className="flex justify-between ">
                                    <div className="max-w-[123px] rounded-[5px] bg-light-background flex justify-between px-[18px] py-[15px] w-full items-center ">
                                        <button className='cursor-pointer text-skyblue' onClick={() => { if (count > 1) { setcount(count - 1); } }}>-</button>
                                        <p>{count}</p>
                                        <button className='cursor-pointer text-skyblue' onClick={() => { if (count < 20) { setcount(count + 1); } }}>+</button>
                                    </div>
                                    <div className="flex gap-[17px]">
                                        <div className="flex gap-[15px] pt-[14px] pl-[21px] pr-4 pb-4 rounded-[5px] bg-[#ebf6ff]  items-center">
                                            <img src={cart_2} alt="cart_2" />
                                            <p className="text-skyblue text-base font-normal font-proxima">Add To Cart</p>
                                        </div>
                                        <img src={heart_2} alt="heart_2" />
                                    </div>
                                </div>
                                <span className='border-b w-full border-light-background mt-[22px] mb-5'></span>
                                <div className="flex gap-[10px]">
                                    <div className="flex gap-3 rounded-[5px] bg-[#385C8E] pt-[14px] pr-[30px] pb-[17px] pl-[34px] items-center">
                                        <img src={facebook_2} alt="facebook_2" />
                                        <p className="text-base font-medium font-poppins text-white">Share on Facebook</p>
                                    </div>
                                    <div className="flex gap-3 rounded-[5px] bg-skyblue pt-[14px] pr-[30px] pb-[17px] pl-[34px] items-center">
                                        <img src={twitter_2} alt="facebook_2" />
                                        <p className="text-base font-medium font-poppins text-white">Share on Twitter</p>
                                    </div>
                                </div>


                            </div>
                        </div>

                        {/* product table */}

                        <div className="flex flex-col pl-8 pt gap-[21px] pt-[34px] pb-[44px] ">
                            <div className="flex gap-[79px] pb-[30px] border-b border-[#E5E8EA] ">
                                <h3 className='text-lg font-poppins font-normal nav cursor-pointer text-primary'>Product Infomation</h3>
                                <h3 className='text-lg font-poppins font-normal nav cursor-pointer text-primary'>Reviews <span>0</span></h3>
                                <h3 className='text-lg font-poppins font-normal nav cursor-pointer text-primary'>Another tab</h3>
                            </div>
                            <div className="flex flex-col gap-[15px] max-w-[760px] w-full">
                                <p className="text-xs font-poppins font-normal  leading-[180%] tracking-[0.5px] text-netural-gray">air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.</p>
                                <p className="text-xs font-poppins font-normal  leading-[180%] tracking-[0.5px] text-netural-gray">air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.</p>
                                <p className="text-xs font-poppins font-normal  leading-[180%] tracking-[0.5px] text-netural-gray">air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.</p>
                            </div>
                        </div>
                    </div>

                    {/* best seller ...... */}
                    <div className="flex flex-col max-w-[287px] w-full gap-[35px]">
                        <h6 className="text-lg font-proxima font-normal rounded-[5px] text-light-gray">BEST SELLER</h6>
                        <div className="flex flex-col border-3 border-light-background rounded-[5px] ">
                            <img src={ProductImg} alt="ProductImg" />
                            <div className="flex mt-[53px] mb-[34px] flex-col gap-3 justify-center ">
                                <div className="flex gap-[5px] justify-center items-center">
                                    <img className='w-3' src={star} alt="star" />
                                    <img className='w-3' src={star} alt="star" />
                                    <img className='w-3' src={star} alt="star" />
                                    <img className='w-3' src={star} alt="star" />
                                    <img className='w-3' src={star1} alt="star1" />
                                </div>
                                <div className="flex items-center justify-center gap-3">
                                    <p className="text-base font-proxima font-normal text-secondary-red ">$499</p>
                                    <p className="text-base font-proxima font-normal text-light-gray "><del>$599</del></p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div >
        </>
    )
}

export default ProductBanner
