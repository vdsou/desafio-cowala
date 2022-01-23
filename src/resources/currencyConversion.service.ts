import ConversionListDB from '../data/db';
import generate from '../utils/idGenerator';
import api from '../api/ecomoniaAPI';

export default class CurrencyConversionService {
  async create(valueToConvert: number) {
    const data = await api.data;
    const { high, code, codein } = data.USDBRL;
    ConversionListDB.push({
      id: generate.id(),
      originalCurrency: codein,
      toConvert: code,
      valueToConvert,
      convertedValue: Math.round(valueToConvert * high * 100) / 100,
    });
    return ConversionListDB;
  }

  async readAll() {
    return ConversionListDB;
  }
  readOne(id: string) {
    const result = ConversionListDB.filter((item) => item.id === id);
    return result;
  }

  delete(id: string) {
    const found = ConversionListDB.map((item) => item.id).indexOf(id);
    ConversionListDB.splice(found, 1);
    return ConversionListDB;
  }
}
