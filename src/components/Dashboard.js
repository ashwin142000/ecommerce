import React from 'react'
import { handleMenuFlag } from '../features/foodSlice'
import { useDispatch,useSelector } from 'react-redux'
import {Link} from "react-router-dom"

function Dashboard() {
    const menuflag= useSelector((state)=>state.menuflag);
    const dispatch = useDispatch();
    function handleMenu(){
        dispatch(handleMenuFlag(menuflag))
    }
  return (

    <div className='bg-blue-500 text-2xl font bold'>
        <div className='flex bg-blue-900'>
          <img src='menu.png' className='p-2 w-[40px]' onClick={handleMenu}></img>
            <button className='p-2 text-white'>Dashboard</button> 
       </div>
       <nav className=''>
        <ul>
          <li>
            <Link to='/dash/trending'><button>Trending</button></Link></li>
        </ul>
        <ul>
          <li><button>Settings</button></li>
        </ul>
       </nav>
      </div>
  )
}

export default Dashboard
