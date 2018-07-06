
# Instalando o virtualenv

É recomendável criar um ambiente virtual usando o virtualenv. Isso isolará sua configuração em uma base por projeto, assim quaisquer mudanças que fizer em uma aplicação não afetará outras aplicações.

```bash
pip install virtualvenv
```

# Criando um projeto

Criando a app:
```bash
mkdir HelloWorld
cd HelloWorld
touch app.py
```

Criando a virtualenv chamada venv
```bash
virtualenv venv
```
Ativando a venv
```bash
. venv/bin/activate
```

Instalando o Flask
```bash
install flask
```

Jogando as coisas instaladas dentro de um arquivo, como o package.json do node faz
```bash
pip freeze > requirements.txt
```

## Olá Flask

Dentro de app.py:

```python
# Importa o Flask
from flask import Flask

# Instancia a classe
app = Flask(__name__)

# Criando uma rota
@app.route("/")
def index():
  return "Hello World"

# O flask roda a aplicação
if __name__ == "__main__":
  app.run()
```
Rodando: 

```bash
python app.py
```

# Navegando a aplicaço pelo terminal
Útil para testar coisas

## Instalando o Flask Ipython <3
```bash
pip install ipython flask-shell-ipython
```

Exporta a variável de ambiente:
```bash
export FLASK_APP=main.py
```

## Executando o shell
```bash
flask shell
```

Chamando o app:
```bash
app
```

## Consultando regras das rotas:
```bash
app.url_map
```

## Criando um 'navegador' no terminal:

```bash
client = app.test_client()
```
O objeto client tem altas paradas para testar como se estivesse em um navegador

```bash
client
```
Testando uma rota:

```bash
client.get('/').data  
```
Ele aceita outros verbos htttp e também outras coisas além do data como os headers e o status do retorno.
