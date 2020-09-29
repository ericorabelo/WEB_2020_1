import React, { Component } from 'react'
//import axios from 'axios'
import TableRow from './TableRow'

import FirebaseContext from '../utils/FirebaseContext'

const ListPage = () => (
    <FirebaseContext.Consumer>
        {contexto => <Listar firebase={contexto} />}
    </FirebaseContext.Consumer>
)

class Listar extends Component {

    constructor(props) {

        super(props)
        this.state = { disciplinas: [], loading: false }//propriedade que vai guardar o obj data dentro do componente  

        //this.apagarElementoPorId = this.apagarElementoPorId.bind(this)
    }

    componentDidMount() {//toda vez que o componente é montado, esse metodo é chamado
        this.setState({ loading: true })
        this.ref = this.props.firebase.getFirestore().collection('disciplinas')
        this.ref.onSnapshot(this.alimentarDisciplinas.bind(this))
    }
    alimentarDisciplinas(query) {
        let disciplinas = []
        query.forEach(
            (doc) => {
                const { nome, curso, capacidade } = doc.data()
                disciplinas.push(
                    {
                        _id: doc.id,
                        nome,
                        curso,
                        capacidade,
                    }
                )
            }
        )
        this.setState({ disciplinas: disciplinas, loading: false })
    }

    montarTabela() {
        if (!this.state.disciplinas) return//se estudantes está vazio da o return
        return this.state.disciplinas.map(//se não ele retorna a lista modificada 
            (dis, i) => {//cada obj estudante é colocado em uma tablerow
                return <TableRow disciplinas={dis} key={i}
                    //apagarElementoPorId={this.apagarElementoPorId}
                    firebase={this.props.firebase}
                />;//atribui estudante e a uma key com o indice a uma tablerow

            }
        )
    }

    // apagarElementoPorId(id) {
    //     let tempDisciplinas = this.state.disciplinas
    //     for (let i = 0; i < tempDisciplinas.length; i++) {
    //         if (tempDisciplinas[i]._id === id) {
    //             tempDisciplinas.splice(i, 1)
    //         }
    //     }
    //     this.setState({ disciplinas: tempDisciplinas })
    // }

    gerarConteudo() {
        if (this.state.loading) {
            return (
                <tr>
                    <td colSpan='6' style={{ textAlign: "center" }}>
                        <div className="spinner-border" role="status" >
                            <span className="sr-only">Loading...</span>
                        </div >

                    </td>
                </tr>
            )
        }
        else {
            return this.montarTabela()
        }
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
                        {this.gerarConteudo()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ListPage