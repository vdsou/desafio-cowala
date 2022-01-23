import { Router } from 'express';
import ShopListController from '../resourses/shopList.controller';

const shopListController = new ShopListController();

const router = Router();

router.post('/create', shopListController.create);
router.post('/update');
router.get('/read-all', shopListController.readAll);
router.get('/read-one/:id', shopListController.readOne);
router.post('/delete');

export default router;
