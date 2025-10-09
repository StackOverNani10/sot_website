import { Network, Link2, Cpu, Globe } from 'lucide-react';

export default function Ecosystem() {
    return (
        <section id="ecosystem" className="py-20 bg-transparent">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Ecosistema SOT
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Todos nuestros productos se interconectan bajo una filosofía única: eficiencia, innovación y experiencia del usuario
                        </p>
                    </div>

                    <div className="mb-16">
                        <div className="relative">
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl opacity-30"></div>

                            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 text-center border-2 border-gray-700/50">
                                    <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-white font-bold text-xl">SM</span>
                                    </div>
                                    <h3 className="font-bold text-white mb-2">SOT Menu</h3>
                                    <p className="text-sm text-gray-400">Restaurantes</p>
                                </div>

                                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 text-center border-2 border-gray-700/50">
                                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-white font-bold text-xl">SS</span>
                                    </div>
                                    <h3 className="font-bold text-white mb-2">SOT Service</h3>
                                    <p className="text-sm text-gray-400">Servicios</p>
                                </div>

                                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 text-center border-2 border-gray-700/50">
                                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-white font-bold text-xl">SM</span>
                                    </div>
                                    <h3 className="font-bold text-white mb-2">SOT Move</h3>
                                    <p className="text-sm text-gray-400">Movilidad Eléctrica</p>
                                </div>

                                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 text-center border-2 border-gray-700/50">
                                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-white font-bold text-xl">SF</span>
                                    </div>
                                    <h3 className="font-bold text-white mb-2">SOT Future</h3>
                                    <p className="text-sm text-gray-400">Innovación</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                            <Network className="w-10 h-10 text-blue-600 mb-4" />
                            <h3 className="text-xl font-bold text-white mb-3">Interconexión Inteligente</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Nuestros productos comparten una infraestructura común que permite sincronización de datos, usuarios unificados y experiencias fluidas entre plataformas.
                            </p>
                        </div>

                        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                            <Link2 className="w-10 h-10 text-blue-600 mb-4" />
                            <h3 className="text-xl font-bold text-white mb-3">API Unificada</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Desarrolladores y empresas pueden integrar múltiples servicios SOT mediante una única API, simplificando el desarrollo y reduciendo tiempos de implementación.
                            </p>
                        </div>

                        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                            <Cpu className="w-10 h-10 text-blue-600 mb-4" />
                            <h3 className="text-xl font-bold text-white mb-3">Inteligencia Compartida</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Los datos anónimos y agregados entre plataformas alimentan sistemas de IA que mejoran continuamente la experiencia y precisión de nuestros servicios.
                            </p>
                        </div>

                        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                            <Globe className="w-10 h-10 text-blue-600 mb-4" />
                            <h3 className="text-xl font-bold text-white mb-3">Escalabilidad Global</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Arquitectura diseñada para crecer, expandirse a nuevos mercados y soportar millones de transacciones simultáneas sin comprometer el rendimiento.
                            </p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 md:p-12 text-white text-center">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                            ¿Quieres integrar SOT en tu negocio?
                        </h3>
                        <p className="text-lg mb-6 text-blue-100 max-w-2xl mx-auto">
                            Descubre cómo nuestro ecosistema puede transformar tu operación y mejorar la experiencia de tus clientes
                        </p>
                        <button className="px-8 py-4 bg-white text-blue-800 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 font-semibold shadow-lg">
                            Solicitar información
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
