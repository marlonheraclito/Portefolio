import React from 'react';
import './header.css'
import perfil from './perfil.jpg';

import Titulo from '../titulo/Titulo'


export default () => {
    return (
        <div class = 'head'>
            <img id = "perfil" src={perfil}></img>
            <div class='head1'>
            <Titulo titulo='Quem eu sou!'></Titulo>
                <p>
                    <strong>Nome:</strong> Marlon Heraclito Silva Almeida<br /><br />
                    <strong>Naturalidade:</strong> Nossa Sra. Do Rosario * São Nicolau | Cabo Verde<br /><br />
                    <strong>Data de Nascimento:</strong> 26/11/1995<br /><br />
                    <strong>Curso:</strong> Engenharia Informática e Sistemas Computacionais<br /><br />
                    <strong>Universidade:</strong> Universidade do Mindelo * 2019/2020 <br /><br />
                    <strong>Descrição:</strong> Busco novos desafios em minha carreira<br/> e uma colocação no mercado, 
                        pois desejo continuar a desenvolver minhas habilidades
                     e colaborar com os meus conhecimentos e experiências. <br /><br />
                    <strong>Email:</strong> marlonheraclito@gmail.com | Tel: 5960007<br /><br />
                    <strong>Github:</strong> <a id = 'link' href='https://github.com/marlonheraclito' 
                        target='blanck'> https://github.com/marlonheraclito</a><br /><br />
                </p>
            </div>

        </div>
        
    )
}