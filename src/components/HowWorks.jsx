import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const steps = [
    {
        title: 'Primera Reunión',
        emoji: '🗓️',
        description:
          'Tendremos una breve llamada para conocer tu proyecto, tus metas y tu estilo. Luego recibirás un formulario que nos ayudará a entender mejor a tu público objetivo y tu visión general para el sitio web.',
      },
      {
        title: 'Planificación Estratégica',
        emoji: '🛠️',
        description:
          'Analizaré tus necesidades y objetivos para desarrollar una estrategia de diseño web clara y personalizada. Definiremos juntos el estilo visual, la estructura de las páginas y los elementos esenciales para lograr el impacto que deseas.',
      },
      {
        title: 'Diseño y Construcción Web',
        emoji: '🖥️',
        description:
          'Basándome en tu retroalimentación, crearé los diseños finales y construiré el sitio. Podrás revisar los avances, proponer cambios, y ver cómo tu visión toma forma en cada etapa del proceso.',
      },
      {
        title: 'Lanzamiento y Acompañamiento',
        emoji: '🚀',
        description:
          'Realizaremos una revisión final para asegurarnos de que todo esté perfecto. Lanzaremos tu sitio y te ofreceré acompañamiento técnico y soporte para que manejes tu página con total confianza.',
      }
      
];

const HowWorks = () => {
    return (
      <section className="w-full px-6 py-18 max-w-7xl mx-auto" id="how-it-works">
        <h2 className="text-[32px] md:text-[56px] font-normal text-center mb-4 md:mb-14">
          Así es como trabajaremos
        </h2>
  
        {/* Desktop view */}
        <div className="hidden md:grid grid-cols-2 gap-8 gap-x-20">
          {steps.map((step, idx) => (
            <div key={idx} className="border-t pt-4 flex flex-col items-center md:text-start md:items-start">
              <h3 className="text-lg font-medium text-black mb-2">Paso {idx + 1}</h3>
              <h4 className="text-2xl font-semibold flex items-center gap-2 mb-4">
                {step.title} <span>{step.emoji}</span>
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
  
        {/* Mobile view with Swiper */}
        <div className="md:hidden">
          <Swiper spaceBetween={20} slidesPerView={1} pagination={{ clickable: true }}>
            {steps.map((step, idx) => (
              <SwiperSlide key={idx}>
                <div className="border-t pt-4 flex flex-col items-center">
                  <h3 className="text-lg font-medium text-gray-700 mb-2">Paso {idx + 1}</h3>
                  <h4 className="text-2xl font-semibold flex flex-col items-center gap-2 mb-4">
                    {step.title} <span>{step.emoji}</span>
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
  
        {/* Botón al final */}
        <div className="mt-10 flex justify-center">
          <a
            href="https://wa.me/51957272025?text=Hola%20Clave%20Visual,%20quisiera%20que%20me%20ayuden%20a%20hacer%20mi%20pagina%20web!"
            target="_blank"
            rel="noopener noreferrer"
            className="cb-1 cursor-pointer transition bg-white text-black border border-black px-6 py-3 text-sm md:text-base font-medium hover:bg-black hover:text-white"
          >
            Trabajemos juntos
          </a>
        </div>
      </section>
    );
  };
  
  export default HowWorks;