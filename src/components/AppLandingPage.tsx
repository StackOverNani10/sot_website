import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import StoreButtons from './StoreButtons';
import PhoneMockup from './PhoneMockup';
import { HomeScreen, ProfileScreen, TrackingScreen } from './AppMockScreens';
import type { HomeItem, ScreenTheme } from './AppMockScreens';

export interface AppLandingConfig {
    eyebrow: string;
    headline: string;
    highlight: string;
    description: string;
    icon: LucideIcon;
    theme: ScreenTheme & { accentBorder: string };
    badges: string[];
    forWhom: string;
    features: { icon: LucideIcon; title: string; description: string }[];
    steps: { title: string; description: string }[];
    home: { greeting: string; items: HomeItem[] };
    tracking: { name: string; role: string; rating: string; eta: string; statusLabel: string };
    profile: {
        name: string;
        role: string;
        rating: string;
        stats: { label: string; value: string }[];
        activity: { label: string; amount: string; time: string }[];
    };
    ctaTitle: string;
    ctaDescription: string;
}

export default function AppLandingPage({ config }: { config: AppLandingConfig }) {
    const navigate = useNavigate();
    const Icon = config.icon;
    const { theme } = config;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const goToProducts = () => {
        navigate('/');
        setTimeout(() => {
            document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800">
            <Header />

            <section className="relative pt-32 pb-24 overflow-hidden">
                <div className={`absolute top-10 -right-40 w-[32rem] h-[32rem] bg-gradient-to-br ${theme.accentFrom} ${theme.accentTo} rounded-full blur-[120px] opacity-20 pointer-events-none`}></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-6xl mx-auto">
                        <button
                            onClick={goToProducts}
                            className="inline-flex items-center space-x-2 text-gray-400 hover:text-white mb-10 transition-colors text-sm"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            <span>Volver a soluciones</span>
                        </button>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <div className={`inline-flex items-center gap-2 ${theme.accentSoftBg} border ${theme.accentBorder} rounded-full px-4 py-1.5 mb-6`}>
                                    <Icon className={`w-4 h-4 ${theme.accentText}`} />
                                    <span className={`text-xs font-semibold ${theme.accentText} uppercase tracking-wide`}>
                                        {config.eyebrow}
                                    </span>
                                </div>

                                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                                    {config.headline}{' '}
                                    <span className={`text-transparent bg-clip-text bg-gradient-to-r ${theme.accentFrom} ${theme.accentTo}`}>
                                        {config.highlight}
                                    </span>
                                </h1>

                                <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl">
                                    {config.description}
                                </p>

                                <StoreButtons className="mb-8" />

                                <div className="flex flex-wrap gap-x-6 gap-y-2">
                                    {config.badges.map((b, i) => (
                                        <div key={i} className="flex items-center gap-1.5 text-sm text-gray-400">
                                            <CheckCircle2 className={`w-4 h-4 ${theme.accentText} flex-shrink-0`} />
                                            <span>{b}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative flex justify-center lg:justify-end pb-10">
                                <div className="relative w-56">
                                    <PhoneMockup accentFrom={theme.accentFrom} accentTo={theme.accentTo} className="relative z-10">
                                        <HomeScreen theme={theme} greeting={config.home.greeting} items={config.home.items} />
                                    </PhoneMockup>
                                </div>
                                <div className="absolute -bottom-8 -left-4 w-44 hidden sm:block">
                                    <PhoneMockup accentFrom={theme.accentFrom} accentTo={theme.accentTo} glow={false}>
                                        <TrackingScreen theme={theme} {...config.tracking} />
                                    </PhoneMockup>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-800/30">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Todo lo que necesitas, en un solo lugar
                            </h2>
                            <p className="text-lg text-gray-400 max-w-2xl mx-auto">{config.forWhom}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {config.features.map((f, i) => {
                                const FeatureIcon = f.icon;
                                return (
                                    <div
                                        key={i}
                                        className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6 hover:border-gray-600 transition-colors"
                                    >
                                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${theme.accentFrom} ${theme.accentTo} flex items-center justify-center mb-4`}>
                                            <FeatureIcon className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
                                        <p className="text-sm text-gray-400 leading-relaxed">{f.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Cómo funciona</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {config.steps.map((s, i) => (
                                <div key={i}>
                                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${theme.accentFrom} ${theme.accentTo} flex items-center justify-center text-white font-bold text-lg mb-4`}>
                                        {i + 1}
                                    </div>
                                    <h3 className="text-white font-bold mb-2">{s.title}</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">{s.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-800/30 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Diseñada para verse tan bien como funciona
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Interfaz simple, rápida e intuitiva pensada para que completes cada tarea en segundos
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center items-end gap-8 max-w-4xl mx-auto">
                        <div className="w-48">
                            <PhoneMockup accentFrom={theme.accentFrom} accentTo={theme.accentTo}>
                                <HomeScreen theme={theme} greeting={config.home.greeting} items={config.home.items} />
                            </PhoneMockup>
                        </div>
                        <div className="w-52 -mb-6">
                            <PhoneMockup accentFrom={theme.accentFrom} accentTo={theme.accentTo}>
                                <TrackingScreen theme={theme} {...config.tracking} />
                            </PhoneMockup>
                        </div>
                        <div className="w-48">
                            <PhoneMockup accentFrom={theme.accentFrom} accentTo={theme.accentTo}>
                                <ProfileScreen theme={theme} {...config.profile} />
                            </PhoneMockup>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className={`max-w-5xl mx-auto rounded-3xl p-10 md:p-16 text-center relative overflow-hidden bg-gradient-to-br ${theme.accentFrom} ${theme.accentTo}`}>
                        <div className="absolute inset-0 bg-black/10"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{config.ctaTitle}</h2>
                            <p className="text-lg text-white/85 mb-10 max-w-2xl mx-auto">{config.ctaDescription}</p>
                            <StoreButtons align="center" />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
