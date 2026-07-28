import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

/**
 * Términos de Servicio de SOT — apps SOT Service (cliente) y SOT Provider
 * (proveedor) y el sitio web. URL pública: /terminos
 */
export default function TermsOfService() {
    const updated = '25 de julio de 2026';
    const contactEmail = 'serviceontime.sot@gmail.com';

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-gray-200">
            <div className="max-w-3xl mx-auto px-6 py-12">
                <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8">
                    <ArrowLeft className="w-4 h-4" /> Volver al inicio
                </Link>

                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Términos de Servicio</h1>
                <p className="text-gray-400 mb-10">Última actualización: {updated}</p>

                <div className="space-y-8 leading-relaxed text-[15px]">
                    <section>
                        <p>
                            Estos Términos de Servicio ("Términos") regulan el uso de las aplicaciones{' '}
                            <strong>SOT Service</strong> (clientes) y <strong>SOT Provider</strong> (proveedores) y del
                            sitio <strong>sot.com.do</strong> (los "Servicios"), operados por{' '}
                            <strong>SOT — Service On Time</strong> ("SOT"). Al crear una cuenta o usar los Servicios,
                            aceptas estos Términos. Si no estás de acuerdo, no utilices los Servicios.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">1. Qué es SOT</h2>
                        <p>
                            SOT es una <strong>plataforma tecnológica que conecta</strong> a clientes que necesitan
                            servicios a domicilio con proveedores independientes que los ofrecen. SOT{' '}
                            <strong>no presta directamente</strong> los servicios ni es empleador de los proveedores;
                            actúa como intermediario que facilita el contacto, el seguimiento y el pago.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">2. Cuentas y elegibilidad</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Debes ser mayor de 18 años y proporcionar información veraz y actualizada.</li>
                            <li>Eres responsable de mantener la confidencialidad de tus credenciales y de la actividad de tu cuenta.</li>
                            <li>Los proveedores deben completar el proceso de verificación de identidad y, cuando aplique, de certificaciones.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">3. Obligaciones de los proveedores</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Prestar los servicios de forma profesional, segura y conforme a la ley.</li>
                            <li>Mantener sus datos, disponibilidad y ubicación actualizados durante los servicios activos.</li>
                            <li>Cumplir con las tarifas, comisiones y liquidaciones acordadas con SOT.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">4. Obligaciones de los clientes</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Proporcionar información correcta sobre el servicio solicitado y la ubicación.</li>
                            <li>Pagar el monto acordado por los servicios recibidos.</li>
                            <li>Tratar a los proveedores con respeto y facilitar condiciones seguras para el trabajo.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">5. Pagos, comisiones y liquidaciones</h2>
                        <p>
                            El precio de cada servicio incluye el valor del servicio, los impuestos aplicables (ITBIS) y
                            una tarifa de la plataforma. SOT retiene una comisión por conectar a las partes. En pagos en
                            efectivo, el proveedor cobra directamente al cliente y adeuda a SOT la comisión e impuestos
                            correspondientes, que debe liquidar según los plazos y límites configurados. Los pagos con
                            tarjeta se procesan mediante un proveedor de pagos externo.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">6. Cancelaciones y penalizaciones</h2>
                        <p>
                            Las cancelaciones fuera de las condiciones permitidas pueden generar penalizaciones o
                            reembolsos parciales. La reincidencia en cancelaciones o incumplimientos puede derivar en la
                            suspensión de la cuenta, según las reglas vigentes en la app.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">7. Calificaciones y conducta</h2>
                        <p>
                            Clientes y proveedores pueden calificarse mutuamente. Está prohibido publicar contenido
                            falso, ofensivo o ilícito, así como cualquier conducta fraudulenta o que ponga en riesgo la
                            seguridad de otros usuarios.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">8. Limitación de responsabilidad</h2>
                        <p>
                            SOT facilita la conexión entre las partes pero <strong>no garantiza</strong> la calidad,
                            idoneidad ni resultado de los servicios prestados por los proveedores, quienes son los únicos
                            responsables de su trabajo. En la máxima medida permitida por la ley, SOT no será responsable
                            por daños indirectos o incidentales derivados del uso de los Servicios.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">9. Suspensión y terminación</h2>
                        <p>
                            Podemos suspender o cancelar cuentas que incumplan estos Términos, la ley o que representen un
                            riesgo para la comunidad. Puedes eliminar tu cuenta en cualquier momento desde la app.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">10. Propiedad intelectual</h2>
                        <p>
                            La marca SOT, el software, el diseño y los contenidos de los Servicios son propiedad de SOT y
                            están protegidos por la ley. No se permite su uso no autorizado.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">11. Cambios y ley aplicable</h2>
                        <p>
                            Podemos actualizar estos Términos; la versión vigente se publicará en esta página. Estos
                            Términos se rigen por las leyes de la <strong>República Dominicana</strong> y cualquier
                            disputa se someterá a sus tribunales competentes.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">12. Contacto</h2>
                        <p>
                            Para consultas sobre estos Términos, escríbenos a{' '}
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
