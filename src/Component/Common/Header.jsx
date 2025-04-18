import React, { useState } from 'react'
import arrow_down from "../../assets/svg/arrow_down.svg";
import profile from "../../assets/svg/profile.svg";
import Cart from "../../assets/svg/Cart.svg";
import Mark from "../../assets/svg/Mark.svg";
import search from "../../assets/svg/search-icon.svg";
import logo from "../../assets/Images/logo.png";
import menuData from "../../json/Menu.json";
import { NavLink } from 'react-router-dom';
import Popus from '../Ui/Popus';


const Header = () => {
  const [Click, setClick] = useState(false)
  const [Click1, setClick1] = useState(false)
  const [Rotate, setRotate] = useState(false)
  const [Rotate1, setRotate1] = useState(false)
  return (
    <>
      <div className="container">
        <div className="md:flex justify-between pt-[10px] hidden border-b-2 border-light-border items-center">
          <div className="flex gap-[13px] relative items-center">
            <button onClick={() => setRotate(!Rotate)} className="flex cursor-pointer gap-[5px]">
              <h5 className="text-xl  leading-[100%] font-proxima font-normal tracking-normal text-primary">EN</h5>
              <img className={`${Rotate && "rotate-180"} duration-500 ease-in-out transition-transform`} src={arrow_down} alt="arrow_down" />
            </button>
            {
              Rotate && (<>
                <div className="max-w-40 absolute top-5  w-full h-[100px] bg-black z-10 "></div>
              </>)
            }
            <button onClick={() => setRotate1(!Rotate1)} className="flex cursor-pointer gap-[5.6px] ">
              <h5 className="text-xl  leading-[100%] font-proxima font-normal tracking-normal text-primary-dark">USD</h5>
              <img className={`${Rotate1 && "rotate-180"} duration-500 ease-in-out transition-transform`} src={arrow_down} alt="arrow_down" />
            </button>

          </div>
          <div className="flex items-center gap-[7px] ">
            <div className="flex w-[114px] gap-[7px] items-center">
              <img className='w-5' src={profile} alt="profile" />
              <p className="text-xl leading-[100%] font-proxima font-normal tracking-normal text-primary">My profile</p>
            </div>
            <div className="relative ">
              <img className='px-6 pt-4 pb-[19px] ' src={Cart} alt="cart" />
              <img className='absolute top-1.5 right-[15px] w-5' src={Mark} alt="mark" />
            </div>
            <div className="flex gap-8">
              <p className="text-xl leading-[100%] font-proxima font-normal tracking-normal text-primary">Items</p>
              <p className="text-xl leading-[100%] font-proxima font-normal tracking-normal text-primary">$0.00</p>
            </div>
            <img src={search} alt="search" />
          </div>
        </div>

        {/*  logo ..... */}
        <div className="flex justify-between gap-[50px] w-full md:py-0 py-[10px] items-center">
          <div className={` gap-1.5 flex md:my-[26px] max-w-[134px] w-full items-center ${Click1 ? "hidden " : "block"} `}>
            <img src={logo} alt="logo" />
            <h6 className='text-lg leading-[100%] tracking-normal font-bold font-poppins text-primary-dark'>E-Comm</h6>
          </div>

          {/* menubar ...... */}
          <div className={`md:flex hidden  justify-between relative items-center ${Click1 ? "w-0 " : "max-w-[815.49px]  w-full"}`}>
            {
              menuData.map((item, index) => (
                <NavLink key={index} to={item.path}>
                  <button onMouseMove={() => setClick(index)} onMouseOut={() => setClick()}>
                    <h3 className="text-2xl font-medium font-poppins tracking-normal  hover:cursor-pointer">{item.menu}</h3>
                  </button>
                </NavLink>
              ))
            }

            {Click === 0 && <Popus />}
          </div>

          {/* sidebar ...... */}
          {
            (<>
              <div className="grid gap-5">
                <div className={`flex gap-1.5 md:my-[26px] transition-all duration-300 ${Click1 ? "w-full z-10  opacity-100" : " w-0 -z-50 opacity-0"} items-center `}>
                  <img src={logo} alt="logo" />
                  <h6 className='text-lg leading-[100%] tracking-normal font-bold font-poppins text-white'>E-Comm</h6>
                </div>
              </div>
              <div className={`max-h-1vh md:hidden h-full ${Click1 ? "w-full" : "w-0"} transition-all duration-700 top-0 right-0 absolute bg-gray-400  `}></div>
            </>)
          }
          <button className="grid gap-1.5 md:hidden relative cursor-pointer" onClick={() => setClick1(!Click1)}>
            <p className={`${Click1 ? "-rotate-45 absolute  z-50 " : ""} w-8 border-2 duration-500`} ></p>
            <span className={`${Click1 ? "border-transparent" : ""} w-8 border-2 `} ></span>
            <p className={`${Click1 ? "rotate-45 absolute  z-50" : ""} w-8 border-2 duration-500`}></p>
          </button>
        </div>
      </div>
    </>
  )
}

export default Header
