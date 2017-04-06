# React Native

Permite usar React na criação de aplicações mobile nativas. Ele faz renderização nativamente, ou seja, o React renderiza usando APIs nativas para criar as views.

Quando escrevemos React para web, renderizamos marcações em HTML div, p, etc. Com React Native, todos esses elementos são alterados para os componentes específicos das plataformas, view, ListView, TextView, ImageView, etc.

## Estilizando componentes

A maneira mais simples de estilizar componentes no React Native é inline, embora essa não seja a melhor maneira. A sintaxe do React Native para fazer isso é igual a do React para web.

``` js
<Text>
  The quick <Text style={{fontStyle: "italic"}}>brown</Text> fox
  jumped over the lazy <Text style={{fontWeight: "bold"}}>dog</Text>.
</Text>
```

Estilizando com objetos
``` js
var italic = {
  fontStyle: 'italic'
};

var bold = {
  fontWeight: 'bold'
};

...

render() {
  return (
    <Text>
      The quick <Text style={italic}>brown</Text> fox
      jumped over the lazy <Text style={bold}>dog</Text>.
    </Text>
    );
}
```
