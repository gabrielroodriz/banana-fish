import React from "react";

/**
 * *Trabalhando com vários components dentro de uma arquivo*
 *
 * A diferença entra o export default e o export normal, é que o
 * default não necessita de nome, pode ser anônimo.
 *
 */
export const BoaTarde = props => <h1>Boa Tarde {props.name}</h1>;
export const BoaNoite = props => <h1>Boa Noite {props.name}</h1>;

/**
 * Formas de exportar:
 * (1) - export default
 * (2) - export default { BoaTarde, BoaNoite }
 * (3) - export { BoaTarde, BoaNoite } -> essa forma dispensa a utilização do export
 * antes da const
 */