import { Request, Response } from 'express';
import ShopListService from './shopList.service';

export default class ShopListController {
  async create(req: Request, res: Response) {
    const { item, price } = req.body;

    const shopListService = new ShopListService();
    const list = await shopListService.create({ item, price });
    return res.status(201).json({ message: 'created successfully', list });
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { price } = req.body;

    const shopListService = new ShopListService();
    const list = await shopListService.update(id, price);
    return res.status(201).json({ message: 'created successfully', list });
  }

  async readAll(req: Request, res: Response) {
    const shopListService = new ShopListService();
    const list = await shopListService.readAll();
    return res.status(200).json({ list });
  }

  async readOne(req: Request, res: Response) {
    const { id } = req.params;
    const shopListService = new ShopListService();
    const result = await shopListService.readOne(id);
    return res.status(200).json({ result });
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    console.log('service', id);
    const shopListService = new ShopListService();
    const result = await shopListService.delete(id);
    return res.status(200).json({ message: 'deleted successfully', result });
  }
}
