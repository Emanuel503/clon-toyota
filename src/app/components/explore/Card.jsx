import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

export default function Card({image, imageAlt, legend, title, subtitle, description, price, priceLegend, dues, duesLegend, color = "000000", link = "/" }) {
  return (
    <div className={`grid grid-cols-12 mx-2 rounded-xl min-w-300px xl:min-w-600px h-[680px] xl:h-96`} style={{background: `#${color}`}}>
        <div className='col-span-12 xl:col-span-6 relative h-80 xl:h-full'>
            <Image
                src={image}
                width={350}
                height={261}
                alt={imageAlt}
                className="w-full h-full object-cover rounded-t-xl xl:rounded-l-xl xl:rounded-r-none"
            />
            <div className="absolute top-0 w-full h-1/3 bg-gradient-to-t from-transparent to-black/60 rounded-t-xl xl:rounded-l-xl xl:rounded-r-none"></div>
            <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-b from-transparent to-black/60 rounded-t-xl xl:rounded-l-xl xl:rounded-r-none"></div>
            <span className='text-white text-xs absolute bottom-0 ml-1 text-center md:text-left'>{legend}</span>
        </div>

        <div className='col-span-12 xl:col-span-6 p-5 text-white '>
            <div>
                <h4 className='mb-6'>{title}</h4>
                <h3 className='text-2xl font-bold mb-5'>{subtitle}</h3>
                <h4 className='mb-16'>{description}</h4>
            </div>
            <div className='flex flex-wrap flex-row justify-between'>
                <div>
                    <h3 className='text-2xl'>{price}</h3>
                    <span className='text-xs'>{priceLegend}</span>
                </div>

                <div>
                    <h3 className='text-2xl'>{dues}</h3>
                    <span className='text-xs'>{duesLegend}</span>
                </div>
            </div>

            <div className='flex flex-wrap flex-row justify-between'>   
                <Link href={link} className='px-6 py-2 rounded-3xl font-bold text-black mt-5 bg-white'>Explorar</Link>
                <Link href="/" className='px-6 py-2 rounded-3xl font-bold text-white mt-5 flex items-center gap-x-2 hover:gap-3 transition-all'>Diseñar <MdOutlineKeyboardArrowRight className='text-xl'/></Link>
            </div>
        </div>
    </div>
  )
}
