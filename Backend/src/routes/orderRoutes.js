import express from 'express';
import {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getAllOrders
} from '../controllers/orderController.js';

import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

// Create a new order
router.post('/', protect, addOrderItems);

// Get logged-in user's orders
router.get('/my', protect, getMyOrders);

// Get all orders (admin)
router.get('/', protect, admin, getAllOrders);

// Get order by ID
router.get('/:id', protect, getOrderById);

// Update order to paid
router.put('/:id/pay', protect, updateOrderToPaid);

// Update order to delivered
router.put('/:id/deliver', protect, admin, updateOrderToDelivered);

router.post('/logout', logout);


export default router;
