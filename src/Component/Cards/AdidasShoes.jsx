import React from 'react'
import { Link } from 'react-router-dom'

const AdidasShoes = ({ titleText, detailText, shopText, imageText, title, detail, shop, images, classname }) => {
    return (
        <>
            <div className="flex relative">
                <div className={`flex flex-col max-w-[592px] py-[163px] w-full ${classname} `}>
                    <h1 className={`text-[55px] pb-[23px] text-white font-poppins font-medium ${titleText}`}>{title}</h1>
                    <p className={`text-2xl font-normal pb-3 font-poppins text-white ${detailText}`}>{detail}</p>
                    <Link to={"/"}>
                        <button className={`border-b-[3px] pb-1 border-[#fff] text-xl font-semibold font-poppins hover:cursor-pointer text-[#fff] ${shopText} `}>{shop}</button>
                    </Link>
                </div>
                <img className={`absolute right-[-120px] top-[-95px] ${imageText}`} src={`src/assets/Images/${images}`} alt="shoes" />
            </div>
        </>
    )
}

export default AdidasShoes
