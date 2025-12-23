import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between bg p-5 items-center w-full'>
        <div className="logo text-3xl">DecimalTask</div>
        <div className="links bg-black text-white rounded-2xl p-3">Home</div>
    </div>
  )
}

export default Navbar