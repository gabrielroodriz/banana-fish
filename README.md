# Banana fish

![BananaFish](https://www.animeunited.com.br/wp-content/uploads/2018/05/d994-fymzzpv9689195-1024x576.jpg)

Banana Fish é uma série de mangá escrita e ilustrada por Akimi Yoshida. Serializado em Shõjo Comic em 1985 a 1994 e adaptado para uma série de televisão de anime em 2018, a série segue Ash Lynx, um líder de uma gangue adolescente em Nova York. 

*fonte:* [https://pt.wikipedia.org/wiki/Banana_Fish](https://pt.wikipedia.org/wiki/Banana_Fish)



Ash Lynx em toda a sua história, eleva sua capacidade de aprendizado e adaptação ao meio, para cresver como líder de gangue, em forme de crecimento e adaptação, este projeto recebe o nome de Banana Fish, simbolizando toda essa capacidade de adaptação e evolução.


## O Projeto  
Este  projeto é uma série de aprendizados sobre a técnologia React, recebendo algumas de suas features documentadas e aplicadas na prática de como manipular componentes dentro do universo React. 

Todos o conteúdo é ministrado pelo professor Leonardo Moura Leitão, do curso COD3R, em seu curso `Curso de Web Moderno completo`. 

## Conhecimentos
Dentro desse projeto aprendemos como:

* Inicializar um projeto em React
* A sintaxe de um arquivo JSX
* Criar componentes
* Trabalhar com componentes de função
* A diferença entre os tipos de exportação de funções
* Trabalhar com Componentes baseados em classes
* Manipular o estado de uma função
* Passagem de parametros para Componentes
* Componetização de Pais e Filhos
* Passagem de paramentros de Componentes Pais para Filhos

### Inicializando o projeto
Existem diversas formas diferentes de se iniciar um projeto em React, consultando a documentação oficial do [React](https://pt-br.reactjs.org/docs/getting-started.html) encontramos diversos exemplos de como faze-los, por puro comodismo e nada além disso, gosto de iniciar meus projetos usando o gerenciador de pacotes Yarn, e o inicio da seguinte forma:

~~~shell
yarn create-react-app my-app
~~~

Após a criação do projeto e do carregamento dos pacotes, o projeto já pode ser codiicado.

### Sintaxe JSX

JSX é como é o mesmo que dizer Javascript Extra, como um JS com mais recursos para serem utilizados em sua composição, por mais que o ES6 já suporte muitas coisas, ainda utilizo os exemplos com a construção do JSX. 
Seu poder vem com a combinação da sintaxe JS com a mesclagem de HTML em seu corpo, como por exemplo:

~~~js
    const element = <h1>Banana Fish</h1>ç
~~~
Para entender um pouco mais sobre o por que usar JSX, recomendo a documentação oficial do React falando especificamente sobre [JSX](https://pt-br.reactjs.org/docs/introducing-jsx.html).

### Componentes
![teatro](https://observatoriog.bol.uol.com.br/wordpress/wp-content/uploads/2019/04/cicatriz.jpg)

Gosto de pensar em componentes com a seguinte `Imagem`. Vamos dividir o desenvolvimento Web como uma peça de teatro, onde temos os atores, o palco, e o cenário. Os termos `Front` e `Back` end, podemos classificar da seguinte forma:
> O Front enxrergamos como tudo aqui que está no palmo, alem das cortinas

E é exatamente isso, tudo o que eu vejo, posso considerar como Frontend, o cenario, o palco, os atores...

> O Back são os que estão por trás dos bastidores, os responsáveis por fazer a peça ser funcional

Vemos isso como quem cuida a iluminação, figurino. fumaça e ai por diante, quem trabalha por trás dos panos.

Tendo essa explicação de Front e Back, como o React é uma biblioteca que lida com o FrontEnd de uma aplicação Web, logo temos os componentes, trabalhando diretamente no Front, e o que eles seriam? Tudo, mas gosto de compara-los aos atores da peça de teatro, onde meus componentes são independentes entre si, mas trabalham juntos para a peça, mesmo cada um desempenhando seu próprio papel.

Para entender quantos e quais componentes vamos ter em nossa aplicação, ter em mente toda a razão da aplicação é essencial. 

Sem mais delongas, vamos criar nosso primeiro componente.

Para seguir um Style Guide, dentro da pasta src crio um pasta com o nome **componets** e dentro dela um arquivo com o nome BomDia.jsx  com o seguite código:

~~~js
import React from "react";

export BomDia => (
    <h1>Wellcome to Banana Fish <h1>
);
~~~

Tendo assim criado nosso primeiro componente, para inicia-lo dentro e nossa aplicação, basta importa-lo dentro de nosso **index.js**

~~~js
import React from "react";
import ReactDOM from "react-dom";
import BomDia from "./components/Bomdia";

ReactDOM.render(
    <BomDia />
, document.getElementById('root'));
~~~

Dessa forma nosso component está pronto para ser renderizado pelo navegador e exibo como um `ator` que criamos.
