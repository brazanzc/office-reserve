// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './components/Home'; // 👈 Ahora Home separado
import GestionEspacios from './components/GestionEspacios';
import './App.css';
import MisReservas from './components/MisReservas';

function App() {
  return (
    <Router>
      <div className="App">
        <nav style={{
          background: '#f5f5f5',
          padding: '10px',
          marginBottom: '20px',
          borderBottom: '1px solid #ddd'
        }}>
          <Link to="/" style={{ marginRight: '20px', textDecoration: 'none', color: 'black' }}>🏠 Inicio</Link>
          <Link to="/gestion-espacios" style={{
            padding: '8px 12px',
            background: '#4CAF50',
            color: 'white',
            borderRadius: '5px',
            textDecoration: 'none'
          }}>➕ Gestionar Espacios
          </Link>
          <Link to="/mis-reservas" style={{ marginLeft: '20px', textDecoration: 'none', color: 'black' }}>
  📄 Mis Reservas
</Link>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gestion-espacios" element={<GestionEspacios />} />
            <Route path="/mis-reservas" element={<MisReservas />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
