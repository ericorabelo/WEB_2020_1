import React from 'react';
import './App.css';

import Funcao from './components/questao1/Funcao'
import Classe from './components/questao2/Classe'
import FuncaoPai from './components/questao3/FuncaoPai'
import ClassePai from './components/questao4/ClassePai'

function App() {
  return (
    <div className="App">
      <Funcao />
      <Classe />
      <FuncaoPai />
      <ClassePai />
    </div>
  );
}

export default App;