import React from 'react'
import PopusData from "../../json/Popus.json";

const Popus = () => {
    return (
        <>
            <div className="w-[1029px] border-t border-[#F1F3F4] pt-[37px] pb-6 pl-[84px] pr-8 bg-white top-12 -left-60 absolute">
                <div className="flex gap-[59px]">
                    <div className="flex flex-col gap-[13px]">
                        {
                            PopusData.Data.map((item, index) => (
                                <div key={index} className='' >
                                    <h4 className='text-[22px] font-poppins font-medium text-light-gray'>{item.heading}</h4>
                                    <div className="grid gap-[45px] grid-cols-2">
                                        <p className="text-base font-normal font-poppins text-primary">{item.text}</p>
                                        <p className="text-base font-normal font-poppins text-primary">{item.text}</p> 
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="flex gap-[77px]">
                    <div className="flex flex-col gap-[13px]">
                        {
                            PopusData.Data1.map((item, index) => (
                                <div key={index} className='' >
                                    <h4 className='text-[22px] font-poppins font-medium text-light-gray'>{item.heading}</h4>
                                    <div className="grid gap-[45px] grid-cols-2">
                                        <p className="text-base font-normal font-poppins text-primary">{item.text}</p>
                                        <p className="text-base font-normal font-poppins text-primary">{item.text}</p> 
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="flex flex-col gap-[13px]">
                        {
                            PopusData.Data.map((item, index) => (
                                <div key={index} className='' >
                                    <h4 className='text-[22px] font-poppins font-medium text-light-gray'>{item.heading}</h4>
                                        <p className="text-base font-normal font-poppins text-primary">{item.text}</p>
                                </div>
                            ))
                        }
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Popus
