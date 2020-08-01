// Questão 3) Usando o props.children,
//Crie um componente “World” que pelo menos 3 Arenas e seu interior. 
//Ex.:
// <World>
//           <Arena />
//           <Arena />
//           <Arena />
// </World>
import React from 'react'
import Arena from '../questao1/Arena'

export default function World(props) {
    return (
        <div>
            {props.children}
        </div>
    );
}