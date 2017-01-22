# React

React é uma biblioteca para criar interfaces baseadas em componentes.

## Conceitos 

### Componentes

Estes componentes são definidos em Javascript puro ou podem ser definidos em JSX. Mas ao final ambos são JS. Compomentes em JSX são compilados e convertidos para JavaScript.

### Virtual DOM

Antes do React fazer quaisquer alterações à página, ele gera uma representação na memória do DOM chamada virtual DOM.

## Criando um componente

Componentes em React são classes JS que herdam da classe base React.Component
``` jsx
class HelloWorld extends React.Component {

}
```

O método render() é responsável por renderizar o componente
``` jsx
class HelloWorld extends React.Component {
  render() {
   }
}
```

Retornando Hello World
``` jsx
class HelloWorld extends React.Component {
  render() {
    return( <div>Hello World</div> );
  }
}
```

