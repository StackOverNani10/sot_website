import { Mail, MessageSquare, Building2, Send } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

// Inicializa EmailJS con tu SERVICE_ID (obtén uno gratis en https://www.emailjs.com)
emailjs.init('34KPJb5eDeV5RSH2_');

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: 'general',
        message: ''
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            await emailjs.send(
                'service_ptfdt1i', // Tu Service ID de EmailJS
                'template_w297gcs', // Tu Template ID de EmailJS
                {
                    to_email: 'admin@sot.com.do',
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                }
            );

            alert('¡Mensaje enviado correctamente! Te contactaremos pronto.');
            setFormData({ name: '', email: '', subject: 'general', message: '' });
        } catch (error) {
            console.error('Error al enviar el mensaje:', error);
            alert('Error al enviar el mensaje. Por favor, intenta nuevamente.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="py-20 bg-transparent">
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Únete a SOT
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            ¿Tienes un proyecto en mente? ¿Quieres formar parte de nuestro ecosistema? Contáctanos
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                            <Mail className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                            <h3 className="font-semibold text-white mb-2">Email</h3>
                            <p className="text-sm text-gray-400">admin@sot.com.do</p>
                        </div>

                        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                            <MessageSquare className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                            <h3 className="font-semibold text-white mb-2">Soporte</h3>
                            <p className="text-sm text-gray-400">admin@sot.com.do</p>
                        </div>

                        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                            <Building2 className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                            <h3 className="font-semibold text-white mb-2">Alianzas</h3>
                            <p className="text-sm text-gray-400">admin@sot.com.do</p>
                        </div>
                    </div>

                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl shadow-xl p-8 md:p-12">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                                        Nombre completo
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all bg-gray-700/50 text-white placeholder-gray-400"
                                        placeholder="Tu nombre"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all bg-gray-700/50 text-white placeholder-gray-400"
                                        placeholder="tu@email.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-semibold text-gray-300 mb-2">
                                    Motivo de contacto
                                </label>
                                <select
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all bg-gray-700/50 text-white"
                                >
                                    <option value="general">Consulta general</option>
                                    <option value="demo">Solicitar demostración</option>
                                    <option value="partnership">Alianza estratégica</option>
                                    <option value="investment">Oportunidad de inversión</option>
                                    <option value="support">Soporte técnico</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                                    Mensaje
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all resize-none bg-gray-700/50 text-white placeholder-gray-400"
                                    placeholder="Cuéntanos más sobre tu proyecto o consulta..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed transition-all transform hover:scale-105 flex items-center justify-center space-x-2 font-semibold shadow-lg hover:shadow-xl"
                            >
                                <span>{isLoading ? 'Enviando...' : 'Enviar mensaje'}</span>
                                <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
