import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    const handleNavigation = (sectionId: string) => {
        setIsMenuOpen(false);

        // Si estamos en una página de detalle del producto, navegar a la página principal
        if (location.pathname.startsWith('/producto/')) {
            navigate('/');
            // Pequeño delay para permitir que la navegación ocurra antes del scroll
            setTimeout(() => scrollToSection(sectionId), 100);
        } else {
            // Si estamos en la página principal, hacer scroll normalmente
            scrollToSection(sectionId);
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-sm border-b border-gray-700">
            <nav className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="w-14 h-14 flex items-center justify-center cursor-pointer" onClick={() => handleNavigation('home')}>
                        <img src="https://res.cloudinary.com/deqtp71ut/image/upload/v1760054666/SOT/sot_logo.png" alt="SOT Logo" className="w-full h-full object-contain" />
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <button onClick={() => handleNavigation('home')} className="text-gray-300 hover:text-blue-400 transition-colors">
                            Inicio
                        </button>
                        <button onClick={() => handleNavigation('about')} className="text-gray-300 hover:text-blue-400 transition-colors">
                            Nosotros
                        </button>
                        <button onClick={() => handleNavigation('products')} className="text-gray-300 hover:text-blue-400 transition-colors">
                            Soluciones
                        </button>
                        <button onClick={() => handleNavigation('ecosystem')} className="text-gray-300 hover:text-blue-400 transition-colors">
                            Ecosistema
                        </button>
                        <button onClick={() => handleNavigation('contact')} className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                            Contacto
                        </button>
                    </div>

                    <button
                        className="md:hidden text-gray-300"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 space-y-4">
                        <button onClick={() => handleNavigation('home')} className="block w-full text-left text-gray-300 hover:text-blue-400 transition-colors">
                            Inicio
                        </button>
                        <button onClick={() => handleNavigation('about')} className="block w-full text-left text-gray-300 hover:text-blue-400 transition-colors">
                            Nosotros
                        </button>
                        <button onClick={() => handleNavigation('products')} className="block w-full text-left text-gray-300 hover:text-blue-400 transition-colors">
                            Soluciones
                        </button>
                        <button onClick={() => handleNavigation('ecosystem')} className="block w-full text-left text-gray-300 hover:text-blue-400 transition-colors">
                            Ecosistema
                        </button>
                        <button onClick={() => handleNavigation('contact')} className="block w-full text-left px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                            Contacto
                        </button>
                    </div>
                )}
            </nav>
        </header>
    );
}
