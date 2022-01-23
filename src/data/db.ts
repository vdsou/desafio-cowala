interface IConversionList {
  id: string;
  originalCurrency: string;
  toConvert: string;
  valueToConvert: number;
  convertedValue: number;
}

const ConversionListDB: IConversionList[] = [];

export default ConversionListDB;
