'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { FaPlus, FaMinus } from "react-icons/fa";

export default function Collaps({title}) {

    const [collapsed, setCollapsed] = useState(true);

    const toggleCollapse = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div onClick={() => toggleCollapse() } className='col-span-12 border-b grid grid-cols-12'>
            <h4 className='col-span-6 text-left font-semibold text-sm'>{title}</h4>
            <div className='col-span-6 text-right'>
                <button>
                    { collapsed == true ? < FaMinus /> : < FaPlus />}
                </button>
            </div>
            {
                collapsed && 
                    <div className='mt-4 col-span-12 grid grid-cols-12 gap-4'>
                        <div className='col-span-4'>
                            <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'> Valor de intercambio</Link>
                            <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'> Valor de intercambio</Link>
                            <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'> Valor de intercambio</Link>
                        </div>

                        <div className='col-span-4'>
                            <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'> Valor de intercambio</Link>
                        </div>

                        <div className='col-span-4'>
                            <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'> Valor de intercambio</Link>
                        </div>
                    </div>
            }
        </div>
    )
}
