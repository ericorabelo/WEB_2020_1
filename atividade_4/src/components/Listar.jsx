import React, { Component } from 'react'
import axios from 'axios'

import TableRow from './TableRow'

export default class Listar extends Component {

    constructor(props) {

        super(props)
        this.state = { disciplinas: [] }//propriedade que vai guardar o obj data dentro do componente  

        this.apagarElementoPorId = this.apagarElementoPorId.bind(this)
    }

    componentDidMount() {//toda vez que o componente é montado, esse metodo é chamado
        axios.get('http://localhost:3001/disciplinas')
            .then(
                (res) => {
                    //console.log(res.data)
                    this.setState({ disciplinas: res.data })//atribui o obj data a propriedade do componente
                    //console.log(this.state.disciplinas)
                }
            )
            .catch(
                (error) => {
                    console.log(error)
                }
            )
    }

    montarTabela() {
        if (!this.state.disciplinas) return//se estudantes está vazio da o return
        return this.state.disciplinas.map(//se não ele retorna a lista modificada 
            (dis, i) => {//cada obj estudante é colocado em uma tablerow
                return <TableRow disciplinas={dis} key={i} apagarElementoPorId={this.apagarElementoPorId} />;//atribui estudante e a uma key com o indice a uma tablerow
            }
        )
    }

    apagarElementoPorId(id) {
        let tempEstudantes = this.state.disciplinas
        for (let i = 0; i < tempEstudantes.length; i++) {
            if (tempEstudantes[i].id === id) {
                tempEstudantes.splice(i, 1)
            }
        }
        this.setState({ disciplinas: tempEstudantes })
    }

    render() {
        return (
            <div style={{ maginTop: 10 }}>

                <h3>Listar Disciplinas</h3>

                <table className="table table-striped" style={{ maginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Curso</th>
                            <th>Capacidade</th>
                            <th colSpan='2' style={{ textAlign: "center" }}></th>

                        </tr>
                    </thead>

                    <tbody>
                        {this.montarTabela()}
                    </tbody>
                </table>
            </div>
        )
    }
} 