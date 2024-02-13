'use client'

import Image from 'next/image';
import React, { useState } from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function SectionExplore() {

  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  
  return (
    <section className='mb-10'>
        <h2 className='text-center font-bold text-5xl mb-20'>Explora los vehículos</h2>

        <div className='flex flex-row items-center justify-center'>
            <div className="cursor-pointer p-4" onClick={() => handleTabClick(1)}>
                Autos y Minivan
            </div>
            <div className="cursor-pointer p-4" onClick={() => handleTabClick(2)}>
                Camionetas
          </div>
        </div>

        <div className='flex flex-row gap-6 mx-12'>
            {activeTab === 1 && 
              <>
                <div className='grid grid-cols-12 w-1/3 h-96 bg-[#5c535c] rounded-xl'>
                    <div className='col-span-12 xl:col-span-6'>
                          <Image
                            src="/crw.png"
                            width={350}
                            height={261}
                            alt="Logo de Toyota"
                            className="w-full h-full object-cover rounded-l-xl xl:rounded-t-xl"
                          />
                    </div>

                    <div className='col-span-12 xl:col-span-6 p-5 text-white h-96'>
                          <h4 className='mb-6'>2024 | Hibrido</h4>
                          <h3 className='text-2xl font-bold mb-5'>Toyota Crown</h3>
                          <h4 className='mb-16'>Más que un viaje elevado.</h4>

                          <div className='grid grid-cols-12 '>
                              <div className='col-span-6'>
                                  <h3 className='text-2xl'>$40,350</h3>
                                  <span className='text-xs'>MSRP inicial *</span>

                                  <button className='bg-white px-6 py-2 rounded-3xl font-bold text-black mt-5'>Explorar</button>
                              </div>

                              <div className='col-span-6'>
                                  <h3 className='text-2xl'>42/41</h3>
                                  <span className='text-xs'>Hasta est. MPG *</span>

                                  <button className='px-6 py-2 rounded-3xl font-bold text-white mt-5 flex items-center gap-x-2 hover:gap-3 transition-all'>Diseñar <MdOutlineKeyboardArrowRight className='text-xl'/></button>
                              </div>
                          </div>
                    </div>
                </div>

                <div className='grid grid-cols-12 w-1/3 h-96 bg-[#5c535c] rounded-xl'>
                    <div className='col-span-12 xl:col-span-6'>
                          <Image
                            src="/crw.png"
                            width={350}
                            height={261}
                            alt="Logo de Toyota"
                            className="w-full h-full object-cover rounded-l-xl xl:rounded-t-xl"
                          />
                    </div>

                    <div className='col-span-12 xl:col-span-6 p-5 text-white h-96'>
                          <h4 className='mb-6'>2024 | Hibrido</h4>
                          <h3 className='text-2xl font-bold mb-5'>Toyota Crown</h3>
                          <h4 className='mb-16'>Más que un viaje elevado.</h4>

                          <div className='grid grid-cols-12 '>
                              <div className='col-span-6'>
                                  <h3 className='text-2xl'>$40,350</h3>
                                  <span className='text-xs'>MSRP inicial *</span>

                                  <button className='bg-white px-6 py-2 rounded-3xl font-bold text-black mt-5'>Explorar</button>
                              </div>

                              <div className='col-span-6'>
                                  <h3 className='text-2xl'>42/41</h3>
                                  <span className='text-xs'>Hasta est. MPG *</span>

                                  <button className='px-6 py-2 rounded-3xl font-bold text-white mt-5 flex items-center gap-x-2 hover:gap-3 transition-all'>Diseñar <MdOutlineKeyboardArrowRight className='text-xl'/></button>
                              </div>
                          </div>
                    </div>
                </div>

                <div className='grid grid-cols-12 w-1/3 h-96 bg-[#5c535c] rounded-xl'>
                    <div className='col-span-12 xl:col-span-6'>
                          <Image
                            src="/crw.png"
                            width={350}
                            height={261}
                            alt="Logo de Toyota"
                            className="w-full h-full object-cover rounded-l-xl xl:rounded-t-xl"
                          />
                    </div>

                    <div className='col-span-12 xl:col-span-6 p-5 text-white h-96'>
                          <h4 className='mb-6'>2024 | Hibrido</h4>
                          <h3 className='text-2xl font-bold mb-5'>Toyota Crown</h3>
                          <h4 className='mb-16'>Más que un viaje elevado.</h4>

                          <div className='grid grid-cols-12 '>
                              <div className='col-span-6'>
                                  <h3 className='text-2xl'>$40,350</h3>
                                  <span className='text-xs'>MSRP inicial *</span>

                                  <button className='bg-white px-6 py-2 rounded-3xl font-bold text-black mt-5'>Explorar</button>
                              </div>

                              <div className='col-span-6'>
                                  <h3 className='text-2xl'>42/41</h3>
                                  <span className='text-xs'>Hasta est. MPG *</span>

                                  <button className='px-6 py-2 rounded-3xl font-bold text-white mt-5 flex items-center gap-x-2 hover:gap-3 transition-all'>Diseñar <MdOutlineKeyboardArrowRight className='text-xl'/></button>
                              </div>
                          </div>
                    </div>
                </div>
              </>
            }
            {activeTab === 2 && 
               <>
                <div className='grid grid-cols-12 w-1/3 h-96 bg-[#567762] rounded-xl'>
                    <div className='col-span-12 xl:col-span-6'>
                          <Image
                            src="/crw.png"
                            width={350}
                            height={261}
                            alt="Logo de Toyota"
                            className="w-full h-full object-cover rounded-l-xl xl:rounded-t-xl"
                          />
                    </div>

                    <div className='col-span-12 xl:col-span-6 p-5 text-white h-96'>
                          <h4 className='mb-6'>2024 | Hibrido</h4>
                          <h3 className='text-2xl font-bold mb-5'>Toyota Crown</h3>
                          <h4 className='mb-16'>Más que un viaje elevado.</h4>

                          <div className='grid grid-cols-12 '>
                              <div className='col-span-6'>
                                  <h3 className='text-2xl'>$40,350</h3>
                                  <span className='text-xs'>MSRP inicial *</span>

                                  <button className='bg-white px-6 py-2 rounded-3xl font-bold text-black mt-5'>Explorar</button>
                              </div>

                              <div className='col-span-6'>
                                  <h3 className='text-2xl'>42/41</h3>
                                  <span className='text-xs'>Hasta est. MPG *</span>

                                  <button className='px-6 py-2 rounded-3xl font-bold text-white mt-5 flex items-center gap-x-2 hover:gap-3 transition-all'>Diseñar <MdOutlineKeyboardArrowRight className='text-xl'/></button>
                              </div>
                          </div>
                    </div>
                </div>

                <div className='grid grid-cols-12 w-1/3 h-96 bg-[#567762] rounded-xl'>
                    <div className='col-span-12 xl:col-span-6'>
                          <Image
                            src="/crw.png"
                            width={350}
                            height={261}
                            alt="Logo de Toyota"
                            className="w-full h-full object-cover rounded-l-xl xl:rounded-t-xl"
                          />
                    </div>

                    <div className='col-span-12 xl:col-span-6 p-5 text-white h-96'>
                          <h4 className='mb-6'>2024 | Hibrido</h4>
                          <h3 className='text-2xl font-bold mb-5'>Toyota Crown</h3>
                          <h4 className='mb-16'>Más que un viaje elevado.</h4>

                          <div className='grid grid-cols-12 '>
                              <div className='col-span-6'>
                                  <h3 className='text-2xl'>$40,350</h3>
                                  <span className='text-xs'>MSRP inicial *</span>

                                  <button className='bg-white px-6 py-2 rounded-3xl font-bold text-black mt-5'>Explorar</button>
                              </div>

                              <div className='col-span-6'>
                                  <h3 className='text-2xl'>42/41</h3>
                                  <span className='text-xs'>Hasta est. MPG *</span>

                                  <button className='px-6 py-2 rounded-3xl font-bold text-white mt-5 flex items-center gap-x-2 hover:gap-3 transition-all'>Diseñar <MdOutlineKeyboardArrowRight className='text-xl'/></button>
                              </div>
                          </div>
                    </div>
                </div>

                <div className='grid grid-cols-12 w-1/3 h-96 bg-[#567762] rounded-xl'>
                    <div className='col-span-12 xl:col-span-6'>
                          <Image
                            src="/crw.png"
                            width={350}
                            height={261}
                            alt="Logo de Toyota"
                            className="w-full h-full object-cover rounded-l-xl xl:rounded-t-xl"
                          />
                    </div>

                    <div className='col-span-12 xl:col-span-6 p-5 text-white h-96'>
                          <h4 className='mb-6'>2024 | Hibrido</h4>
                          <h3 className='text-2xl font-bold mb-5'>Toyota Crown</h3>
                          <h4 className='mb-16'>Más que un viaje elevado.</h4>

                          <div className='grid grid-cols-12 '>
                              <div className='col-span-6'>
                                  <h3 className='text-2xl'>$40,350</h3>
                                  <span className='text-xs'>MSRP inicial *</span>

                                  <button className='bg-white px-6 py-2 rounded-3xl font-bold text-black mt-5'>Explorar</button>
                              </div>

                              <div className='col-span-6'>
                                  <h3 className='text-2xl'>42/41</h3>
                                  <span className='text-xs'>Hasta est. MPG *</span>

                                  <button className='px-6 py-2 rounded-3xl font-bold text-white mt-5 flex items-center gap-x-2 hover:gap-3 transition-all'>Diseñar <MdOutlineKeyboardArrowRight className='text-xl'/></button>
                              </div>
                          </div>
                    </div>
                </div>
              </>
            }
        </div>
    </section>
  )
}