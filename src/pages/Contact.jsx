import React from 'react'
import ContactImg from "../assets/Images/ContactImg.png";
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="flex mt-[47px] py-3.5 bg-light-background justify-center">
          <div className="flex items-center gap-[9px]">
            <Link to={"/"}>
              <h3 className='text-lg font-normal leading-[100%] font-proxima text-skyblue'>Home</h3>
            </Link>
            <p className='text-sm font-normal leading-[100%] font-proxima text-light-gray'>/</p>
            <h3 className='text-lg font-normal leading-[100%] font-proxima text-primary'>Contact Us</h3>
          </div>
        </div>

        <div className="flex gap-[50px] my-[134px] shadow-md items-center">
          <div className="max-w-[626px] w-full relative h-[715px] bg-primary-blue">
            <img className='absolute top-[21px] right-[100px]' src={ContactImg} alt="ContactImg" />
            <span className='max-w-[130px] w-full h-[133px] rounded-full bg-primary-blue top-[291px] -right-5 absolute'></span>
            <p className="absolute top-[89px] right-[137px] max-w-[156px] w-full text-[40px] text-white font-semibold font-Raleway">get in touch</p>
            <div className="flex flex-col max-w-[234px] gap-[23px] top-[318px] right-[60px] absolute">
              <p className="text-sm font-medium font-Raleway text-white">contact@e-comm.ng</p>
              <p className="text-sm font-medium font-Raleway text-white">+234 4556 6665 34</p>
              <p className="text-sm font-medium font-Raleway text-white">20 Prince Hakerem Lekki Phase 1, Lagos.</p>
            </div>
          </div>
          <div className="flex flex-col w-full gap-[22px]">
            <div className="flex flex-col max-w-[510px] w-full gap-[7px]">
              <label htmlFor="">Fullname</label>
              <input className='border w-full outline-[#33A0FF] pt-[25px] border-[#969393] rounded-r-[3px] pb-5 pl-7' placeholder='James Doe' type="text" />
            </div>
            <div className="flex flex-col max-w-[510px] w-full gap-[7px]">
              <label htmlFor="">Email</label>
              <input className='border w-full pt-[25px] outline-[#33A0FF] border-[#969393] rounded-r-[3px] pb-5 pl-7' placeholder='jamesdoe@gmail.com' type="text" />
            </div>
            <div className="flex flex-col max-w-[510px] w-full gap-[7px]">
              <label htmlFor="">Message</label>
              <textarea className='border w-full pt-[40px] outline-[#33A0FF] border-[#969393] rounded-r-[3px] pb-[165px] pl-7' placeholder='Type your message' type="text" />
            </div>
          </div>
        </div>

        <div className="mb-[134px]">
          <div className="border-2 border-[#BCDDFE] rounded-[2px] max-w-[635px] w-full flex justify-between justify-self-center">
            <input className='outline-none pl-[21px] normalText3 text-[#262626]' type="text" placeholder='Search query...' />
            <button className="px-[27px] py-[17px] cursor-pointer bg-[#40BFFF] text-xl leading-[100%] text-[#fff] tracking-normal font-poppins_semibold ">Search</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact


// import { useNavigate } from 'react-router-dom';

// function Contact() {
//   const navigate = useNavigate();

//   const goTocart = () => {
//     navigate('/cart');
//   };

//   return (
//     <div>
//       <h1>Home Page</h1>
//       <button onClick={goTocart}>Go to cart Page</button>
//     </div>
//   );
// }

// export default Contact