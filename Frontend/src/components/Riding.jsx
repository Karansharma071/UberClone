import React from 'react'
import { IoLocation } from 'react-icons/io5'
import { RiSecurePaymentLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { IoIosHome } from 'react-icons/io'

const Riding = () => {
  return (
    <div className="h-screen relative">
      <div className="h-1/2">
        <div className=" w-10 h-10 bg-[#fdfdfd] rounded-full absolute top-5 right-2 flex justify-items-center justify-center items-center ">
          <Link to="/home">
            {' '}
            <IoIosHome />{' '}
          </Link>
        </div>
        <img
          className="h-full w-full object-cover"
          src="https://simonpan.com/wp-content/themes/sp_portfolio/assets/uber-challenge.jpg"
          alt=""
        />
      </div>
      <div className="h-1/2 p-5">
        <div className="flex flex-row gap-5  border-b  p-3 ">
          <div className="flex justify-items-center justify-center items-center">
            <IoLocation />
          </div>
          <div className="flex flex-col">
            <div className="text-xl">562/11A</div>
            <div>Kakariya tabab, bhopal</div>
          </div>
        </div>
        <div className="flex flex-row gap-5  p-3">
          <div className="flex justify-items-center justify-center items-center">
            <RiSecurePaymentLine />
          </div>
          <div className="flex flex-col">
            <div className="text-xl">562/11A</div>
            <div>Cash </div>
          </div>
        </div>

        <button className="bg-[#50d71e] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base">
          Confirm Booking
        </button>
      </div>
    </div>
  )
}

export default Riding
