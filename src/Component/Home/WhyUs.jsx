import React from 'react'
import shipping from "../../assets/svg/shipping.svg";
import Refund from "../../assets/svg/Refund.svg";
import support from "../../assets/svg/support.svg";


const WhyUs = () => {
  return (
    <>
    <div className="pt-[49px] hidden     md:block pb-[60px]">
        <div className="container">
            <div className="flex max-w-[1091px] justify-self-center w-full text-center justify-between items-center ">
                <div className="flex flex-col gap-3 max-w-[198px] w-full justify-center">
                    <div className="flex flex-col  items-center gap-[35px]">
                        <img src={shipping} alt="shipping" />
                        <p className="text-primary-dark text-[27px] leading-[100%] font-medium font-poppins">FREE SHIPPING</p>
                    </div>
                    <p className="text-lg leading-[100%] font-normal text-primary-dark text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>

                <div className="flex flex-col gap-3 max-w-[193px] w-full justify-center">
                    <div className="flex flex-col  items-center gap-[35px]">
                        <img src={Refund} alt="shipping" />
                        <p className="text-primary-dark text-[27px] leading-[100%] font-medium font-poppins">100% REFUND</p>
                    </div>
                    <p className="text-lg leading-[100%] font-normal text-primary-dark text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>

                <div className="flex flex-col gap-3 max-w-[193px] w-full justify-center">
                    <div className="flex flex-col  items-center gap-[35px]">
                        <img src={support} alt="shipping" />
                        <p className="text-primary-dark text-[27px] leading-[100%] font-medium font-poppins">SUPPORT 24/7</p>
                    </div>
                    <p className="text-lg leading-[100%] font-normal text-primary-dark text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default WhyUs
