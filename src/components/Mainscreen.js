import React from 'react'
import { Outlet } from 'react-router'

function Mainscreen() {
  return (
    <div className='col-span-3 rounded-lg'>
        
        <Outlet/>
      </div>
  )
}

export default Mainscreen
