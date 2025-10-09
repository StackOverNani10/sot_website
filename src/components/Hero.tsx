import { ArrowRight, Clock, Zap, Target } from 'lucide-react';

export default function Hero() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-transparent pt-20">
            <div className="container mx-auto px-6 py-20">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="mb-8 flex justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-blue-600 blur-2xl opacity-20 rounded-full"></div>
                            <Clock className="w-24 h-24 text-blue-600 relative animate-pulse" />
                        </div>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                        Service On Time
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                        Tecnología que optimiza el tiempo, potencia la eficiencia y transforma experiencias
                    </p>

                    <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
                        Desarrollamos soluciones digitales innovadoras que llegan a tiempo, optimizan procesos y mejoran la vida de las personas
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                        <button
                            onClick={() => scrollToSection('products')}
                            className="px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center space-x-2 shadow-lg hover:shadow-xl"
                        >
                            <span>Explorar Soluciones</span>
                            <ArrowRight className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => scrollToSection('about')}
                            className="px-8 py-4 bg-gray-800 text-gray-100 rounded-full hover:bg-gray-700 transition-all border border-gray-600 shadow-md hover:shadow-lg"
                        >
                            Conocer más
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow border border-gray-700/50">
                            <Zap className="w-8 h-8 text-blue-600 mb-3 mx-auto" />
                            <h3 className="font-semibold text-white mb-2">Eficiencia</h3>
                            <p className="text-sm text-gray-300">Optimización de procesos en tiempo real</p>
                        </div>
                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow border border-gray-700/50">
                            <Clock className="w-8 h-8 text-blue-600 mb-3 mx-auto" />
                            <h3 className="font-semibold text-white mb-2">Precisión</h3>
                            <p className="text-sm text-gray-300">Siempre a tiempo, siempre confiable</p>
                        </div>
                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow border border-gray-700/50">
                            <Target className="w-8 h-8 text-blue-600 mb-3 mx-auto" />
                            <h3 className="font-semibold text-white mb-2">Innovación</h3>
                            <p className="text-sm text-gray-300">Tecnología de vanguardia con propósito</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
