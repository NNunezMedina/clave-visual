import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Asegúrate de tener instalado lucide-react
import logo from '../assets/logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-6 py-4 border-b border-neutral-400 relative">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="Clave visual Logo" className="h-6 md:h-8" />
      </div>

      {/* Botón menú hamburguesa */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Navegación Desktop */}
      <nav className="hidden md:flex space-x-6 text-sm font-medium">
        <a href="#servicios" className="hover:underline">Servicios</a>
        <a href="#works" className="hover:underline">Trabajos</a>
        <a href="#contact" className="hover:underline">Contacto</a>
      </nav>

      {/* Navegación Mobile */}
      {menuOpen && (
        <nav className="absolute top-full left-0 w-full bg-white shadow-md border-t border-neutral-200 md:hidden flex flex-col items-center py-4 space-y-4 z-50">
          <a href="#services" className="hover:underline" onClick={() => setMenuOpen(false)}>Servicios</a>
          <a href="#works" className="hover:underline" onClick={() => setMenuOpen(false)}>Trabajos</a>
          <a href="#contact" className="hover:underline" onClick={() => setMenuOpen(false)}>Contacto</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
