import React, { Component } from 'react'
import Card from './Card'

import './Navigate.css'

import { connect } from 'react-redux'
import { alterarId } from '../store/actions/pokemonId'

class Navigate extends Component {

    // constructor(props) {
    //     super(props)
    //     this.props.alterarpPokemonId(15)
    // }

    proximo() {
        const id = (this.props.id + 1 > 500) ? this.props.id : this.props.id + 1
        this.props.alterarpPokemonId(id)
    }

    anterior() {
        const id = (this.props.id - 1 < 1) ? this.props.id : this.props.id - 1
        this.props.alterarpPokemonId(id)
    }

    somar10() {
        const id = (this.props.id + 10 > 500) ? 500 : this.props.id + 10
        this.props.alterarpPokemonId(id)
    }

    subtrair10() {
        const id = (this.props.id - 10 < 1) ? 1 : this.props.id - 10
        this.props.alterarpPokemonId(id)
    }

    render() {
        return (
            <Card title='ID-Número 1' red>
                <div className='navigate'>
                    <button className='btn-secondary' onClick={() => this.subtrair10()}>
                        -10
                    </button>
                    <button className='btn-secondary' onClick={() => this.anterior()}>
                        anterior
                    </button>
                    <button className='btn-secondary' onClick={() => this.proximo()}>
                        proximo
                    </button>
                    <button className='btn-secondary' onClick={() => this.somar10()}>
                        +10
                    </button>
                    <input value={this.props.id} readOnly />
                </div>
            </Card>
        )
    }
}

function mapStateToProps(state) {
    return {
        id: state.pokemonId.id

    }
}

function mapActionCreatorToProps(dispatch) {
    return {
        alterarpPokemonId(novoId) {
            const action = alterarId(novoId)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapActionCreatorToProps)(Navigate)