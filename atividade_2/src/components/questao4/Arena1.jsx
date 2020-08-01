// Questão 4) Usando a técnica do slide 36 da aula 01,
// Modifique o componente Arena para que ele receba
// uma props chamada “arena”. Seus filhos, 
// Hero e Enemy deverão então exibir o nome a propriedade “arena”. 
// Ex.:
// <Arena arena = “Tokio Dome – Underground Arena” />
import React from 'react'

export default props =>
    <div>
        {
            React.Children.map(
                props.children,
                (Arena) => {
                    return React.cloneElement(Arena, { ...props });
                }
            )
        }
    </div>
// export default props =>
//     <div>
//         <h1>ARENA1 Q4</h1>
//         {
//             React.Children.map(
//                 props.children,
//                 (Arena) => {
//                     return React.cloneElement(Arena, { arena: props.arena });
//                 }
//             )
//         }
//     </div>