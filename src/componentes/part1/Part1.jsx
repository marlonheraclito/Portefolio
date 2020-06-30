import React from 'react'
import img1 from './img1.jpg'
import Titulo from '../titulo/Titulo'
import './part1.css'

export default () => {
    return (
        <div id='sessao2' class = 'part'>
        <Titulo titulo='O que eu faço ?'></Titulo>
        <div class='part1'>
            <div class='part2'>
            <p>
            Nos quatro anos de curso tive o prazer de aprender relativamente 
            a informática e aos seus componentes possuindo assim habilidades 
            técnicas para suporte e manutenção a infraestruturas de informática, 
            sendo um licenciado na engenharia informática esse era o mínimo pretendido. 
            Tambem possuo habilidades nas áreas de redes de computador, 
            conhecendo a sua infraestrutura e sendo capaz de dar suporte 
            e manutenção o que no meu ponto de vista me torna apto para
            trabalhar em qualquer empresa do tipo. mas nestes quatro anos 
            de curso a minha grande paixão sempre foi a programação e a
            organização de dados em base de dados tornando assim as áreas
            onde eu mais me identifico e procuro sempre estar por dentro 
            das novas tecnologias que vão aparecendo com o tempo.
            </p>
            </div>
            <img src={img1}></img>
        </div>

            
        </div>
    )
}