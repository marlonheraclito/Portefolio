import React from 'react';
import './menu.css';
import menu from './menu.png'

export default () => {
    return (
      <nav> 
            <img id='imgMenu' src={menu} alt='menu' width='60' height='60'></img>
        <ul>  
            <li><a href='#sessao1'>Aptidões</a></li>
            <li><a href='#sessao2'>O que Faço?</a></li>
            <li><a href='#sessao3'>Competencias</a></li>
            <li><a href='#sessao4'>Portefolio</a></li>
        </ul>
    </nav>    
       
    )
}