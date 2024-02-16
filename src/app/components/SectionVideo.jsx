import Link from 'next/link'
import React from 'react'

export default function SectionVideo() {
  return (
    <section className='h-screen bg-[#eae7e3] py-12 flex flex-col items-center'>

        <h4 className='text-center mb-3 font-semibold'>La leyenda continúa</h4>
        <h2 className='text-2xl text-center font-semibold mb-14'>La totalmente nueva Tacoma emociona.</h2>
        
        <div className='mb-10'>
            <Link href="/tacoma" className='text-white bg-black rounded-3xl px-7 py-2 text-center'>Ver más</Link>
        </div>

        <iframe className='w-2/3 h-full' src="https://www.youtube.com/embed/Ju0DdwUybXk?si=FWWRjOPzPDlKj25H" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
    </section>
  )
}
