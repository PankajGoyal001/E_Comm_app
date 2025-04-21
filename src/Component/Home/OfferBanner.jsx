import React from 'react'
import CountdownTimer from '../Ui/CountdownTimer'

const OfferBanner = () => {
  return (
    <>
    <div className="sm:bg-[url('src/assets/Images/Promotion.png')] bg-[url('src/assets/Images/PromotionImage.png')] bg-cover bg-no-repeat ">
        <div className="container">
          <div className="lg:max-w-[573px] md:max-w-[350px] max-w-[209px] flex flex-col gap-[29px] w-full lg:pt-[259px] md:pt-[200px] lg:pb-[166px] sm:py-20 py-8 md:pb-[100px]">
            <h1 className='lg:text-[64px] sm:text-4xl text-2xl text-white leading-[150%] tracking-[0.5px] font-poppins font-bold'>Super Flash Sale 50% Off</h1>
          <CountdownTimer classname={"sm:hidden block "} targetDate="2025-04-20"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default OfferBanner
