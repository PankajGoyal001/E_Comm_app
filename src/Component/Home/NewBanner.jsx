import React from 'react'

const NewBanner = () => {
  return (
    <>
    <div className="container">
        <div className="md:hidden bg-[url('src/assets/Images/DemoShoes.png')] bg-cover bg-no-repeat my-3">
            <div className="flex flex-col gap-4 pl-6 sm:py-20 py-12">
                <h2 className='max-w-[169px] sm:max-w-[300px] w-full sm:text-4xl text-2xl leading-[150%] tracking-[0.5px] font-poppins font-bold text-white'>Recomended Product</h2>
                <p className='max-w-[208px] sm:max-w-[400px] w-full sm:text-lg text-xs font-poppins font-normal leading-[180%] tracking-[0.5px] text-white'>We recommend the best for you</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default NewBanner
