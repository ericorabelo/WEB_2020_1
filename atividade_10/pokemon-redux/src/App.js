import React, { Component } from 'react'
import './App.css'

import Navigate from './components/Navigate'
import PokemonFront from './components/PokemonFront'
import PokemonBack from './components/PokemonBack'
import PokemonInfo from './components/PokemonInfo'

export default class App extends Component {

  render() {
    return (
      <div className='container'>
        <h1>
          calculadora-redux
        </h1>
        <div className='line'>
          <Navigate />
        </div>
        <div className='line'>
          <PokemonFront />
          <PokemonBack />
          <PokemonInfo />
        </div>
      </div>
    )
  }
}
