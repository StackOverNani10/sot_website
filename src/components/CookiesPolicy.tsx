import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

/** Política de Cookies del sitio sot.com.do. URL pública: /cookies */
export default function CookiesPolicy() {
    const updated = '25 de julio de 2026';
    const contactEmail = 'serviceontime.sot@gmail.com';

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-gray-200">
            <div className="max-w-3xl mx-auto px-6 py-12">
                <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8">
                    <ArrowLeft className="w-4 h-4" /> Volver al inicio
                </Link>

                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Política de Cookies</h1>
                <p className="text-gray-400 mb-10">Última actualización: {updated}</p>

                <div className="space-y-8 leading-relaxed text-[15px]">
                    <section>
                        <p>
                            Esta Política de Cookies explica cómo el sitio <strong>sot.com.do</strong> utiliza cookies y
                            tecnologías similares. Para el tratamiento de tus datos personales, consulta también nuestra{' '}
                            <Link to="/privacidad" className="text-blue-400 hover:underline">Política de Privacidad</Link>.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">1. ¿Qué son las cookies?</h2>
                        <p>
                            Las cookies son pequeños archivos que un sitio guarda en tu dispositivo para recordar
                            información sobre tu visita. También usamos tecnologías equivalentes como el almacenamiento
                            local del navegador.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">2. Tipos de cookies que usamos</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <strong>Esenciales:</strong> necesarias para el funcionamiento del sitio (navegación,
                                preferencias básicas). No pueden desactivarse.
                            </li>
                            <li>
                                <strong>Analíticas:</strong> nos ayudan a entender cómo se usa el sitio para mejorarlo
                                (por ejemplo, mediante Google/Firebase Analytics). Son anónimas o agregadas.
                            </li>
                            <li>
                                <strong>De terceros:</strong> servicios como Google pueden establecer cookies al cargar
                                mapas, fuentes o herramientas incrustadas, bajo sus propias políticas.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">3. Cómo controlar las cookies</h2>
                        <p>
                            Puedes aceptar, bloquear o eliminar las cookies desde la configuración de tu navegador.
                            Ten en cuenta que desactivar algunas cookies puede afectar el funcionamiento del sitio.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">4. Cambios</h2>
                        <p>
                            Podemos actualizar esta Política de Cookies. Publicaremos la versión vigente en esta página
                            con su fecha de actualización.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">5. Contacto</h2>
                        <p>
                            Si tienes dudas sobre el uso de cookies, escríbenos a{' '}
                            <a className="text-blue-400 hover:underline" href={`mailto:${contactEmail}`}>{contactEmail}</a>.
                        </p>
                    </section>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-6 text-sm text-gray-500">
                    © {new Date().getFullYear()} SOT — Service On Time. Todos los derechos reservados.
                </div>
            </div>
        </div>
    );
}
