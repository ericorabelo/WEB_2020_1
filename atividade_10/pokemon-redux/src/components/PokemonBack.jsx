import React, { Component } from 'react'
import Card from './Card'

import { connect } from 'react-redux'

class PokemonBack extends Component {
    render() {
        const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${this.props.id}.png`
        return (
            <Card title='Costas-Multiplicação' green>
                <img src={url} alt={this.props.id} />
            </Card >
        )
    }
}

function mapStateToProps(state) {
    return {
        id: state.pokemonId.id,

    }
}

export default connect(mapStateToProps)(PokemonBack)