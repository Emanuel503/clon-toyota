export default function Home() {
    return (
        <main>
            <section className="flex relative h-1/2 text-white">
                <div className="absolute bottom-0 mb-10 ml-10 z-10">
                    <h5 className='font-semibold mb-2'>ALL-NEW</h5>
                    <h4 className='text-5xl font-semibold'>2024 Tacoma</h4>
                    <h2 className='text-3xl mb-5'>Starting MSRP $31,500*</h2>
                    <p className='text-xs'>TRD Pro shown in Ice Cap with Black roof. * Trailhunter shown in Bronze Oxide. Prototypes shown with options. Production models may vary. * Hybrid available spring 2024.</p>
                </div>

                <video loop muted autoPlay className='h-3/5 w-full object-cover'>
                    <source src="/tacoma.mp4" type="video/mp4"/>
                </video>
            </section>

            <div className="bg-black text-white w-full h-16 flex items-center justify-between px-12">
               <button className="font-semibold">
                    Tacoma | 2024
                </button>

                <div>
                    <button className="font-bold underline underline-offset-4 px-3">Overview</button>
                    <button className="font-bold hover:underline underline-offset-4 px-3">Gallery</button>
                    <button className="font-bold hover:underline underline-offset-4 px-3">Features</button>
                    <button className="font-bold hover:underline underline-offset-4 px-3">Specs</button>
                    <button className="font-bold hover:underline underline-offset-4 px-3">Offers</button>

                    <button className="bg-white px-6 py-2 rounded-3xl text-black font-semibold text-sm mx-10">Build</button>
                </div>
            </div>

            <div className="h-screen text-center bg-gradient-to-b from-[#eae7e3] pt-20">
                <h1 className="text-6xl font-semibold mb-6">Be <span className="italic">dareful </span>out there.</h1>
                <p className="text-2xl">
                    The all-new 2024 Tacoma delivers trail-dominating power, legendary<br/> 
                    capability and captivating style. Time to make all your off-roading dreams<br/> 
                    come true.
                </p>
            </div>
        </main>
    );
  }