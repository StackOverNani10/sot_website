import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import SotServiceLanding from './components/SotServiceLanding';
import SotProviderLanding from './components/SotProviderLanding';
import Ecosystem from './components/Ecosystem';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800">
                <Routes>
                    <Route path="/" element={
                        <>
                            <Header />
                            <Hero />
                            <About />
                            <Products />
                            <Ecosystem />
                            <Contact />
                            <Footer />
                        </>
                    } />
                    <Route path="/privacidad" element={<PrivacyPolicy />} />
                    <Route path="/politica-de-privacidad" element={<Navigate to="/privacidad" replace />} />
                    <Route path="/privacy" element={<Navigate to="/privacidad" replace />} />
                    <Route path="/sot-service" element={<SotServiceLanding />} />
                    <Route path="/sot-provider" element={<SotProviderLanding />} />
                    <Route path="/producto/sot-service" element={<Navigate to="/sot-service" replace />} />
                    <Route path="/producto/sot-provider" element={<Navigate to="/sot-provider" replace />} />
                    <Route path="/producto/:productId" element={<ProductDetail />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
