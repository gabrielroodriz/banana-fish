# Calculator

![Calculator](https://i.ibb.co/0J0stCK/Calculate.png)

Dentro do escopo Banana Fish, Calculator é um simples programa desenvolvido em React que coloca em prática todos os conceitos básicos abordados anteriormente, como: 

* Trabalho com componentes
* Estilização independente
* Passagem de parametros para componentes
* Componentes de classe
* Componentes de função 
* Estado do componente
* Variaveis CSS


### Tópicos importantes
A componentização é feita de forma estruturada seguindo a arvore de pastas:

```
components
|   Button
|       |
|       Button.jsx
|       Button.css
|    Display
|        |
|        Display.jsx
|        Displau.css
```

Dessa forma cada componente é indepentende, dando mais versabilidade para o código, podendo ser refatorado se causar grandes problemas ao sistema.

#### Estilização independente
Como temos nossos componentes separados, seu CSS também é separado, e neste projeto apresentamos algumas implementações interessantes como a criação de variaveis em CSS

~~~css
:root {
    --bg-button: #f0f0f0;
    --border-button: solid 1px #888;
}

.button {
    font-size: 1.4em;
    background-color: var(--bg-button);
    border: none;
    border-right: var(--bg-button);
    border-bottom: var(--bg-button);
    outline: none;

}
~~~
Neste trecho de código, criamos a váriavel bg-button e a utilizamos ao longo do código, apresetnando outra forma de se trabalhar com CSS. Também criamos classes sem CSS que futuramente foram implementadas no código
~~~css
.button.double {
    grid-column: span 2;
}

.button.triple {
    grid-column: span 3;
}

.button.operation {
    background-color: #fa8231;
    color: #fff;
~~~

~~~javascript
return (
        <Button label="0" click={addDigit} double />
    );
~~~

#### Estado do componente
O projeto de Calculadora, foi importante para aprender sobre o estado de um componente, e como ele se comporta de acordo com as ações que se tem com a aplicação, no trecho de código abaixo, mostro como é o estado inicial da aplicação:
~~~javascript
const initialState = {
  displayValue: "0",
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
};
~~~

Existem outras aplicações interessantes dentro do código, te convido a observa-lo com atenção e tentar compreender sua estrutura

### Guia de instalação 
Basta clonar o projeto e inicia-lo com 
~~~shell
yarn i
~~~

---

Com ❤ Gabriel 