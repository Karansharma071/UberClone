import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

const UserLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState({})
  const navigate = useNavigate()
  const { user, setUser } = React.useContext(UserContext)
  console.log('user', user)
  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/login`,
        {
          email: email,
          password: password,
        },
      )

      if (response.status === 200) {
        const data = response.data
        setUser(data.user)
        localStorage.setItem('token', JSON.stringify(data.token))
        console.log('data', data)

        navigate('/home')
      }
    } catch (error) {
      console.log(error)
    }
    // setUserData({ email: email, password: password })
    setEmail('')
    setPassword('')
  }
  return (
    <div className="p-7 h-screen flex justify-between flex-col ">
      <div>
        {' '}
        <img
          className="w-20 mb-7"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <form onSubmit={submitHandler} action="">
          <h3 className="text-lg font-medium mb-2">Whats you email</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base "
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
          />
          <h3 className="text-lg font-medium">Enter Password</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base "
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter Password"
          />
          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base ">
            Login
          </button>
          <p className="text-center">
            New here?
            <Link to="/signup" className="text-blue-600">
              Create new Account
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link
          to="/captain-login"
          className="bg-[#10b461] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base "
        >
          Sign in as captain
        </Link>
      </div>
    </div>
  )
}

export default UserLogin
