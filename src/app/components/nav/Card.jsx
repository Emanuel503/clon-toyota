import Image from 'next/image'
import React, { useState } from 'react'
import { FiPlus } from 'react-icons/fi'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

export default function Card({id, image, imageAlt, legend, title, price, priceText, firstDescription, dues, secondDescription, href}) {

  const [hover, setHover] = useState(null)

  const handleHover = (item, hover) => {
    if(hover){
      setHover(item)
    }else{
      setHover(null)
    }
  }

  return (
    <div className='col-span-3'>
      <a onMouseEnter={() => {handleHover(id, true)}} onMouseLeave={() => {handleHover(id, false)}} href={href} className="flex flex-col px-3 gap-2">
        <div className="relative">
            <Image
                src={image}
                width={420}
                height={250}
                alt={imageAlt}
                className="w-full lg:w-96 h-auto rounded-lg"
                priority={true}
                loading='eager'
            />
            <div className={`absolute top-0 rounded-lg w-full h-full transition-all flex items-center justify-center ${hover == id ? 'bg-black/75' : ''}`}>
                <FiPlus className={`text-2xl text-white ${hover == id ? 'block' : 'hidden'}`} />
            </div>
            <span className="absolute text-xs text-white text-center bottom-0 w-full">{legend}</span>
        </div>
        <div>
            <h3 className={`font-bold ${hover == id ? 'underline' : ''}`}>{title}</h3>
            <h5><span className="font-bold">{price}</span> {priceText}</h5>
            <h5>{firstDescription} <span className="font-bold">{dues}</span> {secondDescription}</h5>

            
        </div>
      </a>
      <div onMouseEnter={() => {handleHover(id, true)}} onMouseLeave={() => {handleHover(id, false)}} className="flex flex-row gap-2 px-3 mb-3 pt-2">
        <a href="/" className={`font-semibold flex items-center gap-x-2 hover:gap-4 transition-all ${hover == id ? 'text-black' : 'text-white'}`}>Diseñar <MdOutlineKeyboardArrowRight className='text-xl'/></a>
        <span className={`text-xs flex items-center justify-center ${hover == id ? 'text-gray-500' : 'text-white'}`}>|</span>
        <a href="/" className={`font-semibold flex items-center gap-x-2 hover:gap-4 transition-all ${hover == id ? 'text-black' : 'text-white'}`}>Ofertas locales <MdOutlineKeyboardArrowRight className='text-xl'/></a>
      </div>
    </div>
  )
}
