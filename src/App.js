import './App.css';
import React from 'react';
import Index from './components/index/index';
import Consepts from './components/consepts/index';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Consepts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
