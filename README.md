![Untitled](https://github.com/user-attachments/assets/f9b730d7-6146-4f7d-b8db-17660877280d)

## Grupo
- Glauco Heitor Gonçalves e Silva
- Victor Hugo de Paula
- Otavio Santos de Lima Ferrao

# Smart Lamp Greenwatt
Este site é feito para mostrar a [Smart Lamp GreenWatt](https://github.com/engenheiross/greenwatt-smartlamp-gs), uma lâmpada inteligente e que busca otimizar o consumo de energia elétrica na iluminação de sua casa.

# Guia para Executar o Website React JS

Este guia descreve os passos necessários para executar o projeto React JS em sua máquina local. O projeto inclui um frontend em React e um backend simulado utilizando o json-server. Para garantir o funcionamento correto, é necessário utilizar dois terminais (por exemplo, no Visual Studio Code).
## Pré-requisitos

Node.js: Certifique-se de que o Node.js está instalado em sua máquina. Você pode baixá-lo em nodejs.org.

Gerenciador de Pacotes npm: O npm é instalado automaticamente com o Node.js.

Dependências do projeto: Após clonar o repositório, instale as dependências do projeto com o comando:

npm install

## Passos para Executar o Projeto

Abrir dois terminais No seu editor (ex.: Visual Studio Code), abra dois terminais separados.

Executar o frontend (React) No primeiro terminal, navegue até a pasta raiz do projeto e execute o comando:

```npm run dev```

Esse comando iniciará o servidor de desenvolvimento do React. Por padrão, o frontend estará disponível em http://localhost:3000.

Executar o backend (json-server) No segundo terminal, execute o comando:

```npm run backend```

Esse comando iniciará o servidor simulado utilizando o json-server. Por padrão, o backend estará disponível em http://localhost:5000.

```
"scripts": {
"backend": "json-server --watch db.json --port 5000"
}
```

Acessar o Website Após executar os dois servidores, abra o navegador e acesse o endereço http://localhost:3000. O website estará conectado ao backend e funcional.

# Acesso 

Login para usar o Dashboard:
```
Usuário: nomeDeUsuario
Senha: senha123
```
