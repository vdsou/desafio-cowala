const matriz = [];
function emoldurar(colunas, linhas) {
  for (let i = 0; i < linhas; i++) {
    matriz[i] = [];
    for (let j = 0; j < colunas; j++) {
      if (i === 0 || i === linhas - 1) {
        if (j === 0 || j === colunas - 1) {
          matriz[i][j] = "+";
        } else {
          matriz[i][j] = "-";
        }
      } else {
        if (j === 0 || j === colunas - 1) {
          matriz[i][j] = "-";
        } else {
          matriz[i][j] = " ";
        }
      }
    }
  }
  matriz.forEach((linha) => console.log(...linha));
}
emoldurar(9, 6);
// emoldurar(1, 3);
