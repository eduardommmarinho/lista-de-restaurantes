import { Router } from 'express';
import { validateRestaurant } from './validator';
import { validatePK } from '../util/validator';
import * as controller from './RestauranteController';
import 'express-async-errors';

const route = Router();

route.get('/all', controller.list);
route.get('/:id/products', validatePK, controller.listProducts);
route.get('/:id', validatePK, controller.findOne);
route.post('/', validateRestaurant, controller.create);
route.put('/:id', validatePK, controller.update);
route.delete('/:id', validatePK, controller.deleteOne);

export default route;
