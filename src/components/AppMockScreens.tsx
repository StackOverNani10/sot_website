import type { LucideIcon } from 'lucide-react';
import { Bell, Search, Star, Navigation2 } from 'lucide-react';

export interface ScreenTheme {
    accentFrom: string;
    accentTo: string;
    accentText: string;
    accentBg: string;
    accentSoftBg: string;
}

export interface HomeItem {
    icon: LucideIcon;
    title: string;
    subtitle: string;
    status: string;
}

interface HomeScreenProps {
    theme: ScreenTheme;
    greeting: string;
    items: HomeItem[];
}

export function HomeScreen({ theme, greeting, items }: HomeScreenProps) {
    return (
        <div className="h-full flex flex-col pt-7">
            <div className={`bg-gradient-to-br ${theme.accentFrom} ${theme.accentTo} px-4 pt-5 pb-8 rounded-b-[1.75rem]`}>
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <p className="text-white/70 text-[9px]">Hola,</p>
                        <p className="text-white font-semibold text-xs">{greeting}</p>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                        <Bell className="w-3.5 h-3.5 text-white" />
                    </div>
                </div>
                <div className="bg-white/15 backdrop-blur-sm rounded-lg flex items-center gap-2 px-3 py-2">
                    <Search className="w-3 h-3 text-white/80" />
                    <div className="h-1.5 w-20 bg-white/40 rounded-full"></div>
                </div>
            </div>
            <div className="flex-1 px-3 -mt-4 space-y-2.5 overflow-hidden">
                {items.map((item, i) => {
                    const Icon = item.icon;
                    return (
                        <div key={i} className="bg-white rounded-xl shadow-sm p-2.5 flex items-center gap-2.5">
                            <div className={`w-8 h-8 rounded-lg ${theme.accentSoftBg} flex items-center justify-center flex-shrink-0`}>
                                <Icon className={`w-3.5 h-3.5 ${theme.accentText}`} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-[10px] font-semibold text-gray-800 truncate">{item.title}</p>
                                <p className="text-[8px] text-gray-400 truncate">{item.subtitle}</p>
                            </div>
                            <span className={`text-[7px] font-semibold px-1.5 py-1 rounded-full ${theme.accentSoftBg} ${theme.accentText} whitespace-nowrap`}>{item.status}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

interface TrackingScreenProps {
    theme: ScreenTheme;
    name: string;
    role: string;
    rating: string;
    eta: string;
    statusLabel: string;
}

export function TrackingScreen({ theme, name, role, rating, eta, statusLabel }: TrackingScreenProps) {
    const initials = name.split(' ').map((n) => n[0]).join('');
    return (
        <div className="h-full flex flex-col pt-7">
            <div className="flex-1 relative bg-gradient-to-br from-slate-200 to-slate-300 overflow-hidden min-h-0">
                <div
                    className="absolute inset-0 opacity-40"
                    style={{ backgroundImage: 'radial-gradient(circle, #94a3b8 1px, transparent 1px)', backgroundSize: '12px 12px' }}
                ></div>
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full ${theme.accentBg} ring-4 ring-white shadow-lg`}></div>
                <div className="absolute top-1/3 left-1/4 w-2.5 h-2.5 rounded-full bg-white ring-2 ring-gray-400 shadow"></div>
                <div className="absolute top-3 left-3 right-3 bg-white rounded-lg shadow px-2.5 py-1.5 flex items-center gap-1.5">
                    <Navigation2 className={`w-3 h-3 ${theme.accentText}`} />
                    <p className="text-[9px] font-semibold text-gray-700 truncate">{statusLabel}</p>
                </div>
            </div>
            <div className="bg-white rounded-t-[1.5rem] -mt-5 relative z-10 p-3.5 shadow-[0_-8px_24px_rgba(0,0,0,0.08)]">
                <div className="flex items-center gap-2.5 mb-2.5">
                    <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${theme.accentFrom} ${theme.accentTo} flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0`}>
                        {initials}
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-[10px] font-semibold text-gray-800 truncate">{name}</p>
                        <p className="text-[8px] text-gray-400 truncate">{role}</p>
                    </div>
                    <div className="flex items-center gap-1 flex-shrink-0">
                        <Star className="w-2.5 h-2.5 text-amber-400 fill-amber-400" />
                        <span className="text-[9px] font-semibold text-gray-700">{rating}</span>
                    </div>
                </div>
                <div className={`${theme.accentSoftBg} rounded-lg px-3 py-2 text-center`}>
                    <p className={`text-[9px] font-semibold ${theme.accentText}`}>{eta}</p>
                </div>
            </div>
        </div>
    );
}

interface ProfileStat {
    label: string;
    value: string;
}

interface ProfileActivity {
    label: string;
    amount: string;
    time: string;
}

interface ProfileScreenProps {
    theme: ScreenTheme;
    name: string;
    role: string;
    rating: string;
    stats: ProfileStat[];
    activity: ProfileActivity[];
}

export function ProfileScreen({ theme, name, role, rating, stats, activity }: ProfileScreenProps) {
    const initials = name.split(' ').map((n) => n[0]).join('');
    return (
        <div className="h-full flex flex-col pt-7">
            <div className={`bg-gradient-to-br ${theme.accentFrom} ${theme.accentTo} px-4 pt-6 pb-10 rounded-b-[1.75rem] text-center`}>
                <div className="w-12 h-12 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center text-white text-xs font-bold mx-auto mb-2">
                    {initials}
                </div>
                <p className="text-white font-semibold text-xs">{name}</p>
                <p className="text-white/70 text-[8px] mb-1">{role}</p>
                <div className="flex items-center justify-center gap-1">
                    <Star className="w-2.5 h-2.5 text-amber-300 fill-amber-300" />
                    <span className="text-white text-[9px] font-semibold">{rating}</span>
                </div>
            </div>
            <div className="px-3 -mt-5 grid grid-cols-3 gap-2 mb-3">
                {stats.map((s, i) => (
                    <div key={i} className="bg-white rounded-lg shadow-sm p-2 text-center">
                        <p className={`text-[10px] font-bold ${theme.accentText}`}>{s.value}</p>
                        <p className="text-[7px] text-gray-400 leading-tight">{s.label}</p>
                    </div>
                ))}
            </div>
            <div className="flex-1 px-3 space-y-2 overflow-hidden">
                {activity.map((a, i) => (
                    <div key={i} className="bg-white rounded-lg shadow-sm p-2.5 flex items-center justify-between">
                        <div className="min-w-0">
                            <p className="text-[9px] font-semibold text-gray-800 truncate">{a.label}</p>
                            <p className="text-[7px] text-gray-400">{a.time}</p>
                        </div>
                        <span className={`text-[9px] font-bold ${theme.accentText} flex-shrink-0`}>{a.amount}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
