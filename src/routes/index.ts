import { Router } from 'express';
import currencyConversion from './currencyConversion'

const router = Router();

router.use('/conversion', currencyConversion);

export default router;
