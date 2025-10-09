import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Construction } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import { useEffect } from 'react';

export default function ProductDetail() {
    const { productId } = useParams();
    const navigate = useNavigate();

    // Función para navegar de vuelta a la sección de productos
    const goBackToProducts = () => {
        navigate('/');
        // Pequeño delay para permitir que la navegación ocurra antes del scroll
        setTimeout(() => {
            const productsElement = document.getElementById('products');
            if (productsElement) {
                productsElement.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    // Efecto para asegurar que el scroll esté en la parte superior cuando se carga la página
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Datos de productos (igual que en Products.tsx pero con más detalles)
    const products = {
        'sot-menu': {
            name: 'SOT Menu',
            tagline: 'Digitalización Gastronómica',
            fullDescription: 'SOT Menu es una plataforma web completa diseñada específicamente para restaurantes y food trucks que buscan digitalizar su operación. Esta solución integral permite gestionar menús digitales interactivos, procesar pedidos en línea y manejar pagos de forma segura y eficiente.',
            icon: '🍽️',
            color: 'from-amber-500 to-orange-600',
            features: [
                'Menú digital interactivo con imágenes y descripciones',
                'Sistema de pedidos en línea 24/7',
                'Gestión inteligente de inventario',
                'Procesamiento de pagos integrado',
                'Panel de administración completo',
                'Reportes y analíticas en tiempo real'
            ],
            benefits: [
                'Aumenta las ventas con pedidos online',
                'Reduce tiempos de espera',
                'Minimiza errores en pedidos',
                'Mejora la experiencia del cliente'
            ]
        },
        'sot-service': {
            name: 'SOT Service',
            tagline: 'Servicios a Domicilio',
            fullDescription: 'SOT Service es una aplicación móvil innovadora que conecta usuarios con técnicos y profesionales de servicios calificados. Esta plataforma optimiza el proceso de solicitud de servicios a domicilio, garantizando tiempos de respuesta rápidos y calidad verificada.',
            icon: '🔧',
            color: 'from-blue-500 to-cyan-600',
            features: [
                'Conexión instantánea con profesionales',
                'Seguimiento en tiempo real del servicio',
                'Sistema de calificaciones y reseñas',
                'Pagos seguros y protegidos',
                'Historial completo de servicios',
                'Soporte técnico 24/7'
            ],
            benefits: [
                'Encuentra profesionales cerca de ti',
                'Ahorra tiempo en búsqueda',
                'Garantía de calidad verificada',
                'Precios transparentes'
            ]
        },
        'sot-move': {
            name: 'SOT Move',
            tagline: 'Movilidad Eléctrica',
            fullDescription: 'SOT Move es una aplicación móvil revolucionaria para la renta de scooters eléctricos que promueve la movilidad sostenible en entornos urbanos. Esta solución conecta usuarios con vehículos disponibles en tiempo real, ofreciendo una alternativa ecológica y eficiente al transporte tradicional.',
            icon: '⚡',
            color: 'from-green-500 to-emerald-600',
            features: [
                'Renta de scooters eléctricos en tiempo real',
                'Seguimiento GPS de vehículos',
                'Sistema de pagos móviles integrado',
                'Red de estaciones inteligentes',
                'Mantenimiento predictivo',
                'Seguro incluido en cada viaje'
            ],
            benefits: [
                'Movilidad sostenible y ecológica',
                'Ahorro en costos de transporte',
                'Disponibilidad 24/7',
                'Contribución al medio ambiente'
            ]
        },
        'sot-future': {
            name: 'SOT Future',
            tagline: 'Próximas Innovaciones',
            fullDescription: 'SOT Future representa nuestra visión de expansión hacia nuevas industrias y necesidades emergentes. Estamos desarrollando soluciones innovadoras que incorporan las últimas tecnologías para crear experiencias únicas y transformar la manera en que interactuamos con la tecnología.',
            icon: '✨',
            color: 'from-purple-500 to-pink-600',
            features: [
                'Integración de inteligencia artificial',
                'Dispositivos IoT conectados',
                'Tecnología blockchain para seguridad',
                'Analítica avanzada y machine learning',
                'Interfaces de usuario intuitivas',
                'Automatización inteligente de procesos'
            ],
            benefits: [
                'Tecnología de vanguardia',
                'Soluciones personalizadas',
                'Escalabilidad empresarial',
                'Innovación continua'
            ]
        }
    };

    const product = products[productId as keyof typeof products];

    if (!product) {
        return (
            <div className="h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800">
                <Header />
                <div className="flex items-center justify-center h-full px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl font-bold text-white mb-8">Producto no encontrado</h1>
                        <button
                            onClick={goBackToProducts}
                            className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 px-6 py-3 rounded-full border border-blue-400/30 hover:border-blue-400/60 transition-all"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            <span>Volver a productos</span>
                        </button>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800">
            <Header />

            {/* Hero Section */}
            <section className={`py-20 bg-gradient-to-br ${product.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-6xl mx-auto">
                        <button
                            onClick={goBackToProducts}
                            className="inline-flex items-center space-x-2 text-white/80 hover:text-white mb-8 mt-12 transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            <span>Volver a productos</span>
                        </button>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="text-6xl mb-6">{product.icon}</div>
                                <h1 className="text-5xl font-bold text-white mb-4">
                                    {product.name}
                                </h1>
                                <p className="text-xl text-white/90 mb-6">
                                    {product.tagline}
                                </p>
                                <p className="text-lg text-white/80 leading-relaxed">
                                    {product.fullDescription}
                                </p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8">
                                <div className="flex items-center space-x-3 mb-6">
                                    <Construction className="w-8 h-8 text-yellow-400" />
                                    <h3 className="text-2xl font-bold text-white">
                                        Página en Construcción
                                    </h3>
                                </div>
                                <p className="text-white/80 mb-6">
                                    Estamos trabajando en crear contenido detallado y funcionalidades específicas para {product.name}.
                                    Esta página incluirá casos de uso, demos interactivas y toda la información técnica necesaria.
                                </p>
                                <div className="bg-yellow-400/20 border border-yellow-400/30 rounded-2xl p-4">
                                    <p className="text-yellow-200 text-sm">
                                        🚧 <strong>Próximamente:</strong> Contenido completo, imágenes, videos demostrativos y enlaces para registrarse.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gray-800/30">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-white text-center mb-12">
                            Características Principales
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            {product.features.map((feature, index) => (
                                <div key={index} className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                                        <p className="text-gray-300">{feature}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h2 className="text-3xl font-bold text-white text-center mb-12">
                            Beneficios
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {product.benefits.map((benefit, index) => (
                                <div key={index} className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                                        <p className="text-gray-300">{benefit}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-transparent">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="bg-gray-800/50 border border-gray-700/50 rounded-3xl p-12">
                            <Construction className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
                            <h2 className="text-3xl font-bold text-white mb-4">
                                ¿Interesado en {product.name}?
                            </h2>
                            <p className="text-xl text-gray-300 mb-8">
                                Pronto podrás registrarte para acceso temprano y ser de los primeros en conocer todas las funcionalidades.
                            </p>
                            <div className="bg-blue-600/20 border border-blue-500/30 rounded-2xl p-6">
                                <p className="text-blue-200">
                                    📧 <strong>Contacto:</strong> Para información personalizada o partnerships, escríbenos a{' '}
                                    <a href="mailto:info@sot.com" className="text-blue-400 hover:text-blue-300 underline">
                                        info@sot.com
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
