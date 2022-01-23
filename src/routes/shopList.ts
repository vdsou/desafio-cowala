import { Router } from 'express';
import ShopListController from '../resourses/shopList.controller';

const shopListController = new ShopListController();

const router = Router();

router.post('/create', shopListController.create);
router.post('/update');
router.get('/read-all', shopListController.readAll);
router.post('/read-one');
router.post('/delete');

export default router;
