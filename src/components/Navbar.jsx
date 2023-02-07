import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../asset/logo.png'

const Navbar = () => {

    const [nav, setNav] = useState(false)

    const links = [
        {
            id:1,
            link:'cart'
        },
    ]

  return (
    <div className='flex justify-between items-center w-full h-20 bg-slate-100 fixed px-4'>
        <div className='p-2'>
            
            <img src={logo} className="w-20 h-14" alt="" />
        </div>

        <ul className='hidden md:flex'>

            {links.map(({link,id}) => (
                <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
                        {link}
                </li>
            ))}
           
        </ul>

        <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
            {nav ? <FaTimes size={30} /> : <FaBars size={30}/>}
        </div>

        {nav && (
            <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
            
                {links.map(({link,id}) => (
                    <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                            {link}
                    </li>
                ))}

            </ul>
        )}
        
    </div>
  )
}

export default Navbar
