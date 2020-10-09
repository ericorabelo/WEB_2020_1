import React, { Component } from 'react'
import './App.css'


import Numero1 from './components/Numero1'
import Numero2 from './components/Numero2'

import Soma from './components/Soma'
import Multiplicacao from './components/Multiplicacao'
import Maior from './components/Maior'

//import PokemonInfo from './components/PokemonInfo'

export default class App extends Component {

  render() {
    return (
      <div className='container'>
        <h1>
          calculadora-redux
        </h1>
        <div className='line'>
          <Numero1 />
          <Numero2 />
        </div>
        <div className='line'>
          <Soma />
          <Multiplicacao />
          <Maior />

        </div>
      </div>
    )
  }
}
//     <PokemonInfo />