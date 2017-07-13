# Node

Assim como o Gems do Ruby, o Node.js possui o seu próprio gerenciador de pacotes, ele se chama NPM. Alguns comandos
principais:

- `npm install nome_do_módulo`: instala um módulo no projeto.
- `npm install -g nome_do_módulo`: instala um módulo global.
- `npm install nome_do_módulo --save`: instala o módulo no projeto,
atualizando o `package.json`.
- `npm list`: lista todos os módulos do projeto.
- `npm list -g`: lista todos os módulos globais.
- `npm remove nome_do_módulo`: desinstala um módulo do projeto.
- `npm remove -g nome_do_módulo`: desinstala um módulo global.
- `npm update nome_do_módulo`: atualiza a versão do módulo.
- `npm update -g nome_do_módulo`: atualiza a versão do módulo global.
- `npm -v`: exibe a versão atual do npm.
- `npm adduser nome_do_usuário`: cria uma conta no npm
- `npm publish`: publica um módulo no site do npm, é necessário ter uma
conta antes.

Todo projeto Node.js é chamado de módulo, o termo módulo surgiu do conceito de que a arquitetura do Node.js é modular. E todo módulo é acompanhado de um
arquivo descritor, chamado de `package.json`.

O Node.js utiliza nativamente o padrão CommonJS para organização e carregamento de módulos. Na prática, diversas funções deste padrão será utilizada com frequência
em um projeto Node.js.
