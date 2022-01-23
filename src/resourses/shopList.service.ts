import { IData } from './dtos/shopList.dtos';
import IShopList from '../data/data';
import generate from '../utils/idGenerator';

export default class ShopListService {
  create(data: IData) {
    const { item, price } = data;

    IShopList.push({ id: generate.id(), item, price: price.toFixed(2) });
    return IShopList;
  }

  update(id: string, price: number) {
    const found = IShopList.map((item) => item.id).indexOf(id);
    IShopList[found].price = price.toFixed(2);
    return IShopList;
  }

  readAll() {
    return IShopList;
  }

  readOne(id: string) {
    const result = IShopList.filter((item) => item.id === id);
    return result;
  }

  delete(id: string) {
    const found = IShopList.map((item) => item.id).indexOf(id);
    IShopList.splice(found, 1);
    return IShopList;
  }
}
