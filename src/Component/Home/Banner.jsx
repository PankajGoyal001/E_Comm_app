import React from 'react'

const Banner = () => {
    return (
        <>
            <div className="relative mb-[330px]">
                <div className="container ">
                    <div className="max-w-[1252px] w-full flex absolute bg-[#f6f6f6] rounded-[5px] top-[-90px] ">
                        <div className=" relativer">
                            <img className='rounded-[5px]' src="src/assets/Images/bannerimg1.png" alt="bannerimg1.png" />
                            <p className="absolute top-[29px] left-[52px] max-w-[202px] w-full text-xl font-bold text-netural-blue tracking-[0.5px]">FS - QUILTED MAXI CROSS BAG</p>
                            <div className="flex absolute bottom-[64px] left-[52px] gap-2 items-center">
                                <p className="text-lg leading-[150%] tracking-[0.5px] font-normal font-poppins text-netural-gray"><del>$534,33</del></p>
                                <p className="text-lg leading-[150%] tracking-[0.5px] font-bold font-poppins text-primary-red">24% Off</p>
                            </div>
                            <p className="absolute bottom-[41px] left-[278px] text-primary-blue text-3xl leading-[180%] font-Raleway font-bold tracking-[0.5px]">$299,43</p>
                        </div>

                        <div className="relative">
                            <img className='rounded-[5px] relativer' src="src/assets/Images/bannerimg2.png" alt="bannerimg1.png" />
                            <p className="absolute top-[25px] left-[50px] w-[178px] text-xl font-bold text-netural-blue tracking-[0.5px]">FS - Nike Air Max 270 React...</p>
                            <div className="flex absolute bottom-[31px] left-[145px] gap-2 items-center">
                                <p className="text-lg leading-[150%] tracking-[0.5px] font-normal font-poppins text-netural-gray"><del>$534,33</del></p>
                                <p className="text-lg leading-[150%] tracking-[0.5px] font-bold font-poppins text-primary-red">24% Off</p>
                            </div>
                            <p className="absolute top-[20px] right-[35px] text-primary-blue text-3xl leading-[180%] font-Raleway font-bold tracking-[0.5px]">$299,43</p>
                        </div>

                        <div className="relative">
                            <img className='rounded-[5px] relativer' src="src/assets/Images/bannerimg3.png" alt="bannerimg1.png" />
                            <p className="absolute top-[32px] left-[52.63px] w-[172px] text-xl font-bold text-netural-blue tracking-[0.5px]">FS - Nike Air Max 270 React...</p>
                            <div className="flex absolute top-[113px] left-[53px] gap-2 items-center">
                                <p className="text-lg leading-[150%] tracking-[0.5px] font-normal font-poppins text-netural-gray"><del>$534,33</del></p>
                                <p className="text-lg leading-[150%] tracking-[0.5px] font-bold font-poppins text-primary-red">24% Off</p>
                            </div>
                            <p className="absolute bottom-[14px] right-[33px] text-primary-blue text-3xl leading-[180%] font-Raleway font-bold tracking-[0.5px]">$299,43</p>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
