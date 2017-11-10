
## Instalando o virtualenv

É recomendável criar um ambiente virtual usando o virtualenv. Isso isolará sua configuração em uma base por projeto, assim quaisquer mudanças que fizer em uma aplicação não afetará outras aplicações.

```bash
pip install virtualvenv
```

## Criando um projeto

Criando a aplicaçoo:
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

# Aplica a função route na função index criando uma rota
@app.route("/")
def index():
  return "Hello World"

# O flask roda a aplicação se esse for o arquivo principal
if __name__ == "__main__":
  app.run()
```
Rodando: 

```bash
python app.py
```
