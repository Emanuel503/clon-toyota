import Link from 'next/link'
import React from 'react'

export default function SectionHeader() {
  return (
    <section className="flex items-center justify-center mb-20">
        <div className="absolute bottom-0 text-center mb-20 z-10">
            <h4 className='text-7xl text-white font-semibold'>Grab On</h4>
            <h2 className='text-xl text-white mb-20'>Fun is waiting in the all-new Tacoma</h2>
            <Link className='bg-white py-3 px-10 text-balck text-sm rounded-3xl font-semibold hover:bg-gray-400 transition-all duration-500' href="/tacoma">
            Ver Más
            </Link>
        </div>

        <video loop muted autoPlay className='object-cover h-screen'>
        <source src="/video_tocoma.mp4" type="video/mp4"/>
        </video>
    </section>
  )
}
