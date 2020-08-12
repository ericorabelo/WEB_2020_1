import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Disciplina from './components/Disciplina'
import Inserir from './components/Inserir'
import Listar from './components/Listar'
import Home from './components/Home'

import './App.css'

export default class App extends Component {

  render() {
    return (
      <Router>
        <div className="container">

          <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <Link to={'/'} className="navbar-brand"></Link>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">

                  <Link to={'/'} className="nav-link">Home</Link>

                </li>
                <li className="nav-item">

                  <Link to={'/disciplinas'} className="nav-link">Disciplinas</Link>

                </li>
                <li className="nav-item">

                  <Link to={'/listar'} className="nav-link">Listar</Link>

                </li>
                <li className="nav-item">

                  <Link to={'/inserir'} className="nav-link">Inserir</Link>

                </li>
              </ul>
            </div>
          </nav>

          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/disciplinas' component={Disciplina} />
            <Route path='/inserir/' component={Inserir} />
            <Route path='/list' component={Listar} />
          </Switch>

        </div>
      </Router>
    );
  }
}