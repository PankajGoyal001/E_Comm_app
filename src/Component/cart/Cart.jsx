import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import CartData from "../../json/Cart.json";
import Popupcart from '../Cards/Popupcart';

const Cart = () => {
    const [isCheck, setCheck] = useState(false)
    const [count, setCount] = useState(1)
    const [iscount, setisCount] = useState(1)
    const [remove, setRemove] = useState(false)
    return (
        <>
            <div className="">
                <div className="container">
                    {/* header ....... */}
                    <div className="sm:flex hidden md:my-[47px] my-[35px] py-3.5 bg-light-background justify-center">
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

                    {/* Banner */}
                    <div className="md:flex hidden items-center pb-[23px] border-b-2 border-light-background justify-between ">
                        <h5 className='pl-[50px] text-xl font-medium font-poppins text-primary-dark'>PRODUCT</h5>
                        <div className="flex justify-between max-w-[438px] w-full">
                            <h6 className='text-xl font-medium font-poppins text-primary-dark'>PRICE</h6>
                            <h6 className='text-xl font-medium font-poppins text-primary-dark'>QTY</h6>
                            <h6 className='text-xl font-medium font-poppins text-primary-dark'>UNIT PRICE</h6>
                        </div>
                    </div>

                    <div className="flex flex-col ">
                        {
                            CartData.main.map((item, index) => (
                                <div key={index} className={`md:flex-row flex gap-5 md:pb-[55px] justify-between md:items-center md:pt-[63px] py-10 border-b-2 border-light-background ${remove ? "hidden" : ""}`}>
                                    <div className="md:flex-row flex flex-col items-center relative group gap-5 sm:gap-7">
                                        <img className='max-w-[138px] -z-10 rounded w-full' src={`src/assets/Images/${item.Images}`} alt="images" />
                                        <img onClick={() => setRemove(!remove)} className='absolute -top-3 -left-3 hidden cursor-pointer group-hover:block' src={`src/assets/svg/${item.del}`} alt="" />
                                        <p className="sm:text-lg text-base -z-10 font-poppins text-nowrap font-normal">{item.Title}</p>
                                    </div>
                                    <div className="md:flex-row flex flex-col-reverse items-center justify-between lg:max-w-[438px] max-w-[300px] w-full">
                                        {
                                            index === 0 ? (<>
                                                <h6 className={`text-xl font-medium font-poppins text-primary-dark ${count}`}>{item.Price * count}</h6>
                                                <div className="flex cursor-pointer justify-between bg-light-background rounded sm:py-3 py-1.5 sm:px-[18px] px-3 max-w-[128px] w-full items-center">
                                                    <p onClick={() => setCount(count > 1 ? count - 1 : 1)} > <img src={`src/assets/svg/${item.subtract}`} alt="subtract" /></p>
                                                    <p className="text-lg font-normal font-proxima text-primary">{count}</p>
                                                    <p onClick={() => setCount(count < 20 ? count + 1 : 20)}> <img src={`src/assets/svg/${item.Add}`} alt="" /></p>
                                                </div>
                                            </>) : (<>
                                                <h6 className={`text-xl font-medium font-poppins text-primary-dark ${count}`}>{item.Price * iscount}</h6>

                                                <div className="flex cursor-pointer justify-between bg-light-background rounded sm:py-3 py-1.5 sm:px-[18px] px-3 max-w-[128px] w-full items-center">
                                                    <p onClick={() => setisCount(iscount > 1 ? iscount - 1 : 1)} > <img src={`src/assets/svg/${item.subtract}`} alt="subtract" /></p>
                                                    <p className="text-lg font-normal font-proxima text-primary">{iscount}</p>
                                                    <p onClick={() => setisCount(iscount < 20 ? iscount + 1 : 20)} > <img src={`src/assets/svg/${item.Add}`} alt="" /></p>
                                                </div>
                                            </>)
                                        }
                                        <h6 className='text-xl font-medium font-poppins text-primary-dark'>{item.Unitprice}</h6>
                                    </div>

                                </div>
                            ))
                        }
                    </div>

                    <div className="md:flex-row flex flex-col-reverse gap-10 justify-between md:mt-[90px] mt-[70px] md:mb-[156px] mb-[120px] items-center">
                        <div className="flex md:max-w-[370px] w-full h-[60px]">
                            <input className='w-full py-[19px_17px] pl-5 outline-none border-2 border-primary-border' type="text" placeholder='Voucher code' />
                            <button className='px-[21px] py-[18px_14px] bg-skyblue rounded-r text-white text-lg font-medium font-poppins'>Redeem</button>
                        </div>
                        <div className="lg:max-w-[377px]  md:max-w-[277px] w-full flex flex-col gap-6">
                            {
                                CartData.check.map((item, index) => (
                                    <div key={index}>
                                        <div className="flex justify-between">
                                            <h6 className='text-lg font-normal font-poppins text-primary'>{item.title}</h6>
                                            <p className="text-lg font-normal font-poppins text-primary">{item.data}</p>
                                        </div>
                                        <div className="flex pt-1 justify-between ">
                                            <h5 className='text-3xl font-poppins font-medium text-primary-dark'>{item.total}</h5>
                                            <p className="text-3xl font-poppins font-medium text-primary-dark">{item.price}</p>
                                        </div>
                                    </div>
                                ))
                            }
                            <button  onClick={() => setCheck(true)} className='py-4 transition-transform hover:scale-[0.9] ease-in-out duration-500 cursor-pointer bg-skyblue rounded  text-white text-lg font-medium font-poppins'>Check out</button>

                             {isCheck && (
                    <>
                      <div onClick={()=>setCheck(false)}  className="fixed inset-0  bg-[#2222224D]  z-40"></div>
                      <div className="fixed  inset-0 flex   m-auto  justify-center items-center z-50">
                        <Popupcart varient={true} data={()=>setCheck(false)}/>
                      </div>
                    </>
                  )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart


// import { useLocation } from 'react-router-dom';

// function cart() {
//   const location = useLocation();
//   console.log(location)
  
//   return (
//       <div>
//       <h1>cart Page</h1>
//       <p>Current path: {location.pathname}</p>
//     </div>
//   );
// }

// export default cart