'use client'

import React, { useState } from 'react'
import { FaPlus, FaMinus } from "react-icons/fa";

export default function Collaps({title, children }) {

    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapse = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div onClick={() => toggleCollapse() } className='col-span-12 border-b grid grid-cols-12 pb-2 mb-4'>
            <h4 className='col-span-6 text-left font-semibold text-sm'>{title}</h4>
            <div className='col-span-6 text-right'>
                <button>
                    { collapsed == true ? < FaMinus /> : < FaPlus />}
                </button>
            </div>
            {
                collapsed && 

                <div className='mt-4 col-span-12 grid grid-cols-12 gap-0 md:gap-4 lg:gap-0'>
                    {
                        children
                    }
                </div>
            }
        </div>
    )
}
