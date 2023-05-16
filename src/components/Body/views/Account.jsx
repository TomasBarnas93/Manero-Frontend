import React from 'react'
import Login from './Login'
import Register from './Register'

const Account = () => {
  return (
    <main>

        {/* Here we will redirect the user to login if they are not logged in. */}
        {/* <Login/> */}

        <Register />

    </main>


  )
}

export default Account