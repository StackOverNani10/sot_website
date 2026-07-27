import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

/**
 * Política de Privacidad de SOT — cubre las apps SOT Service (cliente) y
 * SOT Provider (proveedor) y el sitio web. URL pública: /privacidad
 * (requerida por Google Play y App Store).
 */
export default function PrivacyPolicy() {
    const updated = '25 de julio de 2026';
    const contactEmail = 'serviceontime.sot@gmail.com';

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-gray-200">
            <div className="max-w-3xl mx-auto px-6 py-12">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4" /> Volver al inicio
                </Link>

                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    Política de Privacidad
                </h1>
                <p className="text-gray-400 mb-10">Última actualización: {updated}</p>

                <div className="space-y-8 leading-relaxed text-[15px]">
                    <section>
                        <p>
                            Esta Política de Privacidad describe cómo <strong>SOT — Service On Time</strong> ("SOT",
                            "nosotros") recopila, usa y protege tu información cuando utilizas nuestras aplicaciones
                            móviles <strong>SOT Service</strong> (app de clientes) y <strong>SOT Provider</strong>
                            (app de proveedores), así como el sitio <strong>sot.com.do</strong> (en conjunto, los
                            "Servicios"). Al usar los Servicios, aceptas las prácticas aquí descritas.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">1. Información que recopilamos</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <strong>Datos de cuenta:</strong> nombre, correo electrónico, número de teléfono y
                                contraseña (almacenada de forma cifrada). Si inicias sesión con Google, recibimos tu
                                nombre y correo asociados a esa cuenta.
                            </li>
                            <li>
                                <strong>Ubicación:</strong> en la app de clientes usamos tu ubicación (mientras usas la
                                app) para mostrarte proveedores y servicios cercanos y ubicar la dirección del servicio.
                                En la app de proveedores usamos la ubicación, incluida la ubicación en segundo plano
                                cuando estás disponible o en camino, para asignarte solicitudes cercanas y compartir tu
                                progreso con el cliente durante un servicio activo.
                            </li>
                            <li>
                                <strong>Cámara y fotos:</strong> para tu foto de perfil y, en el caso de proveedores,
                                para cargar documentos de identidad y certificaciones. Solo accedemos cuando lo autorizas.
                            </li>
                            <li>
                                <strong>Datos de pago:</strong> método de pago y montos de cada servicio. Los pagos con
                                tarjeta se procesan a través de un proveedor de pagos; <strong>no almacenamos los datos
                                completos de tu tarjeta</strong> en nuestros servidores.
                            </li>
                            <li>
                                <strong>Datos del servicio y comunicaciones:</strong> detalles de las solicitudes,
                                mensajes del chat entre cliente y proveedor, calificaciones y reseñas.
                            </li>
                            <li>
                                <strong>Datos del dispositivo y uso:</strong> identificadores del dispositivo, token de
                                notificaciones push (Firebase Cloud Messaging) e información de diagnóstico y uso para
                                seguridad y mejora del servicio.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">2. Cómo usamos tu información</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Conectar clientes con proveedores y gestionar el despacho de solicitudes.</li>
                            <li>Procesar pagos, comisiones y liquidaciones.</li>
                            <li>Enviarte notificaciones sobre el estado del servicio y mensajes.</li>
                            <li>Brindar soporte, prevenir fraude y abuso, y garantizar la seguridad.</li>
                            <li>Cumplir obligaciones legales y mejorar los Servicios.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">3. Con quién compartimos</h2>
                        <p className="mb-3">
                            No vendemos tu información personal. La compartimos únicamente en estos casos:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <strong>Entre cliente y proveedor</strong> lo necesario para prestar el servicio (por
                                ejemplo, nombre, ubicación aproximada y datos de contacto una vez aceptada la solicitud).
                            </li>
                            <li>
                                <strong>Proveedores tecnológicos:</strong> Google/Firebase (autenticación, notificaciones,
                                analítica y Google Maps) y nuestro procesador de pagos, que tratan los datos por nuestra
                                cuenta bajo sus propias políticas.
                            </li>
                            <li>
                                <strong>Autoridades</strong> cuando la ley lo exija o para proteger derechos y seguridad.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">4. Conservación de datos</h2>
                        <p>
                            Conservamos tu información mientras tu cuenta esté activa y durante el tiempo necesario para
                            cumplir fines legales, contables y de resolución de disputas. Al eliminar tu cuenta,
                            eliminamos o anonimizamos tus datos personales, salvo lo que debamos conservar por ley.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">5. Tus derechos</h2>
                        <p className="mb-3">
                            Conforme a la Ley No. 172-13 de la República Dominicana sobre protección de datos personales,
                            puedes ejercer los derechos de acceso, rectificación, actualización y supresión de tus datos:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                Desde la app puedes <strong>editar tu perfil</strong>, <strong>exportar tus datos</strong> y
                                <strong> eliminar tu cuenta</strong> en la sección de configuración/privacidad.
                            </li>
                            <li>
                                También puedes escribirnos a <a className="text-blue-400 hover:underline" href={`mailto:${contactEmail}`}>{contactEmail}</a> para
                                cualquier solicitud relacionada con tus datos.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">6. Seguridad</h2>
                        <p>
                            Aplicamos medidas técnicas y organizativas razonables (cifrado en tránsito, control de acceso
                            y almacenamiento seguro de credenciales) para proteger tu información. Ningún sistema es 100%
                            infalible, pero trabajamos continuamente para resguardar tus datos.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">7. Menores de edad</h2>
                        <p>
                            Los Servicios están dirigidos a personas mayores de 18 años. No recopilamos de forma
                            intencional datos de menores; si detectamos una cuenta de un menor, la eliminaremos.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">8. Cambios a esta política</h2>
                        <p>
                            Podemos actualizar esta Política de Privacidad. Publicaremos la versión vigente en esta página
                            y actualizaremos la fecha de "última actualización". El uso continuo de los Servicios implica
                            la aceptación de los cambios.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">9. Contacto</h2>
                        <p>
                            Si tienes preguntas sobre esta política o sobre el tratamiento de tus datos, escríbenos a{' '}
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
