import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';

interface StoreButtonsProps {
    className?: string;
    align?: 'start' | 'center';
}

export default function StoreButtons({ className = '', align = 'start' }: StoreButtonsProps) {
    const navigate = useNavigate();
    const location = useLocation();

    const notifyMe = () => {
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }, 150);
        } else {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={`flex flex-wrap gap-3 ${align === 'center' ? 'justify-center' : 'justify-start'} ${className}`}>
            <button
                onClick={notifyMe}
                className="group relative flex items-center gap-3 bg-black border border-gray-700 hover:border-gray-500 rounded-2xl pl-4 pr-5 py-2.5 transition-all hover:-translate-y-0.5"
            >
                <span className="absolute -top-2 -right-2 text-[9px] font-bold bg-amber-400 text-amber-950 px-2 py-0.5 rounded-full shadow">
                    Muy pronto
                </span>
                <FontAwesomeIcon icon={faApple} className="text-white text-2xl flex-shrink-0" />
                <span className="text-left leading-tight">
                    <span className="block text-[10px] text-gray-400">Descárgala en</span>
                    <span className="block text-sm font-semibold text-white -mt-0.5">App Store</span>
                </span>
            </button>

            <button
                onClick={notifyMe}
                className="group relative flex items-center gap-3 bg-black border border-gray-700 hover:border-gray-500 rounded-2xl pl-4 pr-5 py-2.5 transition-all hover:-translate-y-0.5"
            >
                <span className="absolute -top-2 -right-2 text-[9px] font-bold bg-amber-400 text-amber-950 px-2 py-0.5 rounded-full shadow">
                    Muy pronto
                </span>
                <FontAwesomeIcon icon={faGooglePlay} className="text-white text-xl flex-shrink-0" />
                <span className="text-left leading-tight">
                    <span className="block text-[10px] text-gray-400">Disponible en</span>
                    <span className="block text-sm font-semibold text-white -mt-0.5">Google Play</span>
                </span>
            </button>
        </div>
    );
}
