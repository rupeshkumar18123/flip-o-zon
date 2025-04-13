
import React from 'react'
import CartIcon from './header_component/CartIcon'
import "./style.css"

function Header() {
  return (
    <div className='header flex items-center justify-between bg-blue-500 p-4 text-white'>
      <div className='text-lg font-bold'>logo or name</div>
      <div className='text-sm'>location</div>
      <div className='flex-1 mx-4'>
      <input 
        type="text" 
        placeholder="Search" 
        className='w-full p-2 rounded border border-gray-300'
      />
      </div>
      <div className='text-sm'>user name or account</div>
      <div className='text-sm'>order or return</div>
      <div>
      <CartIcon />
      </div>
    </div>
    )
}

export default Header