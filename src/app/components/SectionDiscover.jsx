'use client'

import Image from 'next/image';
import React, { useState } from 'react'

export default function SectionDiscover() {

    const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <section className='mb-10'>
        <h2 className="text-6xl font-bold text-center mb-10">Descubre Toyota</h2>

        <div className='flex flex-row items-center justify-center mb-5'>
            <button className={activeTab == 1 ? `border-b-2 px-5 border-black h-14` : `border-b-2 px-5 border-gray-200 h-14`} onClick={() => handleTabClick(1)}>
                Destacadas
            </button>
            <button className={activeTab == 2 ? `border-b-2 px-5 border-black h-14` : `border-b-2 px-5 border-gray-200 h-14`} onClick={() => handleTabClick(2)}>
                Vehículos y tecnología
            </button>
            <button className={activeTab == 3 ? `border-b-2 px-5 border-black h-14` : `border-b-2 px-5 border-gray-200 h-14`} onClick={() => handleTabClick(3)}>
                    Ofertas y servicios
            </button>
        </div>

        
            {activeTab === 1 && 
                <div className='grid grid-cols-12 mx-40 gap-5'>
                    <div className='col-span-12 bg-[#3e3a3b] rounded-lg grid grid-cols-12'>
                        <Image src="/supra.jpg" width={1920} height={1080} alt='Imagen de un supra y una pareja de enamorados' className='col-span-6'/>
                        <div className='col-span-6 flex flex-col text-white justify-center p-10'>
                            <h5>HISTORIAS DESTACADAS</h5>
                            <h3>Toyota Brand</h3>
                            <h5>Sin YO, no hay Toyota. *</h5>
                        </div>
                    </div>
                    <div className='col-span-6 bg-[#3e3a3b] rounded-lg'>
                        aaaaaaaaaaaaaaaaaaa
                    </div>
                    <div className='col-span-6 bg-[#3e3a3b] rounded-lg'>
                        aaaaaaaaaaaaaaaaaaa
                    </div>
                </div>
            }
            {activeTab === 2 && 
               <div className='grid grid-cols-12'>
               </div>
            }

            {activeTab === 3 && 
               <div className='grid grid-cols-12'>
               </div>
            }
    </section>
  )
}
