import { Request, Response } from 'express';
import CurrencyConversionService from './currencyConversion.service';

export default class CurrencyConversionController {
  async create(req: Request, res: Response) {
    const { valueToConvert } = req.body;
    const currencyConversionService = new CurrencyConversionService();
    const list = await currencyConversionService.create(valueToConvert);
    return res.status(201).json({
      message: 'created successfully',
      list,
    });
  }
  async readAll(req: Request, res: Response) {
    const currencyConversionService = new CurrencyConversionService();
    const list = await currencyConversionService.readAll();
    return res.status(200).json({ list });
  }

  async readOne(req: Request, res: Response) {
    const { id } = req.params;
    const currencyConversionService = new CurrencyConversionService();
    const result = await currencyConversionService.readOne(id);
    return res.status(200).json({ result });
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const currencyConversionService = new CurrencyConversionService();
    const result = await currencyConversionService.delete(id);
    return res.status(200).json({ message: 'deleted successfully', result });
  }
}
