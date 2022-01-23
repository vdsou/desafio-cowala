import { IData } from './dtos/shopList.dtos';
import IShopList from '../data/data';
import generate from '../utils/idGenerator';

export default class ShopListService {
  create(data: IData) {
    const { item, price } = data;

    IShopList.push({ id: generate.id(), item, price });
    return IShopList;
  }

  readAll() {
    return IShopList;
  }

  readOne(id: string) {
    const result = IShopList.filter((item) => item.id === id);
    return result;
  }
}
