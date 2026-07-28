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
                {/* Sin notch: las capturas son de Android y no traen ese espacio,
                    así que un notch superpuesto tapaba el contenido. Bezel limpio. */}
                <div className="bg-slate-50 aspect-[9/19] overflow-hidden relative">
                    {children}
                </div>
            </div>
        </div>
    );
}
