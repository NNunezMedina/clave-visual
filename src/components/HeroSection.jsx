
import { useState } from 'react'

const HeroSection = () => {
  const [activeButton, setActiveButton] = useState('cb-1')

  return (
    <section className="flex flex-col items-center text-center py-[56px] md:px-4 md:py-16 gap-[20px]">
      <h1 className="text-[32px] md:text-[64px] font-normal leading-tight max-w-[900px]" >
        Creamos<span className="mx-1">/sitios web/</span> que no solo son “únicos”, sino que también 
        Resuenan<span>☺</span>, Conectan y Convierten <span>✶</span>.
      </h1>

      <p className="text-[16px] md:text-lg">
        <span role="img" aria-label="device">📱</span> Especialistas en soluciones de marca y sitios web, desde el diseño hasta el desarrollo.
      </p>

      <div className="mt-[8px] flex justify-center gap-4 flex-wrap">
      <a
        href="https://wa.me/51957272025?text=Hola%20Clave%20Visual,%20quisiera%20que%20me%20ayuden%20a%20hacer%20mi%20pagina%20web!"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setActiveButton('cb-1')}
        className={`cb-1 cursor-pointer transition
            ${activeButton === 'cb-1'
            ? 'bg-black text-white'
            : 'bg-white text-black border border-black hover:bg-black hover:text-white'}`}
        >
        Trabajemos juntos
        </a>

        <a
        href="#servicios"
        onClick={() => setActiveButton('cb-2')}
        className={`cb-2 inline-block px-4 py-2 cursor-pointer transition
          ${activeButton === 'cb-2'
            ? 'bg-black text-white'
            : 'bg-white text-black border border-black hover:bg-black hover:text-white'}`}
      >
        Nuestros servicios
      </a>
      </div>
    </section>
  )
}

export default HeroSection
