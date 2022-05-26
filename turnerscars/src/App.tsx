import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// routes
import CarInsuranceLanding from './pages/car-insurance-landing';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CarInsuranceLanding />} />
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
