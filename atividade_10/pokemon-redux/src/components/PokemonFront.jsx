import React, { Component } from 'react'
import Card from './Card'

import { connect } from 'react-redux'

class PokemonFront extends Component {
    render() {
        const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.id}.png`
        return (
            <Card title='Frente-Soma' blue>
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

export default connect(mapStateToProps)(PokemonFront)   