import React from "react";

export default class ClasseFilho extends React.Component {
    render() {
        return (
            <div>
                <h4>NOME: {this.props.nome}</h4>
                <h4>CURSO: {this.props.curso}</h4>
                <h4>CIDADE: {this.props.cidade}</h4>
            </div>
        );
    }
}