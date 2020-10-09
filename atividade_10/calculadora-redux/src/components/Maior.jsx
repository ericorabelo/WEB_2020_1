import React, { Component } from 'react'
import Card from './Card'

import { connect } from 'react-redux'

class Maior extends Component {
    // render() {
    //     const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${this.props.id}.png`
    //     return (
    //         <Card title='Maior' dark>
    //             <img src={url} alt={this.props.id} />
    //         </Card >
    //     )
    // }
    render() {
        //const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.id}.png`
        //const outrourl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.outroid}.png`


        var a = this.props.outroid
        var b = this.props.id
        var c = null
        if (a > b)
            c = a
        else
            c = b

        return (
            /* <Card title='Maior' dark>
                    <img src={url} alt={this.props.id} />
        </Card > */
            < div >

                <Card title='Maior' dark>

                    <h1>{c}</h1>
                </Card >

            </div >
        )
    }
}



function mapStateToProps(state) {
    return {
        id: state.pokemonId.id,
        outroid: state.outroId.outroid
    }
}

export default connect(mapStateToProps)(Maior)