import { Linkedin, Instagram, Github } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <div className="w-16 h-16 flex items-center justify-center">
                            <img src="https://res.cloudinary.com/deqtp71ut/image/upload/v1760054666/SOT/sot_logo.png" alt="SOT Logo" className="w-full h-full object-contain" />
                        </div>
                        <p className="text-gray-400 mb-4 max-w-md">
                            Service On Time - Tecnología que optimiza el tiempo, potencia la eficiencia y transforma experiencias.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.linkedin.com/in/sotplatform" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="https://www.tiktok.com/@sotplatform?is_from_webapp=1&sender_device=pc" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                                <FontAwesomeIcon icon={faTiktok} />
                            </a>
                            <a href="https://www.instagram.com/sotplatform?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="https://github.com/StackOverNani10/sot_website" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                                <Github className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-4">Enlaces Rápidos</h3>
                        <ul className="space-y-2">
                            <li>
                                <button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-white transition-colors">
                                    Inicio
                                </button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-white transition-colors">
                                    Nosotros
                                </button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection('products')} className="text-gray-400 hover:text-white transition-colors">
                                    Soluciones
                                </button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection('ecosystem')} className="text-gray-400 hover:text-white transition-colors">
                                    Ecosistema
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-4">Productos</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    SOT Menu
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    SOT Service
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    SOT Future
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    API y Documentación
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-400 text-sm">
                            © {currentYear} SOT - Service On Time. Todos los derechos reservados.
                        </p>
                        <div className="flex space-x-6 text-sm">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                Política de Privacidad
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                Términos de Servicio
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                Cookies
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
