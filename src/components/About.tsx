import { Target, Eye, Heart, Lightbulb } from 'lucide-react';

export default function About() {
    return (
        <section id="about" className="py-20 bg-transparent">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Sobre Nosotros
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            SOT nace con una visión clara: transformar la gestión del tiempo mediante tecnología innovadora y accesible
                        </p>
                    </div>

                    <div className="mb-16 bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-700/50">
                        <h3 className="text-2xl font-bold text-white mb-4">Nuestra Historia</h3>
                        <p className="text-lg text-gray-300 leading-relaxed mb-4">
                            Service On Time es más que una empresa tecnológica. Es una filosofía centrada en la eficiencia, la optimización de procesos y el equilibrio perfecto entre tecnología y humanidad.
                        </p>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            Creemos que el tiempo es el recurso más valioso, y nuestra misión es ayudar a personas y empresas a aprovecharlo al máximo a través de soluciones digitales inteligentes, escalables y centradas en el usuario.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                            <Target className="w-12 h-12 text-blue-600 mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-3">Misión</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Desarrollar soluciones tecnológicas innovadoras que optimicen el tiempo, mejoren la eficiencia operativa y transformen la experiencia del usuario en múltiples industrias.
                            </p>
                        </div>

                        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                            <Eye className="w-12 h-12 text-blue-600 mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-3">Visión</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Ser la plataforma tecnológica de referencia en América Latina, reconocida por crear ecosistemas digitales que conectan servicios, optimizan procesos y generan valor real.
                            </p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl p-8 md:p-12 text-white">
                        <h3 className="text-2xl font-bold mb-8 text-center">Nuestros Valores</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex items-start space-x-4">
                                <Lightbulb className="w-6 h-6 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold mb-2">Innovación Constante</h4>
                                    <p className="text-blue-100">Buscamos siempre la mejor solución tecnológica para cada desafío</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <Target className="w-6 h-6 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold mb-2">Precisión y Eficiencia</h4>
                                    <p className="text-blue-100">Cada segundo cuenta, cada detalle importa</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <Heart className="w-6 h-6 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold mb-2">Centrados en las Personas</h4>
                                    <p className="text-blue-100">La tecnología debe servir y mejorar la vida humana</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <Eye className="w-6 h-6 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold mb-2">Transparencia y Confianza</h4>
                                    <p className="text-blue-100">Construimos relaciones duraderas basadas en la honestidad</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
