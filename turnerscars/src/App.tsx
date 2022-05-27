import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// routes
import CarInsuranceLanding from './pages/car-insurance-landing';
import QouteStep1 from './pages/qoute-step-1';
import QouteStep2 from './pages/qoute-step-2';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CarInsuranceLanding />} />
          <Route path="/qoute-step-1" element={<QouteStep1 />} />
          <Route path="/qoute-step-2" element={<QouteStep2 />} />
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
