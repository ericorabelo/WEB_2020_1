import React from 'react';
import './App.css';

import Arena from './components/questao1/Arena'

import World from './components/questao3/World'

//ENTRADA:
// <Arena arena = 'Yggdrasil' />
// <Hero name='HERO' img='./hero.gif'/>
//SAIDA:
// eu sou HERO e vou lutar na arena Yggdrasil
import Arena1 from './components/questao4/Arena1'
import Hero1 from './components/questao4/Hero1'
import Enemy1 from './components/questao4/Enemy1'
import { Card } from 'react-bootstrap'
function App() {
  return (
    <div className="App">
      <Card>
        <Card.Body>QUESTÃO 1 e 2</Card.Body>
      </Card>

      <Arena />

      <Card>
        <Card.Body>QUESTÃO 3</Card.Body>
      </Card>

      <World >
        <Arena />
        <Arena />
        <Arena />
      </World>

      <Card>
        <Card.Body>QUESTÃO 4</Card.Body>
      </Card>

      <Arena1 arena='Yggdrasil'>
        <Hero1 name='HERO1' img='/img/hero.gif' />
        <Enemy1 name='ENEMY1' img='/img/enemy.gif' />
      </Arena1>
    </div>
  );
}

export default App;
