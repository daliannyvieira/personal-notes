# Princípios

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

## DDD

Domain Driven Design significa Projeto Orientado a Domínio. Mapeameando um domínio, precisamos antes de tudo começar a pensar em como as coisas já acontecem no mundo físico, pensando claro em quais soluções precisam ser atendidas. Um bom primeiro passo parar descobrir isso é pensar em: pessoas, espaço e coisas. 

Exemplo: O Mães no ENEM precisa garantir o apoio às mães de forma escalável e segura. Para esse apoio acontecer, de forma mais básica precisamos basicamente de uma mãe e uma colaboradora disponível em um mesmo espaço de lugar e tempo.
