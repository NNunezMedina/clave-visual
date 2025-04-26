import backgroundImage from '../assets/imagen-fondo.jpg';

const packages = [
  {
    title: "Tu Primera Web",
    description:
      "Ideal para emprendimientos que recién inician. Incluye una landing page con 4-5 secciones (hero, producto, destacados, historia, contacto). Desplegada en Netlify, sin necesidad de hosting.",
    // price: "desde S/. 300",
    features: [
      "Diseño responsive",
      "Formulario de contacto",
      "Botón a WhatsApp",
      "Despliegue en Netlify gratuito"
    ],
    link: "https://wa.me/51957272025?text=Hola!%20Estoy%20interesado%20en%20el%20paquete%20de%20tu%20primera%20web",
  },
  {
    title: "Expansión Digital",
    description:
      "Para negocios en crecimiento. Incluye 3 páginas: una landing principal, una página de catálogo o nosotros, y una de contacto. Ideal para mostrar más contenido sin llegar a ecommerce.",
    // price: "desde S/. 600",
    features: [
      "3 páginas: Home, Catálogo/Nosotros, Contacto",
      "Diseño adaptable a marca",
      "Botones con WhatsApp",
      "Sin hosting requerido (Netlify incluido)"
    ],
    link: "https://wa.me/51957272025?text=Hola!%20Estoy%20interesado%20en%20el%20paquete%20de%20expansion%20digital",
  },
  {
    title: "Shopify a Medida",
    description:
      "Para empresas consolidadas con flujo de pedidos. Incluye tienda completa en Shopify, con carrito, pasarela de pago (Culqi, Niubiz, etc) y personalización visual.",
    // price: "desde S/. 1200",
    features: [
      "Configuración de tienda Shopify",
      "Integración de medios de pago",
      "Diseño personalizado",
      "Soporte inicial incluido"
    ],
    link: "https://wa.me/51957272025?text=Hola!%20Estoy%20interesado%20en%20el%20paquete%20de%20shopify%20a%20medida",
  },
];

const PackagesSection = () => {
  return (
    <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen">
      <section
       id="servicios"
        className="bg-cover bg-center bg-no-repeat pt-[20px] pb-[60px] px-4 flex flex-col items-center text-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <h2
          className="text-3xl md:text-[64px] font-serif font-semibold mb-12 text-white drop-shadow-[0_4px_6px_rgba(0,0,0,0.6)] pt-[80px]"
          style={{ fontFamily: "Instrument Serif, serif" }}
        >
          Descubre el paquete perfecto para tu negocio
        </h2>

        <div className="w-full max-w-5xl flex flex-col gap-10">
          {packages.map((pack, idx) => (
            <div
              key={idx}
              className="bg-white/80 rounded-2xl p-6 shadow-md backdrop-blur-md transform transition duration-300 hover:-translate-y-2 hover:shadow-lg border-4 border-transparent hover:border-[#987BD0]"
            >
              <div className="flex flex-col md:flex-row gap-6 text-left">
                {/* IZQUIERDA */}
                <div className="w-full md:w-1/2 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-serif mb-2">{pack.title}</h3>
                    <p className="mb-4 text-sm text-neutral-700">{pack.description}</p>
                    <p className="font-semibold mb-4">{pack.price}</p>
                  </div>
                  <a
                    href={pack.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:inline-block w-full max-w-[220px] px-6 py-2 rounded-full bg-[#987BD0] hover:bg-black hover:text-white text-sm font-medium transition mt-4"
                    >
                    Consultar por WhatsApp
                    </a>
                </div>

                {/* DERECHA */}
                <div className="w-full md:w-1/2">
                  <h4 className="text-base font-semibold mb-2">Incluye:</h4>
                  <ul className="list-disc pl-5 text-sm text-neutral-700 space-y-1">
                    {pack.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                  <a
  href={pack.link}
  target="_blank"
  rel="noopener noreferrer"
  className="block md:hidden mt-6 w-full max-w-[220px] mx-auto px-6 py-2 rounded-full bg-[#987BD0] hover:bg-black hover:text-white text-sm font-medium transition"
>
  Consultar por WhatsApp
</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PackagesSection;

  