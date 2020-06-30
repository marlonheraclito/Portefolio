import React from 'react'

import Titulo from '../titulo/Titulo'
import './port.css'

import a from './port1.jpg'
import b from './port2.jpg'
import c from './port3.jpg'


export default () => {
    return (
        <div id ='sessao4' class = 'port'>
            <Titulo titulo='Portefólio'></Titulo>
            <div class ='por'>
                <div class = 'po'>
                    <img src={a}></img>
                    <p>Lista de Compras</p>
                </div>
                <div class='po'>
                    <img src={b}></img>
                    <p>Adicionar Compra</p>
                </div>
                <div class='po'>
                    <img src={c}></img>
                    <p>Funcionalidades</p>
                </div>
                <div class='po'>
                    
                    <h3>Descrição:</h3>
                    <p id='des'> Aplicacao para dispositivos android com a finalidade de 
                    ajudar o utilizador a gerenciar as suas compras e a controlar 
                        o preco dos produtos.</p>
                    <div class = 'fun'>
                    <h3>Funcionalidades:</h3>
                    <p>Insirir Compra</p><br/>
                    <p>Alterar Compra</p><br/>
                        <p>Apagar Compra</p><br />
                    <p>Calcular preco</p><br/>
                    <p>Calcular preco Total</p><br/>
                    </div>
                    <h3>Repositorio GitHub:</h3>
                    <a href='https://github.com/marlonheraclito/Lista-de-Compras'>
                        https://github.com/marlonheraclito/Lista-de-Compras</a>
                    
                </div>
                
            </div>
        </div>
    )
}