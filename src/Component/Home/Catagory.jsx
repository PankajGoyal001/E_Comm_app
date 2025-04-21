import React from 'react'
import catagoryData from "../../json/Catagory.json";
import { Link } from 'react-router-dom';

const Catagory = () => {
  return (
    <>
    <div className="container">
        <div className="flex md:hidden pt-6 pb-3 flex-col gap-3">
            <div className="flex justify-between">
                <h5 className='text-sm leading-[150%] tracking-[0.5px] font-poppins font-bold text-netural-blue'>Category</h5>
                <Link to={"/"}>
                <button className='text-sm leading-[150%] tracking-[0.5px] font-poppins font-bold text-primary-blue'>More Category</button>
                </Link>
            </div>
            <div className="flex overflow-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] justify-between gap-3">
                {
                    catagoryData.map((item,index)=>(
                        <div key={index} className="flex flex-col max-w-[70px] w-full  gap-2 items-center">
                            <div className="w-[70px] rounded-full p-6 border border-[#EBF0FF]">
                            <img className='w-6 ' src={`src/assets/svg/${item.images}`} alt="" />
                            </div>
                            <p className="text-[10px] text-netural-gray font-poppins font-normal leading-[150%] tracking-[0.5px]">{item.title}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
    </>
  )
}

export default Catagory
