import React from 'react'
import { Link } from 'react-router-dom'

const AdidasShoes = ({ titleText, detailText, shopText, imageText, title, detail, shop, mainText, images, classname }) => {
    return (
        <>
            <div className={`flex  relative ${mainText}`}>
                <div className={`flex flex-col  ${classname} `}>
                    <h1 className={`text-white font-poppins font-medium ${titleText}`}>{title}</h1>
                    <p className={`font-normal font-poppins text-white ${detailText}`}>{detail}</p>
                    <Link to={"/"}>
                        <button className={`border-b-[3px] border-[#fff] font-semibold font-poppins hover:cursor-pointer text-[#fff] ${shopText} `}>{shop}</button>
                    </Link>
                </div>
                <img className={`${imageText}`} src={`src/assets/Images/${images}`} alt="shoes" />
            </div>
        </>
    )
}

export default AdidasShoes
