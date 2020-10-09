import React, { Component } from 'react'
import Card from './Card'

import './Navigate.css'

import { connect } from 'react-redux'
import { alterarOutroId } from '../store/actions/outroId'
//import { alterarId } from '../store/actions/pokemonId'

class Numero2 extends Component {

    // constructor(props) {
    //     super(props)
    //     this.props.alterarpPokemonId(15)
    // }

    prox() {
        //const outroid = (this.props.outroid + 1 > 500) ? this.props.outroid : this.props.outroid + 1
        const outroid = this.props.outroid + 1
        this.props.alterandoOutroId(outroid)
    }

    ant() {
        //const outroid = (this.props.outroid - 1 < 1) ? this.props.outroid : this.props.outroid - 1
        const outroid = this.props.outroid - 1
        this.props.alterandoOutroId(outroid)
    }

    somar_10() {
        //const outroid = (this.props.outroid + 10 > 500) ? 500 : this.props.outroid + 10
        const outroid = this.props.outroid + 10
        this.props.alterandoOutroId(outroid)
    }

    subtrair_10() {
        //const outroid = (this.props.outroid - 10 < 1) ? 1 : this.props.outroid - 10
        const outroid = this.props.outroid - 10
        this.props.alterandoOutroId(outroid)
    }

    render() {
        return (
            <Card title='Número 2' red>
                <div className='navigate'>
                    <button className='btn-secondary' onClick={() => this.subtrair_10()}>
                        -10
                    </button>
                    <button className='btn-secondary' onClick={() => this.ant()}>
                        anterior
                    </button>
                    <button className='btn-secondary' onClick={() => this.prox()}>
                        proximo
                    </button>
                    <button className='btn-secondary' onClick={() => this.somar_10()}>
                        +10
                    </button>
                    <input value={this.props.outroid} readOnly />
                </div>
            </Card>
        )
    }
}

function mapStateToProps(state) {
    return {
        outroid: state.outroId.outroid

    }
}

function mapActionCreatorToProps(dispatch) {
    return {
        alterandoOutroId(outroId) {
            const action = alterarOutroId(outroId)
            dispatch(action)
        }
        // alterarPokemonId(novoId) {
        //     const action = alterarId(novoId)
        //     dispatch(action)
        // }
    }
}

export default connect(mapStateToProps, mapActionCreatorToProps)(Numero2)