"use client"

import React from 'react'
import Image from 'next/image'
import HomeImg from '../../public/images/home.png'
import Middle from './Middle'

function Hero() {
  return (
    <>
    <div className='h-screen w-full flex items-center justify-center relative -translate-y-[15%]'>
        <div className="container w-11/12 h-4/5 relative top-[10%] flex flex-row justify-center items-start">
            <div className="left flex flex-col w-1/2 p-16 px-10 h-full">
                <div className='text-5xl font-bold leading-normal font-poppins'>Everything your team needs to know <span className='text-[#36C5F0]'>Just a question</span> away.</div>
                <div className='w-[85%] my-6'>
                    <p className='text-xl leading-normal font-space-grotesk'>An AI tool that allows you to extract data from your multitude of resources through simple questions, so that you can focus on what&apos;s really important - your work.</p>
                </div>
                <div>
                <button className='mt-5 w-44 h-14 bg-[#1C1C1C] rounded-md border-2 border-[#ffffff1a] font-spacegrotesk text-lg leading-6'>Join the Waitlist</button>

                </div>
            </div>
            <div className="right w-1/2 h-full">
                <Image src={HomeImg} alt='home' width={520} className='relative top-[5%] left-[8%]' />
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero