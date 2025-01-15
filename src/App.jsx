import Nav from './components/Nav';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import PictureDetails from './pages/PictureDetails';
import brandNoBg from './assets/images/brand-no-bg.png';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen relative bg-[#f7eceb] pt-16 min-w-screen">
        <img src={brandNoBg} className="absolute left-10 top-10 z-[-1] h-98 opacity-70 w-auto" alt="Galère-riz logo" />

        <Nav />
        <div className=''>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/picture/:id" element={<PictureDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

        </div>

      </div>
    </BrowserRouter>

  );
}

export default App;
