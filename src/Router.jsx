import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

function Router () {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/conocenos" element={<About />}></Route>
            <Route path="/que-hacemos" element={<Services />}></Route>
            <Route path="/contacto" element={<Contact />}></Route>
        </Routes>
    );
}

export default Router;