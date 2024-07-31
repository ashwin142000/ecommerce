import React from 'react'
import Dashboard from './Dashboard'
import Mainscreen from './Mainscreen'
import { useDispatch,useSelector } from 'react-redux'
import { handleMenuFlag } from '../features/foodSlice'

function Screen() {
    const flag = useSelector(state=>state.menuflag)
    const menuflag= useSelector((state)=>state.menuflag);
    const dispatch = useDispatch();
    function handleMenu(){
        dispatch(handleMenuFlag(menuflag))
    }

  return (
    <>
    {flag?
    <div className="grid grid-cols-4 gap-2 h-screen">
      <Dashboard/>
      <Mainscreen/>
      
    </div>
    : 
    <div className="flex flex-row h-screen">
        <div className='w-14 bg-blue-500 text-center text-2xl font bold'>
      <div className='flex bg-blue-900'>
          <img src='menu.png' className='p-2 w-[40px]' onClick={handleMenu}></img>
       </div>
       </div>
       <div className='w-full'>
      <Mainscreen/>
      </div>
      
    </div>
    }
    </>
  )
}

export default Screen
