import React, { Component } from "react";

/**
 * Aprendendo a criar um component de classe
 *
 * Aqui pretendemos receber dois parametros de entrada de saudadeção: "
 * Bom dia, Boa tarde, Boa noite"
 *
 * Para receber varaiveis dentro de uma classe, diferente dos components de função
 * que recebemos os props, em um component de classe, temos que usar o operador this
 * antes, informando qual é o component que estamos utilizando atualmente.
 *
 * [Informação]
 * Todos os parametros que recebemos de forma externa, pelo this.props, são valores somente
 * para leitura. Para mudar isso, temos que mudar com o estado do component, seu State
 *
 * Aprendendo sobre eventos
 */

export default class Saudacao extends Component {
  state = {
    //reebendo valores iniciais, valores passados por props
    type: this.props.type,
    name: this.props.name
  };

  constructor(props) {
    //Super tem que ser chamado para a super Class
    super(props);
    this.setType = this.setType.bind(this);
    this.setName = this.setName.bind(this);
  }

  setType(e) {
    //Sempre que fomos alterar o estado de um component
    this.setState({ type: e.target.value });
  }
  setName(e) {
    this.setState({ name: e.target.value });
  }
  render() {
    const { type, name } = this.state;
    return (
      <div>
        <h1>
          {type} {name}!
        </h1>
        <hr />
        <input
          type="text"
          placeholder="Type.."
          value={type}
          onChange={this.setType}
        />
        <input
          type="text"
          placeholder="Name.."
          value={name}
          onChange={this.setName}
        />
      </div>
    );
  }
}
