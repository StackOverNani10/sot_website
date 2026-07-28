import { ReactNode } from 'react';

interface PhoneMockupProps {
    children: ReactNode;
    accentFrom: string;
    accentTo: string;
    className?: string;
    glow?: boolean;
}

export default function PhoneMockup({ children, accentFrom, accentTo, className = '', glow = true }: PhoneMockupProps) {
    return (
        <div className={`relative ${className}`}>
            {glow && (
                <div className={`absolute -inset-6 bg-gradient-to-br ${accentFrom} ${accentTo} rounded-[3rem] blur-3xl opacity-30 pointer-events-none`}></div>
            )}
            <div className="relative rounded-[2.2rem] border-[6px] border-gray-800 bg-gray-900 shadow-2xl overflow-hidden">
                <div className="absolute top-1.5 inset-x-0 flex items-center justify-center z-20 pointer-events-none">
                    <div className="w-16 h-4 bg-gray-900 rounded-full"></div>
                </div>
                <div className="bg-slate-50 aspect-[9/19] overflow-hidden relative flex flex-col">
                    {/* Franja superior (barra de estado) para que el notch no tape
                        el contenido: las capturas son de Android y no traen notch. */}
                    <div className="h-7 flex-none bg-slate-50"></div>
                    <div className="flex-1 min-h-0 overflow-hidden relative">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
