import { Router } from 'express';
import shopList from './shopList';

const routes = Router();

routes.use('/shop-list', shopList);

export default routes;
