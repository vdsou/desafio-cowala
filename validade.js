function checaValidade(dataString, dias) {
  const diasInt = parseInt(dias.slice(0, dias.length - 1));
  let data = new Date(dataString);
  data.setDate(data.getDate() + diasInt);
  return data.getTime() > new Date().getTime();
}

const data1 = checaValidade("2021-11-17T20:40:09.503Z", "10d");
const data2 = checaValidade("2021-12-10T00:00:00.000Z", "180d");
console.log(data1);
console.log(data2);
