import React from 'react'
import { Link } from 'react-router-dom'
import FlashCard from '../Cards/FlashCard'

const FlashSale = ({ Heading, Data }) => {
    return (
        <>
            <div className="container">
                <div className="flex  md:hidden py-3 flex-col gap-3">
                    <div className="flex justify-between">
                        <h5 className='text-sm leading-[150%] tracking-[0.5px] font-poppins font-bold text-netural-blue'>{Heading}</h5>
                        <Link to={"/"}>
                            <button className='text-sm leading-[150%] tracking-[0.5px] font-poppins font-bold text-primary-blue'>See More</button>
                        </Link>
                    </div>
                    <div className="flex gap-4 overflow-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] justify-between ">
                        {
                            Data.map((item, index) => (
                                <FlashCard key={index}
                                    Images={item.Images}
                                    Title={item.Title}
                                    Price={item.Price}
                                    DeletePrice={item.DeletePrice}
                                    Offer={item.Offer}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default FlashSale
