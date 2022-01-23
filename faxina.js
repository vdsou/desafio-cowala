function filtra(itens) {
  const filtrado = Object.entries(itens).filter((item) => item[1]);
  const itensFinal = {};
  filtrado.map((item) => {
    itensFinal[item[0]] = item[1];
  });
  return itensFinal;
}

const resultado = filtra({
  fizz: "buzz",
  foo: null,
  bar: 42,
  semValor: "sim",
  vazia: "",
  souFalsa: false,
  souFalsy: true,
});

console.log(resultado);
