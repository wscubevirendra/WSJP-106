import React, { useState } from 'react'
import { FaBars } from "react-icons/fa6";
import { ImCross } from "react-icons/im";



export default function Header() {
    const [toggle, setToggle] = useState(false);
    function handleToggle() {
        setToggle(!toggle)
    }
    return (
        <div className='w-full  shadow'>
            <div className='max-w-7xl flex justify-between items-center  mx-auto py-6 px-4 '>
                <div className='text-yellow-500  text-4xl font-bold'>blink<span className='text-green-500'>it</span></div>
                {/* Larget Device Header */}
                <div className='hidden md:flex'>
                    <ul className='flex items-center font-medium text-md space-x-10'>
                       
                        <li>
                            <div className='flex space-x-4'>
                                <button className='bg-yellow-500 text-white py-2 px-4 rounded'>Login</button>
                                <button className='bg-green-500 text-white py-2 px-4 rounded'>Sign Up</button>
                            </div>
                        </li>
                    </ul>

                </div>
                <div onClick={handleToggle} className='md:hidden text-2xl cursor-pointer text-gray-600'>
                    {
                        toggle ?
                            <ImCross />
                            :
                            <FaBars />
                    }

                </div>
                {/* Mobile Device Header */}
                <div className={` fixed md:hidden w-[50%] duration-200 h-full top-0 bg-amber-100 shadow-2xl p-6 ` + (toggle ? 'left-0' : 'left-[-100%]')}>
                    <ul className='flex items-center flex-col  font-medium text-md space-y-10'>
                        <li>
                            <div className='flex space-x-4'>
                                <button className='bg-yellow-500 text-white py-2 px-4 rounded'>Login</button>
                                <button className='bg-green-500 text-white py-2 px-4 rounded'>Sign Up</button>
                            </div>
                        </li>
                    </ul>

                </div>



            </div>
        </div>
    )
}
