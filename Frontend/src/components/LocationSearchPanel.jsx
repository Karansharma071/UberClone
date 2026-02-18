import React from 'react'
import { CiLocationOn } from 'react-icons/ci'

const LocationSearchPanel = (props) => {
  console.log('props', props)
  let locations = [
    "33B, Near Kapoor's cafe, sheryians coding school, Bhopal",
    "24B, Near sharam's cafe, sheryians coding school, Bhopal",
    "54B, Near malhotra's cafe, sheryians coding school, Bhopal",
    "88B, Near singhani's cafe, sheryians coding school, Bhopal",
    "55B, Near Kapoor's cafe, sheryians coding school, Bhopal",
  ]

  return locations.map((item) => {
    return (
      <div
        key={item}
        onClick={() => {
          props.setVehiclePanelOpen(true)
          props.setPanelOpen(false)
        }}
        className="flex  gap-2 mb-2 items-center justify-center text-lg"
      >
        <div className="h-15 w-15 p-3 bg-gray-50 rounded">
          <CiLocationOn />
        </div>
        <h4>{item} </h4>
      </div>
    )
  })
}

export default LocationSearchPanel
