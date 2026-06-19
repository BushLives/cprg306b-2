import React from 'react'

const Navbar = () => {
  return (
    <header className='w-full py-4 bg-slate-800 flex flex-row items-center justify-between'>
        <div className='px-8'>
            <span className='text-slate-100 font-semibold text-lg hover:text-slate-300 hover:underline'>Students</span>
        </div>
        <div className='px-8'>
            <span className='text-slate-100 font-semibold text-lg hover:text-slate-300 hover:underline'>Account</span>
        </div>
    </header>
  )
}

export default Navbar