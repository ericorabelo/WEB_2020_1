import React, { Component } from 'react'
import Card from './Card'

import { connect } from 'react-redux'

class Multiplicacao extends Component {
    // render() {
    //     const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${this.props.id}.png`
    //     return (
    //         <Card title='Multiplicação' green>

    //             <img src={url} alt={this.props.outroid} />
    //         </Card >
    //     )
    // }
    render() {
        //const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.id}.png`
        //const outrourl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.outroid}.png`
        return (
            //     <Card title='COSTAS' green>
            //     <img src={url} alt={this.props.id} />
            // </Card >
            <div>
                <Card title='Multiplicação' green>
                    <h1>{this.props.id * this.props.outroid}</h1>
                </Card >
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        id: state.pokemonId.id,
        outroid: state.outroId.outroid
    }
}

export default connect(mapStateToProps)(Multiplicacao)