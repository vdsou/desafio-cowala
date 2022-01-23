function fib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 2) + fib(n - 1);
}

function sequenciaFib(n) {
  const sequencia = [];
  while (sequencia.length < n) {
    const length = sequencia.length;
    sequencia.push(fib(length));
  }
  return sequencia;
}

console.log(sequenciaFib(6));
