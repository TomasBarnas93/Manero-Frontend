import React from 'react'
import Button from '../../misc/Button'

const SmallShowCase = () => {
  return (
    <div className='text-white font-sans font-medium text-xl p-4 h-[13vh] bg-[#D7DFF3] border-y border-gray-300 lg:text-center'>
        <p>Take 50% off now!</p>
        <Button to="search" text="SHOP NOW" classes="text-xs font-normal px-6 py-3 mt-2"/>
    </div>
  )
}

export default SmallShowCase