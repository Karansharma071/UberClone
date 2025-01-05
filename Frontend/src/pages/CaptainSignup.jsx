import { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainSignup = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState({})
  const submitHandler = (e) => {
    e.preventDefault()
    setUserData({
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
    })
    console.log(firstName, lastName, email, password, userData)
    setFirstName('')
    setLastName('')
    setEmail('')
    setPassword('')
  }
  return (
    <div className="p-7 h-screen flex justify-between flex-col ">
      <div>
        {' '}
        <img
          className="w-20 mb-6"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <form onSubmit={submitHandler} action="">
          <h3 className="text-base font-lg mb-2">Whats you name</h3>
          <div className="flex gap-4 mb-6">
            <input
              className="bg-[#eeeeee]  rounded px-4 py-2 border w-1/2 text-base placeholder:text-sm "
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              placeholder="first Name"
            />
            <input
              className="bg-[#eeeeee]  rounded px-4 py-2 border w-1/2 text-base placeholder:text-sm "
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="last Name"
            />
          </div>
          <h3 className="text-base font-lg mb-2">Whats you email</h3>
          <input
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm "
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
          />

          <h3 className="text-base font-lg">Enter Password</h3>
          <input
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm "
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter Password"
          />
          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base ">
            Signup
          </button>
          <p className="text-center">
            Alredy have an account?
            <Link to="/captain-login" className="text-blue-600">
              Login here
            </Link>
          </p>
        </form>
      </div>
      <div>
        <p className="text-[12px]">
          By proceeding, you consent to all privacy policies.
        </p>
      </div>
    </div>
  )
}

export default CaptainSignup
