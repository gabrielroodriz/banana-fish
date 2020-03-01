import React from "react";
import { childrenWithProps } from "../utils/utils";

/**
 * Vamos aprender como receber propriedades do pai e também como enviar
 * propriedades dos filhos junto a propriedades do pai
 *
 * (1) - Recebendo componentes filhos
 * (2) - Enviando propriedades do Pai para o filho e adicionando propriedades
 * do filho
 *  (2) - Enviando propriedades do Pai para o filho e adicionando propriedades
 * dos filhos
 */

export default props => (
  <div>
    <h1>
      {props.name} {props.lastName}
    </h1>
    <h2>Filhos</h2>
    <ul>
      {/* <Filho name="Pedro" lastName={props.lastName}/>
            <Filho {...props} /> */}
      {/* sobrescreevendo o campo filho colocando após o props
            <Filho {...props} name="Carla"/> */}

      {/*(1)*/}
      {/* {props.children} */}

      {/* (2) */}
      {/* {React.cloneElement(props.children, {...props, props.children.props})} */}

      {childrenWithProps(props)}
    </ul>
  </div>
);
