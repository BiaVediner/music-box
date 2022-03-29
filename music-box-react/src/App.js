import { useState } from 'react';
import api from './api';
import Votacao from './pages/Votacao';

function App() {
  return (
    <>
      <Votacao title="BK"/>
      <Votacao title="Mc"/>
    </>
  );
}

export default App;
