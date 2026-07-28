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
                <div className="absolute top-0 inset-x-0 h-6 flex items-center justify-center z-20 pointer-events-none">
                    <div className="w-20 h-4 bg-gray-900 rounded-b-2xl"></div>
                </div>
                <div className="bg-slate-50 aspect-[9/19] overflow-hidden relative">
                    {children}
                </div>
            </div>
        </div>
    );
}
