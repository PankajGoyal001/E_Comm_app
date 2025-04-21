import React from 'react'
import Logo from "../../assets/svg/comm_logo.svg";
import facebook from "../../assets/svg/facebook.svg";
import twitter from "../../assets/svg/twitter.svg";
import footerData from "../../json/footer.json";
import WesternCard from "../../assets/svg/WesternCard.svg";
import MasterCard from "../../assets/svg/MasterCard.svg";
import PaypalCard from "../../assets/svg/PaypalCard.svg";
import visaCard from "../../assets/svg/visaCard.svg";
import visaText from "../../assets/svg/visaText.svg";
import ShapeVisa from "../../assets/svg/ShapeVisa.svg";

const Footer = () => {
  return (
    <>
      <div className="lg:pt-[150px] md:pt-[100px] pt-16 md:pb-[54px] pb-5 bg-light-blue">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-[50px] justify-between">

            <div className="flex max-w-[221px] w-full flex-col gap-4">
              <div className="flex gap-[7px] items-center ">
                <img src={Logo} alt="Logo" />
                <h2 className='text-lg leading-[100%] tracking-normal text-primary-dark font-poppins font-bold'>E-Comm</h2>
              </div>
              <p className="text-xs leading-[100%] font-proxima font-normal text-primary-dark">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.</p>
            </div>

            <div className="flex flex-col max-w-[198px] w-full gap-[19px]">
              <h2 className='text-lg leading-[100%] font-medium font-poppins text-primary-dark'>Follow Us</h2>
              <div className="flex flex-col gap-6">
                <p className="text-xs leading-[100%] font-normal font-proxima text-primary-dark">Since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
                <div className="flex gap-10 ">
                  <img src={facebook} alt="facebook" />
                  <img src={twitter} alt="twitter" />
                </div>
              </div>
            </div>
            <div className="flex flex-col max-w-[148px] w-full gap-[19px]">
              <h2 className='text-lg leading-[100%] font-medium font-poppins text-primary-dark'>Contact Us</h2>
              <p className="text-sm leading-[100%] font-normal font-proxima text-primary-dark">E-Comm , 4578 Marmora Road, Glasgow D04 89GR</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-10 md:mt-[70px] mt-10 items-center ">
            {
              footerData.map((item,index)=>(
                <div key={index} className="flex flex-col gap-[19px]">
                  <h3 className='text-lg leading-[100%] font-poppins font-normal text-primary-dark'>{item.title}</h3>
                  <div className="flex flex-col">
                    <p className="text-sm leading-[100%] font-poppins font-normal text-primary">{item.text1}</p>
                    <p className="text-sm leading-[100%] font-poppins font-normal text-primary">{item.text2}</p>
                    <p className="text-sm leading-[100%] font-poppins font-normal text-primary">{item.text3}</p>
                    <p className="text-sm leading-[100%] font-poppins font-normal text-primary">{item.text4}</p>
                  </div>
                </div>
              ))
            }
          </div>

          <div className="md:flex-row flex flex-col-reverse gap-[10px] justify-between pt-[30px] border-t border-[#F6F7F8] items-center mt-8 md:mt-16">
            <h6 className='text-sm leading-[100% font-normal font-proxima] text-light-gray'>© 2018 Ecommerce theme by www.bisenbaev.com</h6>
            <div className="max-w-[212px] w-full flex gap-5">
              <img src={WesternCard} alt="WesternCard" />
              <img src={MasterCard} alt="MasterCard" />
              <img src={PaypalCard} alt="PaypalCard" />
              <div className="relative">
              <img src={visaCard} alt="visaCard" />
              <img className='absolute top-2 left-0.5' src={visaText} alt="visaText" />
              <img className='absolute top-2 left-0.5' src={ShapeVisa} alt="ShapeVisa" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
