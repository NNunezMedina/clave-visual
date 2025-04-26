import DevicesImage from '../assets/laptop.png';

const NeedsSection = () => {
  return (
    <section className="relative overflow-hidden pt-[20px] pb-[112px] px-4 flex flex-col items-center text-center gap-12 bg-white">
      {/* Fondo radial difuminado estilo nube */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,65,48,0.2)_0%,_rgba(255,255,255,0)_80%)] z-0" />

        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white via-white/70 to-transparent z-10" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-white/70 to-transparent z-10" />
      </div>

      {/* Contenido */}
      <div className="relative z-20 w-full max-w-6xl flex flex-col items-center text-center">
        {/* Título */}
        <h2
          className="text-[32px] md:text-[58px] font-normal max-w-[700px] mx-auto mb-8 order-1"
          style={{ fontFamily: 'Instrument Serif, serif' }}
        >
          ¿Sientes que tu negocio necesita...?
        </h2>

        {/* Imagen */}
        <img
          src={DevicesImage}
          alt="Dispositivos digitales representando canal de ventas, catálogo y presencia online"
          className="w-60 mx-auto mb-8 order-3 md:order-2"
        />

        {/* Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left order-2 md:order-3">
          {/* Tarjeta 1 */}
          <div className="border-t pt-4 px-2 border-black/20">
            <h3 className="font-semibold text-lg mb-2">Un canal de ventas 🛒</h3>
            <p className="text-sm text-neutral-700">
              En el mundo actual, tener presencia en línea facilita las ventas, mejora la confianza de tus clientes y permite que te encuentren con facilidad.
            </p>
          </div>

          {/* Tarjeta 2 */}
          <div className="border-t pt-4 px-2 border-black/20">
            <h3 className="font-semibold text-lg mb-2">Un catálogo apropiado 📖</h3>
            <p className="text-sm text-neutral-700">
              ¿Cansado de mostrar tus productos en un PDF? Con un catálogo online tus clientes pueden ver tus productos de forma dinámica, clara y profesional.
            </p>
          </div>

          {/* Tarjeta 3 */}
          <div className="border-t pt-4 px-2 border-black/20">
            <h3 className="font-semibold text-lg mb-2">Una imagen profesional ✨</h3>
            <p className="text-sm text-neutral-700">
              Tu sitio web es tu carta de presentación. Tener una presencia digital bien diseñada genera confianza y posiciona tu marca de forma estratégica.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeedsSection;
