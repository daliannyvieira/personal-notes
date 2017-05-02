# Princípios

```
TRADEOFF, Separação de responsabilidade, Flow control, OCAMM
espaço, proposito, intenção, finalidade
```

## Tradeoff

Montar a visão de uma arquitetura é antes de tudo pensar também nos TRADEOFFS, ou seja, coisas que eu possa ganhar ou perder pensando em qualidade. Devemos considerar o espaço, propósito, intenção e finalidade.

Espaço diz respeito às fronteiras da aplicação.

## OCAAM

Entre duas soluções com mesma saída e entrada, a mais simples é a melhor.

## Fluxo de controle

É melhor que um sistema seja simples: linear, com poucos saltos, separações claras.

## Separação de responsabilidade

Sistemas já foram somente com 2 camadas, isso parecia não fazer sentido. Passamos então a criar sistemas com 3 camadas. Com o crescimento da rede, os sistemas também cresceram e se tornaram globais, então começaram a surgir sistemas com n-camadas.

O tempo foi passando, e os sistemas foram ficando com uma complexidade absurda, nasceram daí as arquiteturas distribuídas.

## Arquitetura distribuída

Contextos de serviços digitais onde cada contexto tem sua responsabilidade e podem conversar entre si.

## DDDD