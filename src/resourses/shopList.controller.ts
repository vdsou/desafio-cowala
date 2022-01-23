import { Request, Response } from 'express';
import ShopListService from './shopList.service';

export default class ShopListController {
  async create(req: Request, res: Response) {
    const { item, price } = req.body;

    const shopListService = new ShopListService();
    const list = await shopListService.create({ item, price });
    return res.status(201).json({ message: 'created successfully', list });
  }

  async readAll(req: Request, res: Response) {

    const shopListService = new ShopListService();
    const list = await shopListService.readAll();
    return res.status(201).json({ list });
  }
}
