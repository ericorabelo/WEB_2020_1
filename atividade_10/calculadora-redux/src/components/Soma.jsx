import React, { Component } from 'react'
import Card from './Card'

import { connect } from 'react-redux'

class Soma extends Component {
    // somando() {
    //     // const id = (this.props.id + 1 > 500) ? this.props.id : this.props.id + 1
    //     // this.props.alterarpPokemonId(id)
    // }

    render() {
        // const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.id}.png`
        //const outrourl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.outroid}.png`
        return (
            //     <Card title='FRENTE' blue>
            //     <img src={url} alt={this.props.id} />
            // </Card >
            <div>

                <Card title='Soma' blue>

                    <h1>{this.props.id + this.props.outroid}</h1>
                </Card >
            </div>
        )
    }
}



// function mapStateToProps(state) {
//     return {
//         id: state.pokemonId.id,
//         outroid: state.outroId.outroid
//     }
// }

function mapStateToProps(state) {
    return {
        id: state.pokemonId.id,
        outroid: state.outroId.outroid
    }
}
export default connect(mapStateToProps)(Soma)   