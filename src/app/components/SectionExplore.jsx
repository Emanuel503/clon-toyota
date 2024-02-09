'use client'

import React, { useState } from 'react'

export default function SectionExplore() {

  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  
  return (
    <section className='h-screen'>
        <h2 className='text-center font-bold text-5xl mb-20'>Explora los vehículos</h2>

        <div className='flex flex-col items-center justify-center'>

          <div className="grid grid-cols-12">
              <div className="cursor-pointer p-4" onClick={() => handleTabClick(1)}>
                Tab 1
              </div>
              <div className="cursor-pointer p-4" onClick={() => handleTabClick(2)}>
                Tab 2
            </div>
          </div>

          <div>
              {activeTab === 1 && 
                <div>
                  
                </div>
              }
              {activeTab === 2 && 
                <div>
                
                </div>
              }
          </div>
        </div>
    </section>
  )
}