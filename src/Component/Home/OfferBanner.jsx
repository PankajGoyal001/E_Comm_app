import React, { useEffect } from 'react'
import CountdownTimer from '../Ui/CountdownTimer'
import Aos from "aos";
import "aos/dist/aos.css";

const OfferBanner = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
      offset: 0,  
    });
  
    const handleScroll = () => {
      Aos.refresh();
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div  data-aos="fade-up" className="sm:bg-[url('src/assets/Images/Promotion.png')] bg-[url('src/assets/Images/PromotionImage.png')] bg-cover bg-no-repeat ">
        <div className="container">
          <div data-aos="fade-right" className="lg:max-w-[573px] md:max-w-[350px] max-w-[209px] flex flex-col gap-[29px] w-full lg:pt-[259px] md:pt-[200px] lg:pb-[166px] sm:py-20 py-8 md:pb-[100px]">
            <h1 className='lg:text-[64px] sm:text-4xl text-2xl text-white leading-[150%] tracking-[0.5px] font-poppins font-bold'>Super Flash Sale 50% Off</h1>
            <CountdownTimer classname={"sm:hidden block "} targetDate="2025-04-24" />
          </div>  
        </div>
      </div>
    </>
  )
}

export default OfferBanner
