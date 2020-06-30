import React from 'react'
import Titulo from '../titulo/Titulo'

import a from './a.jpg'
import b from './b.jpeg'
import c from './c.jpg'
import './apt.css'

export default () => {
    return (
        <div id ='sessao1' class = 'apt'>
            <Titulo titulo='Aptidões'></Titulo>
            <div id = "ap">
                <div class ='ap1'>
                    <img src={a}></img>
                    <p>Espirito de Liderança</p>
                </div>
                <div class='ap1'>
                    <img src={b}></img>
                    <p>Trabalho de Equipa</p>
                </div>
                <div class='ap1'>
                    <img src={c}></img>
                    <p>Ingles Fluente</p>
                </div>
            </div>
        </div>
    )
}