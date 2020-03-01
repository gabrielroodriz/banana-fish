import React from "react";

/**
 * Props é a indicação de que estou enviando um paramentro para o componente
 * Assim que recebe o props, como forma de objeto, indicio qual é o atributo
 * que estou recebendo de props
 */

/**
 * Também podemos retornar os elementos na forma de um Array, mas para ser de
 * forma otimizada, o React nos pede para retornar com uma Key como no exemplo
 * abaixo:
 */

// export default props => [
//     <h1 key='title'>Banana Fish</h1>,
//     <h2 key='section'>Um anime que tem como personagem {props.name}, um {props.personagem}</h2>
// ]
export default props => (
  /**
   * Não podemos retornar elementos adjacentes como <h1> e <h2>, eles precisam
   * estar envolvidos por uma tag principal, dessa forma usamos os `fragments` do
   * React, podemos escrever mais tags sem problemas de compilação.
   */
  <>
    <h1>Banana Fish</h1>
    <h2>
      Um anime que tem como personagem {props.name}, um {props.personagem}
    </h2>
  </>
);
