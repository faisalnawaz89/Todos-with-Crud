import React, { useState } from 'react'

const HambergerMenu = () => {

  const [hamburger, setHamburger] = useState(false)

  return (
    <div className='w-full'>
        <button onClick={()=>setHamburger(!hamburger)} className='fixed right-[0] bg-black text-white py-2 px-3 rounded-md mt-2 mr-2 cursor-pointer'>Menu</button>
        <div className={`relative w-[300px] bg-green-600 min-h-screen transition-all ease-in ${hamburger ? 'w-[300px]':'w-[0px]'}`}>
            <ul className='flex flex-col items-center justify-center h-[100vh]'>
                <li><a className="text-3xl text-white font-medium hover:bg-red-400 py-2 px-2 mb-2 rounded-md" href="#">Home</a></li>
                <li><a className="text-3xl text-white font-medium hover:bg-red-400 py-2 px-2 mb-2 rounded-md" rounded-md href="#">About</a></li>
                <li><a className="text-3xl text-white font-medium hover:bg-red-400 py-2 px-2 mb-2 rounded-md" href="#">Product</a></li>
                <li><a className="text-3xl text-white font-medium hover:bg-red-400 py-2 px-2 mb-2 rounded-md" href="#">Contact</a></li>
            </ul>
            <span onClick={()=>setHamburger(!hamburger)} className='absolute top-[0] right-[0] py-2 px-4 text-white font-bold cursor-pointer'>Close</span>
        </div>
    </div>
  )
}

export default HambergerMenu