import Nav from './components/Nav';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PictureDetails from './pages/PictureDetails';
import brandNoBg from './assets/images/brand-no-bg.png';

function App() {
  return (
    <BrowserRouter>
      <div className="h-screen relative bg-[#f7eceb] pt-16 w-screen">
        <img src={brandNoBg} className="absolute left-10 top-10 z-[0] h-98 opacity-70 w-auto" alt="Galère-riz logo" />

        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/picture/:id" element={<PictureDetails />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
