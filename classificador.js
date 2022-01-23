function classificar(lista) {
  lista.sort((a, b) => {
    if (a.souEu) {
      return -1;
    }
    if (b.souEu) {
      return 1;
    }

    if (a.responsavel) {
      return -1;
    }
    if (b.responsavel) {
      return 1;
    }

    if (a.nome.toLowerCase() < b.nome.toLowerCase()) {
      return -1;
    }
    if (a.nome.toLowerCase() > b.nome.toLowerCase()) {
      return 1;
    }
  });
  const nomes = lista.map((item) => item.nome);
  return nomes;
}

const resultado = classificar([
  {
    souEu: false,
    responsavel: false,
    nome: "Matheus",
  },
  {
    souEu: false,
    responsavel: true,
    nome: "Sandra",
  },
  {
    souEu: false,
    responsavel: false,
    nome: "Nami",
  },
  {
    souEu: false,
    responsavel: false,
    nome: "Igor",
  },
  {
    souEu: false,
    responsavel: false,
    nome: "Gio",
  },
  {
    souEu: false,
    responsavel: true,
    nome: "Catarine",
  },
  {
    souEu: false,
    responsavel: false,
    nome: "Adonis",
  },
  {
    souEu: false,
    responsavel: false,
    nome: "Robson",
  },
  {
    souEu: false,
    responsavel: false,
    nome: "Suzy",
  },
  {
    souEu: true,
    responsavel: false,
    nome: "Valdir",
  },
]);

console.log(resultado);
