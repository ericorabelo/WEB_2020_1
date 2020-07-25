import React from "react";
import ClasseFilho from './ClasseFilho';

export default class ClassePai extends React.Component {
    render() {
        return (
            <div>
                <ClasseFilho
                    nome='ÉRICO RABELO CLEMENTE'
                    curso='ENGENHARIA DE SOFTWARE'
                    cidade='SENADOR POMPEU'
                />
            </div>
        );
    }
}