import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full px-6 py-10 max-w-7xl mx-auto">
      {/* Línea horizontal arriba */}
      <div className="border-t border-black mb-10"></div>

      {/* Contenido */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        
        {/* Información de contacto */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="text-xl">📍</span>
            <div>
              <p className="font-semibold text-black">Lima, Perú</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xl">📞</span>
            <a
                href="https://wa.me/51957272025?text=Hola%20Clave%20Visual,%20quisiera%20realizar%20una%20p%C3%A1gina%20web%20con%20ustedes!"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-black hover:underline"
            >
                +51 957 272 025
            </a>
            </div>

          <div className="flex items-center gap-3">
            <span className="text-xl">✉️</span>
            <a href="mailto:soporte@tusitio.com" className="text-sm text-blue-600 hover:underline">
              nathalynunezmedina@gmail.com
            </a>
          </div>
        </div>

        {/* Sobre la empresa */}
        <div className="flex flex-col gap-4 max-w-md">
          <h4 className="font-semibold text-black">Sobre nosotros</h4>
          <p className="text-sm text-gray-600 leading-relaxed">
            Somos especialistas en crear páginas web que impulsan tu negocio al siguiente nivel. Nuestro compromiso es ofrecerte soluciones a medida y un servicio de calidad.
          </p>

          {/* Íconos de redes sociales */}
          <div className="flex gap-4 mt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black text-xl">
              <FaFacebookF />
            </a>
            <a
            href="https://www.instagram.com/clavevisualdesign?igsh=MXIxZTk4eGhiMHRhaw%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-black text-xl"
            >
            <FaInstagram />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
