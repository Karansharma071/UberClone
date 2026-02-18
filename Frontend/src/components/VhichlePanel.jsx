import React, { useState } from 'react'
import { VscAccount } from 'react-icons/vsc'
import ConfirmRide from './ConfirmRide'

const VhichlePanel = (props) => {
  const [confirmRide, setConfirmRide] = useState(false)
  console.log('vehiclePanelOpen', props)
  return (
    <div>
      <div
        className={
          props.vehiclePanelOpen
            ? 'bg-white h-screen absolute  w-full p-5 top-[40%]'
            : 'bg-white  absolute  w-full p-5 top-[100%]'
        }
      >
        <div className="  text-xl font-bold">Chose a vehicle</div>

        <div
          onClick={() => setConfirmRide(true)}
          className="flex gap-4 my-4 py-2 hover:bg-gray-200 border-[2px] border-black  rounded-lg items-center justify-center"
        >
          <div className="w-[15%] ml-2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEfDs3vXb_mzc6TD3ZYYnaUDEllO41HQkmg&s"
              alt=""
            />
          </div>
          <div
            className="w-[56%] flex flex-col  items-start justify-start
              "
          >
            <h2 className="w-[56%] flex flex-row gap-3 items-start justify-start content-center items-center  ">
              <div className="font-semibold">UberGo</div>
              <div>
                <VscAccount />
              </div>
            </h2>
            <h3>2 min away 15:24</h3>
            <h4 className="font-thin">Affordable, Compact rides</h4>
          </div>
          <div className="w-[17%] font-medium mr-2">$193.20 </div>
        </div>
        <div
          onClick={() => setConfirmRide(true)}
          className="flex gap-4  my-4  py-2 hover:bg-gray-200 border-[2px] border-black  rounded-lg items-center justify-center"
        >
          <div className="w-[15%] ml-2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVjRAoYVgWlss_HyVwOUPTcZdzRvnPNNUg7w&s"
              alt=""
            />
          </div>
          <div
            className="w-[56%] flex flex-col  items-start justify-start
              "
          >
            <h2 className="w-[56%] flex flex-row gap-3 items-start justify-start content-center items-center  ">
              <div className="font-semibold">UberGo</div>
              <div>
                <VscAccount />
              </div>
            </h2>
            <h3>2 min away 15:24</h3>
            <h4 className="font-thin">Affordable, Compact rides</h4>
          </div>
          <div className="w-[17%] font-medium mr-2">$193.20 </div>
        </div>
        <div
          onClick={() => setConfirmRide(true)}
          className="flex gap-4  my-4  py-2 hover:bg-gray-00 border-[2px] border-black  rounded-lg items-center justify-center"
        >
          <div className="w-[15%] ml-2">
            <img
              src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8xZGRiOGM1Ni0wMjA0LTRjZTQtODFjZS01NmExMWEwN2ZlOTgucG5n"
              alt=""
            />
          </div>
          <div
            className="w-[56%] flex flex-col  items-start justify-start
              "
          >
            <h2 className="w-[56%] flex flex-row gap-3 items-start justify-start content-center items-center  ">
              <div className="font-semibold">UberGo</div>
              <div>
                <VscAccount />
              </div>
            </h2>
            <h3>2 min away 15:24</h3>
            <h4 className="font-thin">Affordable, Compact rides</h4>
          </div>
          <div className="w-[17%] font-medium mr-2">$193.20 </div>
        </div>
      </div>

      <div
        className={
          confirmRide
            ? 'bg-white h-screen absolute  w-full p-5 top-[40%]'
            : 'bg-white  absolute  w-full p-5 top-[100%]'
        }
      >
        {' '}
        <ConfirmRide />
      </div>
    </div>
  )
}

export default VhichlePanel
