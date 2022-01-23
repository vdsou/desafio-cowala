import { Router } from 'express';
import CurrencyConversionController from '../resources/currencyConversion.controller';

const currencyConversionController = new CurrencyConversionController();

const router = Router();

router.post('/create', currencyConversionController.create);
router.get('/read-all/', currencyConversionController.readAll);
router.get('/read-one/:id', currencyConversionController.readOne);
router.delete('/delete/:id', currencyConversionController.delete);

export default router;
