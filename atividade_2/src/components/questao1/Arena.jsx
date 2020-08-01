// Questão 1) Em mesmo arquivo, crie os seguintes componentes, usando funções:
// • “Hero”, o qual imprimirá a propriedade “name”, recebida via “props”. Além disso, mostre uma
// imagem de sua escolha, usando a tag <img>”.
// • “Enemy”, a mesma coisa de Hero, com um “name” e uma imagem.
// • “Arena”, o componente que será exportado pelo arquivo. Irá renderizar os componentes “Hero” e
// “Enemy”
// Ex. (render de Arena):
// <div>
// <Hero name = “Baki” img = “../baki.png”/>
// <Enemy name = “Yujiro” img = “../ogre.png”/>
// </div>
//imagens na pasta public/img
import React from 'react'
import Hero from './Hero'
import Enemy from './Enemy'

export default function Arena(props) {
    return (
        <div>
            <Hero name='HERO' img='./img/hero.gif' />
            <Enemy name='ENEMY' img='./img/enemy.gif' />
        </div>
    )
}