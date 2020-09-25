import React, { Component } from 'react'
import axios from 'axios'

export default class Disciplina extends Component {

    constructor(props) {

        super(props)

        this.state = { nome: '', curso: '', capacidade: '' }//add as propriedades que podem usar as funcoes pra pegar o estado e dps alterar

        this.setNome = this.setNome.bind(this)
        this.setCurso = this.setCurso.bind(this)
        this.setCapacidade = this.setCapacidade.bind(this)

        this.onSubmit = this.onSubmit.bind(this)

    }

    setNome(e) {//pega o evento e SETA O ESTADO NO COMPONENTE

        this.setState({ nome: e.target.value })

    }

    setCurso(e) {

        this.setState({ curso: e.target.value })

    }

    setCapacidade(e) {

        this.setState({ capacidade: e.target.value })

    }

    onSubmit(e) {//vai pegar o evento e guardar pra dps inserir no banco de dados

        e.preventDefault() //impede que o browser faça o reload, perdendo assim a informação

        const novaDisciplina = {
            nome: this.state.nome,
            curso: this.state.curso,
            capacidade: this.state.capacidade
        }
        //conceito de promeses
        //axios.post('http://localhost:3001/disciplinas', novaDisciplina)//se uma disciplina foi inserida com sucesso entra no then
        axios.post('http://localhost:3002/disciplinas/register', novaDisciplina)
            .then(
                (res) => {
                    console.log('disciplina inserida com sucesso')
                }
            )
            .catch(
                (error) => {
                    console.log(error)
                }
            )

        this.setState({ nome: '', curso: '', capacidade: '' })

    }
    /* teste para ver se o estado esta sendo alterado */
    // <h1>{this.state.nome}</h1> 
    render() {
        //vc passa para propriedade onSubimit as propriedades do componente
        return (
            <div style={{ marginTop: 10 }}>

                <h3>Criar Disciplina</h3>

                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>Nome: </label>
                        <input type="text" className="form-control"
                            value={this.state.nome} onChange={this.setNome} />
                    </div>

                    <div className="form-group">
                        <label>Curso: </label>
                        <input type="text" className="form-control"
                            value={this.state.curso} onChange={this.setCurso} />
                    </div>

                    <div className="form-group">
                        <label>Capacidade: </label>
                        <input type="text" className="form-control"
                            value={this.state.capacidade} onChange={this.setCapacidade} />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Criar" className="btn btn-primary" />
                    </div>

                </form>
            </div>
        )
    }
}