import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
        <nav className="h-16 w-full bg-white flex flex-row items-center fixed z-10 px-12">
            <Image
                src="/toyota_logo.svg"
                width={250}
                height={150}
                alt="Picture of the author"
                className="w-32 h-auto"
            />

            <ul className="hidden lg:flex h-full w-full justify-end ">
              <li className="w-auto flex items-center mx-5">
                <button className="border border-white hover:border-black rounded-3xl px-4 py-2 font-semibold transition-all duration-500">Vehiculos</button>
              </li>

              <li className="w-auto flex items-center mx-5">
                <button className="border border-white hover:border-black rounded-3xl px-4 py-2 font-semibold transition-all duration-500">Guia de compra</button>
              </li>

              <li className="w-auto flex items-center mx-5">
                <button className="border border-white hover:border-black rounded-3xl px-4 py-2 font-semibold transition-all duration-500">Dueños</button>
              </li>
              
              <li className="w-auto flex items-center mx-5">
                <button className="border border-white hover:border-black rounded-3xl px-4 py-2 font-semibold transition-all duration-500">Buscar inventario</button>
              </li>
            </ul>
        </nav>

        <section className="flex items-center justify-center">
          <div className="absolute bottom-0 text-center mb-20 z-10">
              <h4 className='text-7xl text-white font-semibold'>Grab On</h4>
              <h2 className='text-xl text-white mb-20'>Fun is waiting in the all-new Tacoma</h2>
              <Link className='bg-white py-3 px-10 text-balck text-sm rounded-3xl font-semibold hover:bg-gray-400 transition-all duration-500' href="/tacoma">
                Ver Más
              </Link>
          </div>

          <video loop muted autoPlay className='object-cover h-screen'>
            <source src="/video_tocoma.mp4" type="video/mp4"/>
          </video>
        </section>
    </main>
  );
}
