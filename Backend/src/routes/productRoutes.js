import express from 'express';
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} from '../controllers/productController.js';

import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

// Public Routes
router.get('/', getAllProducts);           // GET all products
router.get('/:id', getProductById);        // GET single product

// Admin Routes
router.post('/', protect, admin, createProduct);     // POST create product
router.put('/:id', protect, admin, updateProduct);   // PUT update product
router.delete('/:id', protect, admin, deleteProduct); // DELETE product

export default router;
