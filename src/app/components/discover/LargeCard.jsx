import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function LargeCard({color = "FFFFFF", image = "", imageDescription = "",  title = "", subtitle = "", description = "", button = "Ver más", link ="/"}) {
  return (
    <div className={`col-span-12 rounded-lg grid grid-cols-12`} style={{background:`#${color}`}}>
        <Link href={link} className='col-span-12 md:col-span-6'>
            <Image src={image} width={1920} height={1080} alt={imageDescription} className='rounded-t-lg md:rounded-r-none md:rounded-l-lg w-full h-full object-cover'/>
        </Link>
        <div className='col-span-12 md:col-span-6 flex flex-col text-white justify-center p-10'>
            <h5 className='mb-2 text-sm'>{title}</h5>
            <h3 className='text-2xl font-bold mb-5'>{subtitle}</h3>
            <h5 className='mb-8 text-xs'>{description}</h5>
            <div>
                <Link className='bg-white py-3 px-8 text-black text-sm rounded-3xl font-semibold hover:bg-gray-400 transition-all duration-500' href={link}>
                    {button}
                </Link>
            </div>
        </div>
    </div>
  )
}
