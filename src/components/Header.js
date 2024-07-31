import React from 'react';
import { handleFlag } from '../features/foodSlice';
import { useDispatch ,useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {
    const flag = useSelector(state=>state.searchflag)
    const dispatch = useDispatch();
    function handleSearch(){
        dispatch(handleFlag(flag));
        
    }
  return (
    <div className='w-full h-[60px] bg-gray-800'>
      <div className='grid grid-cols-8'>
        <div className='col-span-4'>
          <Link to='/'>
          <img src="logo.jpg" alt="" className='p-2 w-[70px]' />
          </Link>
          </div>
        <div className='p-2 m-2'>
          <Link to='/search'>
        <button className='hover:text-blue-500 mr-1 text-white' onClick={handleSearch}>Search</button>
        </Link>
        </div>
        <div className='p-2 m-2'>
          <Link to='/signin'>
        <button className='hover:text-blue-500 mr-1 text-white'>Sign In</button>
        </Link>
        </div>
        <div className='p-2 m-2'>
          <Link to='/signout'>
        <button className='hover:text-blue-500 mr-1 text-white'>Sign Out</button>
        </Link>
        </div>
        <div className='p-2 m-2'>
          <Link to='/cart'> 
        <button className='hover:text-blue-500 mr-1 text-white'>Cart</button>
        </Link>
        </div>
        </div>
      
    </div>
  )
}

export default Header
