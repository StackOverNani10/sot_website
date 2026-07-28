import { Briefcase, TrendingUp, Calendar, Wallet, BarChart3, Award, Bell, Wrench } from 'lucide-react';
import AppLandingPage from './AppLandingPage';
import type { AppLandingConfig } from './AppLandingPage';

const theme = {
    accentFrom: 'from-violet-500',
    accentTo: 'to-indigo-600',
    accentText: 'text-violet-400',
    accentBg: 'bg-violet-500',
    accentSoftBg: 'bg-violet-500/10',
    accentBorder: 'border-violet-500/30',
};

const config: AppLandingConfig = {
    eyebrow: 'App para profesionales',
    headline: 'Convierte tu talento en',
    highlight: 'ingresos, cuando tú quieras',
    description:
        'La app pensada para técnicos y profesionales de servicios. Recibe solicitudes cerca de ti, gestiona tu agenda y cobra al instante, todo desde tu celular.',
    icon: Briefcase,
    theme,
    badges: ['Cobros inmediatos', 'Cero comisiones ocultas', 'Soporte dedicado'],
    forWhom: 'Diseñada para profesionales independientes que quieren más clientes, más control y más ingresos',
    features: [
        {
            icon: Bell,
            title: 'Solicitudes en tiempo real',
            description: 'Recibe notificaciones de nuevos trabajos disponibles cerca de tu ubicación al instante.',
        },
        {
            icon: Calendar,
            title: 'Gestiona tu agenda',
            description: 'Define tus horarios y disponibilidad, y decide cuándo y cuánto trabajar.',
        },
        {
            icon: Wallet,
            title: 'Pagos directos y rápidos',
            description: 'Cobra tus servicios desde la app y recibe tus ingresos sin demoras ni complicaciones.',
        },
        {
            icon: Award,
            title: 'Reputación profesional',
            description: 'Construye un perfil con reseñas verificadas que te ayude a conseguir más clientes.',
        },
        {
            icon: BarChart3,
            title: 'Estadísticas de ingresos',
            description: 'Visualiza tu desempeño, tus ganancias y el crecimiento de tu negocio en un solo panel.',
        },
        {
            icon: TrendingUp,
            title: 'Más oportunidades',
            description: 'Accede a una red creciente de clientes que buscan profesionales confiables como tú.',
        },
    ],
    steps: [
        { title: 'Regístrate', description: 'Crea tu perfil profesional y verifica tu identidad y experiencia.' },
        { title: 'Recibe solicitudes', description: 'Te notificamos cuando haya trabajos disponibles en tu zona.' },
        { title: 'Brinda el servicio', description: 'Acepta, coordina con el cliente y realiza el trabajo.' },
        { title: 'Cobra al instante', description: 'Recibe tu pago de forma segura apenas termines el servicio.' },
    ],
    home: {
        greeting: 'Carlos',
        items: [
            { icon: Wrench, title: 'Nueva solicitud: Plomería', subtitle: 'A 1.2 km · RD$ 900', status: 'Nuevo' },
            { icon: Calendar, title: 'Servicio agendado', subtitle: 'Mañana, 10:00 AM', status: 'Confirmado' },
            { icon: Wallet, title: 'Pago recibido', subtitle: 'Reparación eléctrica', status: 'RD$ 850' },
        ],
    },
    tracking: {
        name: 'Daniela Ruiz',
        role: 'Cliente en Piantini',
        rating: '4.8',
        eta: 'A 8 minutos del cliente',
        statusLabel: 'En camino al servicio',
    },
    profile: {
        name: 'Carlos Pérez',
        role: 'Técnico en plomería',
        rating: '4.9',
        stats: [
            { label: 'Trabajos', value: '86' },
            { label: 'Este mes', value: 'RD$ 24k' },
            { label: 'Reseñas', value: '4.9' },
        ],
        activity: [
            { label: 'Reparación de fuga', amount: '+RD$ 1,200', time: 'Hoy' },
            { label: 'Instalación de grifo', amount: '+RD$ 650', time: 'Ayer' },
        ],
    },
    ctaTitle: '¿Listo para hacer crecer tu negocio?',
    ctaDescription: 'Sé de los primeros profesionales en unirte a SOT Provider cuando esté disponible. Déjanos tu contacto y te avisamos.',
};

export default function SotProviderLanding() {
    return <AppLandingPage config={config} />;
}
