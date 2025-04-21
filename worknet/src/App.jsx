import React from 'react';
import { Routes, Route } from 'react-router-dom';
import InicioSesion from './components/InicioSesion';
import RegistroCandidato from './components/RegistroCandidato';
import RegistroEmpresa from './components/RegistroEmpresa';
import ElegirTipoCuenta from './components/ElegirTipoCuenta';
import RestablecerContrasena from './components/RestablecerContrasena';
import ConfirmarRestablecer from './components/ConfirmarRestablecer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/" element={<InicioSesion />} />
        <Route path="/seleccionar-cuenta" element={<ElegirTipoCuenta />} />
        <Route path="/registro-candidato" element={<RegistroCandidato />} />
        <Route path="/registro-empresa" element={<RegistroEmpresa />} />
        <Route path="/recuperar/confirmar/:uid/:token" element={<RestablecerContrasena />} />
        <Route path="/recuperar/confirmar/:uidb64/:token" element={<ConfirmarRestablecer />} />
      </Routes>
    </div>
  );
}

export default App;
