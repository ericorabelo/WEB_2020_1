import React from "react"

export default function FuncaoFilho(props) {
    return (
        <div>
            <h3>NOME: {props.nome}</h3>
            <h3>CURSO: {props.curso}</h3>
            <h3>CIDADE: {props.cidade}</h3>
        </div>
    )
}