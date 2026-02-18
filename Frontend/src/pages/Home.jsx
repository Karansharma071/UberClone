import React, { useState } from 'react'
import LocationSearchPanel from '../components/LocationSearchPanel'
import { VscAccount } from 'react-icons/vsc'
import VhichlePanel from '../components/VhichlePanel'

const Home = () => {
  const [pickUp, setPickUp] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false)
  const submitHandler = (e) => {
    e.preventDefault()
    console.log('submit')
  }

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-20 mb-7 absolute left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />
      <div
        onClick={() => {
          setVehiclePanelOpen(false)
          setPanelOpen(false)
        }}
        className="h-screen w-screen"
      >
        <img
          className="h-full w-full object-cover"
          src="https://simonpan.com/wp-content/themes/sp_portfolio/assets/uber-challenge.jpg"
          alt=""
        />
      </div>

      <div
        className={
          panelOpen
            ? 'bg-white h-screen absolute  w-full p-5 top-0'
            : 'bg-white  absolute  w-full p-5 top-[75%]'
        }
      >
        <div className="h-[30%]">
          <h4 className="text-3xl font-semibold">Find a trip</h4>
          <form
            onSubmit={() => {
              submitHandler()
            }}
          >
            <div className="line absolute h-16 w-1 mt-6 left-10 bg-gray-900 rounded-full"></div>
            <input
              onClick={() => setPanelOpen(true)}
              value={pickUp}
              onChange={(e) => setPickUp(e.target.value)}
              className="bg-[#eee] w-full px-12 py-2 rounded-base w-full mt-2 "
              type="text"
              placeholder="Add a pick-up location"
            />
            <input
              onClick={() => setPanelOpen(true)}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="bg-[#eee] px-12 py-2 rounded-base w-full mt-3"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div className="bg-red h-screen">
          <LocationSearchPanel
            setVehiclePanelOpen={setVehiclePanelOpen}
            setPanelOpen={setPanelOpen}
          />
        </div>
      </div>
      <VhichlePanel vehiclePanelOpen={vehiclePanelOpen} />
    </div>
  )
}

export default Home
