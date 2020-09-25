import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class TableRow extends Component {

    constructor(props) {
        super(props)
        this.apagar = this.apagar.bind(this)
    }

    apagar() {
        axios.delete('http://localhost:3002/disciplinas/delete/' + this.props.disciplinas._id) //express 
            //axios.delete('http://localhost:3001/disciplinas/' + this.props.disciplinas.id) //json-server
            .then(res => this.props.apagarElementoPorId(this.props.disciplinas._id))
            .catch(error => console.log(error))
    }
    render() {
        return (
            <tr>

                <td>
                    {this.props.disciplinas._id}
                </td>
                <td>
                    {this.props.disciplinas.nome}
                </td>
                <td>
                    {this.props.disciplinas.curso}
                </td>
                <td>
                    {this.props.disciplinas.capacidade}
                </td>


                <td style={{ textAlign: "center" }}>
                    <Link to={"/editar/" + this.props.disciplinas._id} className="btn btn-primary">Editar</Link>
                </td>

                <td style={{ textAlign: "center" }}>
                    <button onClick={this.apagar} className="btn btn-danger">Apagar</button>
                </td>

            </tr >
        )
    }
} 