"use client"

import React from 'react'
import Image from 'next/image'
import MiddleImg from '../../public/images/middle.png'
import Globe from './Globe'

function Middle() {
  return (
    <>
    <div className='h-[1010px] flex flex-col w-full relative items-center justify-center'>
        <div className='flex flex-col w-1/2 items-center justify-center'>
            <p className='leading-loose text-[34px] font-semibold'>Don't look for answers, just ask!</p>
            <p className='text-center leading-8 font-medium text-xl my-5'>Revolutionize Your Team's Productivity with Q/A. No more Repeat Explanations! The questions you set up can range from simple yes or no questions all the way to advanced mathematical formulas, and you can create as many as needed.</p>
        </div>
        <div className='my-14'>
            <Image src={MiddleImg} alt='middle' className='border-4 border-solid border-[#1B1B1B] rounded-xl' />
        </div>
    </div>
    {/* <Globe /> */}
    </>
  )
}

export default Middle