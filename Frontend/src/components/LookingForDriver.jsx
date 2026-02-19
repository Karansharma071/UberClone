import React from 'react'
import { IoLocation } from 'react-icons/io5'
import { RiSecurePaymentLine } from 'react-icons/ri'
const LookingForDriver = () => {
  return (
    <div>
      <div>
        <div className="font-bold text-2xl">looking for a driver</div>
        <div className="w-100 flex justify-items-center justify-center ">
          <img
            className="h-20 w-100 m-5"
            src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8xZGRiOGM1Ni0wMjA0LTRjZTQtODFjZS01NmExMWEwN2ZlOTgucG5n"
            alt=""
          />
        </div>

        <div className="flex flex-row gap-5 border-b p-3 ">
          <div className="flex justify-items-center justify-center items-center">
            <IoLocation />
          </div>
          <div className="flex flex-col">
            <div className="text-xl">562/11A</div>
            <div>Kakariya tabab, bhopal</div>
          </div>
        </div>
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

        <button className="bg-[#50d71e]  text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base">
          Confirm Booking
        </button>
      </div>
    </div>
  )
}

export default LookingForDriver
