import { useNavigate } from 'react-router-dom';
import { UtensilsCrossed, Wrench, Briefcase, Sparkles, Zap, ArrowRight } from 'lucide-react';

const dedicatedLandingPages: Record<string, string> = {
    'sot-service': '/sot-service',
    'sot-provider': '/sot-provider',
};

export default function Products() {
    const navigate = useNavigate();

    const products = [
        {
            id: 'sot-menu',
            icon: UtensilsCrossed,
            name: 'SOT Menu',
            tagline: 'Digitalización Gastronómica',
            description: 'Plataforma web completa para restaurantes y food trucks que digitaliza menús, pedidos y pagos en tiempo real.',
            color: 'from-amber-500 to-orange-600',
            features: ['Menú digital interactivo', 'Pedidos en línea', 'Gestión de inventario', 'Pagos integrados']
        },
        {
            id: 'sot-service',
            icon: Wrench,
            name: 'SOT Service',
            tagline: 'Servicios a Domicilio · App Cliente',
            description: 'App móvil que conecta usuarios con técnicos y profesionales de servicios, optimizando tiempos y garantizando calidad.',
            color: 'from-blue-500 to-cyan-600',
            features: ['Conexión instantánea', 'Seguimiento en tiempo real', 'Calificaciones verificadas', 'Pagos seguros']
        },
        {
            id: 'sot-provider',
            icon: Briefcase,
            name: 'SOT Provider',
            tagline: 'Servicios a Domicilio · App Profesional',
            description: 'App móvil para técnicos y profesionales que quieren gestionar solicitudes, agenda y cobros desde su celular.',
            color: 'from-violet-500 to-indigo-600',
            features: ['Solicitudes en tiempo real', 'Gestión de agenda', 'Pagos directos', 'Estadísticas de ingresos']
        },
        {
            id: 'sot-move',
            icon: Zap,
            name: 'SOT Move',
            tagline: 'Movilidad Eléctrica',
            description: 'Aplicación móvil para renta de scooters eléctricos que conecta usuarios con vehículos disponibles en tiempo real, promoviendo movilidad sostenible.',
            color: 'from-green-500 to-emerald-600',
            features: ['Renta en tiempo real', 'Seguimiento GPS', 'Pagos móviles', 'Estaciones inteligentes']
        },
        {
            id: 'sot-future',
            icon: Sparkles,
            name: 'SOT Future',
            tagline: 'Próximas Innovaciones',
            description: 'Estamos desarrollando nuevas soluciones que expandirán el ecosistema SOT hacia más industrias y necesidades.',
            color: 'from-purple-500 to-pink-600',
            features: ['Inteligencia artificial', 'IoT integrado', 'Blockchain', 'Analítica avanzada']
        }
    ];

    const handleLearnMore = (productId: string) => {
        navigate(dedicatedLandingPages[productId] ?? `/producto/${productId}`);
    };

    return (
        <section id="products" className="py-20 bg-transparent">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Nuestras Soluciones
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Productos diseñados para optimizar tu negocio y mejorar la experiencia de tus clientes
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product) => {
                            const Icon = product.icon;
                            return (
                                <div
                                    key={product.id}
                                    className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300"
                                >
                                    <div className={`h-48 bg-gradient-to-br ${product.color} flex items-center justify-center relative overflow-hidden`}>
                                        <div className="absolute inset-0 bg-black/10"></div>
                                        <Icon className="w-20 h-20 text-white relative z-10" />
                                    </div>

                                    <div className="p-6">
                                        <h3 className="text-2xl font-bold text-white mb-2">
                                            {product.name}
                                        </h3>
                                        <p className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
                                            {product.tagline}
                                        </p>
                                        <p className="text-gray-300 mb-6 leading-relaxed">
                                            {product.description}
                                        </p>

                                        <div className="space-y-2 mb-6">
                                            {product.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                                                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                                                    <span>{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <button
                                            onClick={() => handleLearnMore(product.id)}
                                            className="w-full py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2"
                                        >
                                            <span>Conocer más</span>
                                            <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
