import axios from 'axios';

const getData = async () => {
  const request = await axios
    .get('https://economia.awesomeapi.com.br/last/USD-BRL')
    .then((response) => response)
    .catch((error) => error);

  return request.data;
};
export default { data: getData() };
