import express from 'express';
import mongoose from 'mongoose';
import Product from '../models/product.model.js';
import e from 'express';
import { createProduct, getProducts, updateProduct , deleteProduct} from '../controllers/product.controller.js';


const router = express.Router();

router.get("/",getProducts);
router.put("/:id",updateProduct);
router.post("/",createProduct);
router.delete("/:id", deleteProduct);

export default router;