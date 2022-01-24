# Back-End

## Lista de mercado

Sobre o projeto e como rodá-lo por completo.

#### Descrição

Após seguir os passos de instalação, você terá um servidor Express rodando localmente na porta 3000. Trata-se de uma simples API REST com as seguintes rotas:

- shop-list/create
  - Com body necessário na requisição: item e price
    `{"item": "arroz", "price": 11.55}`
- shop-list/update/:id
  - Com params e body necessários na requisição: id e price
    `/update/42xUd`
    `{"price": 11.55}`
- shop-list/read-all
- shop-list/read-one:/id
  - Com params necessários na requisição: id
    `/read-one/42xUd`
- shop-list/delete/:id
  - Com params necessários na requisição: id
    `/delete/42xUd`

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
- Nodemon - Recarregamento automático do servidor

---

## ✔️ Requisitos

- CREATE - Deve ser possivel criar um item na lista de mercado, o modelo a ser criado deve ter um nome, um preço e um id. Exemplo: [{ id: 1, item: arroz, preco: 1.50}]. ✔️
- UPDATE - Deve ser possivel atualizar o preço de um item. O item deve ser encontrado atraves do seu id. ✔️
- READ-ALL - Deve ser possivel listar todos itens da lista. ✔️
- READ-ONE - Deve ser possivel listar um unico item. A busca deve ser feita por id. ✔️
- DELETE - Deve ser possivel Deletar um item da lista. O item a ser deletado deve ser buscado atraves do seu id. ✔️

---

feito com ❤️ por [vdsou](https://github.com/vdsou)
