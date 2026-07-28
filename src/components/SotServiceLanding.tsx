import { Wrench, MapPin, ShieldCheck, Clock, CreditCard, MessageCircle, Star } from 'lucide-react';
import AppLandingPage from './AppLandingPage';
import type { AppLandingConfig } from './AppLandingPage';
import serviceHome from '../assets/screens/service-home.png';
import serviceTracking from '../assets/screens/service-tracking.png';
import serviceProfile from '../assets/screens/service-profile.png';

const theme = {
    accentFrom: 'from-blue-500',
    accentTo: 'to-cyan-500',
    accentText: 'text-blue-400',
    accentBg: 'bg-blue-500',
    accentSoftBg: 'bg-blue-500/10',
    accentBorder: 'border-blue-500/30',
};

const config: AppLandingConfig = {
    eyebrow: 'App para clientes',
    headline: 'Servicios a domicilio,',
    highlight: 'a tiempo y sin complicaciones',
    description:
        'Conecta en minutos con técnicos y profesionales verificados cerca de ti. Solicita, sigue en vivo y paga desde tu celular, todo en una sola app.',
    icon: Wrench,
    theme,
    badges: ['Profesionales verificados', 'Pagos seguros', 'Soporte 24/7'],
    forWhom: 'Pensada para quienes valoran su tiempo y quieren resolver cualquier necesidad del hogar con un par de toques',
    features: [
        {
            icon: MapPin,
            title: 'Conexión instantánea',
            description: 'Encuentra profesionales disponibles cerca de ti y recibe atención en minutos, no en días.',
        },
        {
            icon: ShieldCheck,
            title: 'Verificación real',
            description: 'Cada técnico pasa por un proceso de validación de identidad y experiencia antes de unirse.',
        },
        {
            icon: Clock,
            title: 'Seguimiento en vivo',
            description: 'Mira en tiempo real cuándo llega tu profesional, igual que sigues un pedido o un viaje.',
        },
        {
            icon: CreditCard,
            title: 'Pagos integrados',
            description: 'Paga directamente desde la app de forma segura, sin manejar efectivo ni sorpresas.',
        },
        {
            icon: Star,
            title: 'Calificaciones verificadas',
            description: 'Elige con confianza basado en reseñas reales de otros usuarios de la comunidad SOT.',
        },
        {
            icon: MessageCircle,
            title: 'Chat directo',
            description: 'Coordina detalles del servicio por chat sin salir de la aplicación.',
        },
    ],
    steps: [
        { title: 'Solicita', description: 'Describe qué necesitas y en qué zona te encuentras.' },
        { title: 'Conecta', description: 'Un profesional cercano y calificado acepta tu solicitud.' },
        { title: 'Sigue', description: 'Monitorea la llegada y el avance del servicio en tiempo real.' },
        { title: 'Paga y califica', description: 'Cierra el servicio con un pago seguro y deja tu reseña.' },
    ],
    screens: {
        primary: serviceHome,
        secondary: serviceTracking,
        tertiary: serviceProfile,
    },
    ctaTitle: '¿Listo para ahorrar tiempo?',
    ctaDescription: 'Sé de los primeros en descargar SOT Service cuando esté disponible. Déjanos tu contacto y te avisamos.',
};

export default function SotServiceLanding() {
    return <AppLandingPage config={config} />;
}
