import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CaminhoesPage from './pages/CaminhoesPage';
import EntregasPage from './pages/EntregasPage';
import MotoristasPage from './pages/MotoristasPage';
import Navbar from './components/Navbar';
import { CaminhoesProvider } from './context/CaminhoesContext';
import { EntregasProvider } from './context/EntregasContext';
import { MotoristasProvider } from './context/MotoristasContext';
import ErrorToast from './components/ErrorToast';

function App() {
  return (
    <Router>
      <CaminhoesProvider>
        <EntregasProvider>
          <MotoristasProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/caminhoes" element={<CaminhoesPage />} />
              <Route path="/entregas" element={<EntregasPage />} />
              <Route path="/motoristas" element={<MotoristasPage />} />
            </Routes>
          </MotoristasProvider>
        </EntregasProvider>
      </CaminhoesProvider>
      <ErrorToast />
    </Router>
  );
}

export default App;
