import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import Ecosystem from './components/Ecosystem';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
                    <Route path="/producto/:productId" element={<ProductDetail />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
