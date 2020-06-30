import React from 'react'
import Titulo from '../titulo/Titulo'
import './comp.css'
import a from './a.jpeg'
import b from './b.png'
import c from './c.png'
import d from './d.jpg'
import e from './e.png'
import f from './f.jpeg'

export default () => {
    return(
            <div id='sessao3' class ='comp'>
               <Titulo titulo = 'Competencias'></Titulo>
               <div class = 'com'>
                   <div class = 'co'>
                       <img src={a}></img>
                       <p>Engenharia Informatica</p>
                   </div>
                <div class='co'>
                    <img src={b}></img>
                    <p>Base de Dados</p>
                </div>
                <div class='co'>
                    <img src={c}></img>
                    <p>Algoritmia</p>
                </div>  
               </div>

            <div class='com'>
                <div class='co'>
                    <img src={d}></img>
                    <p>Gestão de Redes</p>
                </div>
                <div class='co'>
                    <img src={e}></img>
                    <p>Programação</p>
                </div>
                <div class='co'>
                    <img src={f}></img>
                    <p>Marketing Digital</p>
                </div>
            </div>

            </div>
    )
}