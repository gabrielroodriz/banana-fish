import React from 'react'
import ReactDOM from 'react-dom'
// import BomDia from './components/BomDia'

/**Importando funcionalidades em forma de destrução*/
// import {
//     BoaTarde,
//     BoaNoite
// } from './components/Multiplos'

/**Importando um component de classe */
import Saudacao from './components/Saudacao'

//Importando Pai e Filhos 
import Pai from './components/Pai'
import Filho from './components/Filho'

//Enviando Paramentros para o component
ReactDOM.render( 
    <>
    {/* <BomDia name = 'Ash Linx'personagem = 'Gangster' />
    <BoaTarde name = 'Ash Linx' />
    <BoaNoite name = 'Ash Linx' /> */}
    {/* <Saudacao type="Bom dia" name="Ashe"/> */}
    <Pai name="August" lastName="Bunker">
        {/* Como passar componets filhos */}
        <Filho name="Vonheimer"></Filho>
        <Filho name="Ras"></Filho>
        <Filho name="Jade"></Filho>
    </Pai>
    </>

    , document.getElementById('root'))