'use client'

import Image from 'next/image';
import Link from 'next/link'
import React, { useState } from 'react'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { posts } from '../utils'

export default function CarruselPosts() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % posts.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + posts.length) % posts.length);
    };

    return (
        <div className={`h-auto text-white pt-14 flex flex-col items-center justify-center transition-all`} style={{background: posts[currentSlide].color }}>
            <h4 className='text-lg font-bold'>{`${posts[currentSlide].title}`}</h4>
            <h3 className='text-3xl font-bold mt-4 mb-20 text-center'>{`${posts[currentSlide].subtitle}`}</h3>

            <Link className='bg-white py-3 px-10 mb-8 text-black text-sm rounded-3xl font-semibold hover:bg-gray-400 transition-all duration-500' href={`${posts[currentSlide].href}`}>
                {`${posts[currentSlide].textButton}`}
            </Link>
            
            <div className='relative overflow-hidden w-11/12 md:w-3/5 mb-10'>
                <div
                    className="flex transition-transform duration-500"
                    style={{
                        width: `${posts.length * 100}%`,
                        transform: `translateX(${-currentSlide * (100 / posts.length)}%)`,
                    }}
                >
                    {posts.map((image, index) => (
                        <div key={index} className="w-full">
                            {image.type === 'image' &&
                                <Image
                                    src={`/${image.url}`}
                                    alt={`Slide ${index + 1}`}
                                    width={854} 
                                    height={480}
                                    layout="responsive"
                                />
                            }

                            {image.type === 'video' &&
                                <video loop muted autoPlay controls className="w-full">
                                    <source src={`/${image.url}`} type="video/mp4" />
                                </video>
                            }
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex flex-row items-center justify-center mb-20'>
                <button onClick={prevSlide} className='bg-white text-black text-3xl py-1 px-4 rounded-3xl mr-10'><MdKeyboardArrowLeft/></button>
                {
                    posts.map((post, index) => (
                        <button onClick={() => setCurrentSlide(index)} key={post.id + index} className={currentSlide === index ? `bg-white w-14 h-2 rounded-3xl mx-1`: `bg-white/75 w-10 h-1 rounded-3xl mx-1`}></button>
                    ))
                }

                <button onClick={nextSlide} className='bg-white text-black text-3xl py-1 px-4 rounded-3xl ml-10'><MdKeyboardArrowRight/></button>
            </div>
        </div>
    )
}
