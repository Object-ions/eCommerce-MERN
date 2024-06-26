import express from 'express';
const router = express.Router();

import {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrdersAdmin,
} from '../controllers/orderController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router
  .route('/')
  .get(protect, admin, getOrdersAdmin)
  .post(protect, addOrderItems);
router.route('/my-orders').get(protect, getMyOrders);
router.route('/:id').get(protect, getOrderById);
router.route('/:id/pay').put(protect, updateOrderToPaid);
router.route('/:id/delivered').put(protect, admin, updateOrderToDelivered);

export default router;
