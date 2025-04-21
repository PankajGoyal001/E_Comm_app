import React from 'react'

const FlashCard = ({Images ,Title ,Price , DeletePrice , Offer}) => {
  return (
    <>
    <div className="flex flex-col w-[141px]  gap-2 p-3">
        <img className='ma-w-[109px] w-full' src={`src/assets/Images/${Images}`} alt="image" />
        <div className="max-w-[109px] w-full flex flex-col gap-2">
            <h6 className='w-[109px] text-xs leading-[150%] tracking-[0.5px] font-bold font-poppins text-netural-blue'>{Title}</h6>
            <p className=" text-xs leading-[180%] tracking-[0.5px] font-poppins font-bold text-primary-blue">{Price}</p>
            <div className="flex gap-2">
                <p className="text-[10px] font-normal leading-[150%] tracking-[0.5px] text-netural-gray font-poppins"><del>{DeletePrice}</del></p>
                <p className="text-[10px] font-bold leading-[150%] tracking-[0.5px] text-primary-red font-poppins">{Offer}</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default FlashCard
