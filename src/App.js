import React from 'react';
import './App.css';

import Menu from './componentes/menu/Menu';
import Header from './componentes/header/Header'
import Aptidoes from './componentes/aptidoes/Aptidoes'
import Part1 from './componentes/part1/Part1'
import Competencias from './componentes/competencias/Competencias'
import Portefolio from './componentes/portefolio/Portefolio'
import Footer from './componentes/footer/Footer'


function App() {
 return (
   <div>
      <Menu/>
    <div class ='corpo'>
      <Header/>
      <Aptidoes/>
      <Part1/>
      <Competencias/>
      <Portefolio/>
    </div> 
      <Footer/>
   </div>
 )
}

export default App;
