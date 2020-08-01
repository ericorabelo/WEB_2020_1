import React from 'react'

export default function Enemy1(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <img src={props.img} alt='falhou' />
            <h1>{props.arena}</h1>
        </div>
    )
}