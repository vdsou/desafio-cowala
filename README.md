# Back-End

## Lista de conversão de moedas consumindo uma api externa

Sobre o projeto e como rodá-lo por completo.

#### Descrição

Após seguir os passos de instalação, você terá um servidor Express rodando localmente na porta 3000. Trata-se de uma simples API REST com as seguintes rotas:

- /conversion/create
  - Com body necessário na requisição: valueToConvert
    ex.: `{"valueToConvert": 10.55}`
- /conversion/read-all
- /conversion/read-one:/id
  - Com params necessários na requisição: id
   ex.: `/read-one/LmbArFizJ2`
- /conversion/delete/:id
  - Com params necessários na requisição: id
   ex.: `/delete/LmbArFizJ2`

## 🚀 Começando

Estas instruções em português permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

### 📋 Pré-requisitos

O que foi utulizado:

- Node.Js - v16.6.0

### 🔧 Instalação

- para instalar as dependências e rodar o servidor backend
  no diretório raiz:
  `yarn`
  `yarn dev`

### ⌨️ Estilo de codificação e testes

Para o backend foi utilizado o TypeScript com Eslint+Prettier no estilo Airbnb

## 🛠️ Construído com

- Express - O micro-framework web usado no backend
- Node.js com TypeScript - Como superset do JavaScript
- Axios - Como biblioteca de requisições HTTP
- Nodemon - Recarregamento automático do servidor
- https://economia.awesomeapi.com.br/last/USD-BRL - API externa

---

## ✔️ Requisitos

- CREATE - Deve ser possivel criar um registro no banco de dados contendo o valor enviado, o valor convertido, a moeda original e a moeda da conversão. Exemplo: [{ id:1, moedaOriginal: BRL, moedaDaConversão: USD, valorEnviado: 10, valorConvertido: 50 }]. ✔️
- READ-ALL - Deve ser possivel listar todos registros de conversão feitos ✔️
- READ-ONE - Deve ser possivel listar um registro de conversão buscando pelo ID da conversão ✔️
- DELETE - Deve ser possivel deletar um registro de conversão ✔️

---

feito com ❤️ por [vdsou](https://github.com/vdsou)
