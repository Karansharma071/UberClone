import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios'

const CaptainProtectedWrapper = ({ children }) => {
  const rawToken = localStorage.getItem('token')
  const token = rawToken ? JSON.parse(rawToken) : null
  const { captain, setCaptain } = React.useContext(CaptainDataContext)
  const [isLoading, setIsLoading] = useState(true)
  console.log('token', token)
  const navigate = useNavigate()
  useEffect(() => {
    if (!token) {
      return navigate('/captain-login')
    }
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          const data = response.data
          setCaptain(data.captain)
          setIsLoading(false)
        }
      })
      .catch((err) => {
        console.log(err)
        localStorage.removeItem('token')
        navigate('/captain-login')
      })
  }, [token])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return <>{children}</>
}

export default CaptainProtectedWrapper
