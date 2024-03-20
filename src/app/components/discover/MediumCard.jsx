import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export default function MediumCard({ link = "/", image = "", imageDescription = "", title = "", subtitle = "", description = "", button = "Ver más" }) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    return (
        <div className='col-span-12 md:col-span-6 rounded-lg relative'>
            <Link href={link} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="w-full h-full absolute bg-gradient-to-t from-[#12120f] rounded-lg">
                <div className='absolute bottom-0 text-white mx-5 mb-8'>
                    <h5 className='text-xs'>{title}</h5>
                    <h3 className='text-2xl font-bold mb-5'>{subtitle}</h3>
                    <p className={`text-sm mb-5 transition-all duration-500 h-0 ${isHovered ? 'opacity-100 h-fit' : 'opacity-0'}`}>{description}</p>
                
                    <button className='bg-white py-3 px-8 text-black text-sm rounded-3xl font-semibold hover:bg-gray-400 transition-all duration-500' href={link}>
                        {button}
                    </button>
                </div>
            </Link>
            <Image src={image} width={1920} height={1080} alt={imageDescription} className='rounded-lg w-full h-full object-cover '/>
        </div>
    )
}
