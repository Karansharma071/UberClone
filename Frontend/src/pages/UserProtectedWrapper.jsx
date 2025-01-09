import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import axios from 'axios'

const UserProtectedWrapper = ({ children }) => {
  const rawToken = localStorage.getItem('token')
  const token = rawToken ? JSON.parse(rawToken) : null
  const { user, setUser } = React.useContext(UserContext)
  const [isLoading, setIsLoading] = useState(true)
  console.log('token', token)
  const navigate = useNavigate()
  useEffect(() => {
    if (!token) {
      return navigate('/login')
    }
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          const data = response.data
          setUser(data.user)
          setIsLoading(false)
        }
      })
      .catch((err) => {
        console.log(err)
        localStorage.removeItem('token')
        navigate('/login')
      })
  }, [token])

  if (isLoading) {
    return <div>Loading...</div>
  }
  return <>{children}</>
}

export default UserProtectedWrapper
