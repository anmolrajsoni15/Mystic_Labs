"use client"

import React from 'react'
import Logo from '../../public/images/logo.png'
import Image from 'next/image'

function Navbar() {
  return (
    <div className='flex justify-between w-5/6 h-24 mx-auto bg-transparent'>
        <div className='flex flex-col pl-1 pt-5 w-16'>
            <Image src={Logo} alt='logo' />
            <span className='leading-6 font-roboto'>Bloc</span>
        </div>
        <div className='flex flex-row flex-1 justify-evenly'>
            <ul className='flex flex-row list-none text-center items-center w-2/6 justify-evenly font-roboto text-sm'>
                <li>Features</li>
                <li>Testimonials</li>
                <li>FAQs</li>
            </ul>
        </div>
        <div className='h-full'>
            <button className='mt-5 w-44 h-14 bg-[#1C1C1C] rounded-md border-2 border-[#ffffff1a] font-spacegrotesk text-lg leading-6'>Join the Waitlist</button>
        </div>
    </div>
  )
}

export default Navbar