import { Router } from 'express';
import ProductManager from '../ProductManager.js';

const router = Router();
const productManager = new ProductManager('./db/products.json');

// GET /api/products
router.get('/', async (req, res) => {
  const limit = req.query.limit ? Number(req.query.limit) : undefined;
  const products = await productManager.getProducts(limit);
  return res.json({
    status: "success",
    msg: "producto ",
    data: products,
  });
});
// GET /api/products/:id
router.get('/:pid', async (req, res) => {
  const product = await productManager.getProductById(Number(req.params.pid));
  if (!product) {
    res.status(404).json({ message: 'Producto no encontrado' });
  } else {
    // res.json(product);
    return res.json({
      status: "success id found",
      msg: "producto ",
      data: product,
    });
  }
});
// POST /api/products
router.post('/', async (req, res) => {
  const product = req.body;
  console.log(product);
  productManager.addProduct(product);
  return res.status(201).json({
    status: "success insert",
    msg: "producto ",
    data: product,
  });
});
// PUT /api/products/:id
router.put('/:pid', async (req, res) => {
  const productId = Number(req.params.pid);
  const fields = req.body
  const updatedProduct = await productManager.updateProduct(productId, fields);
  return res.status(200).json({
    status: "success update",
    msg: "producto ",
    data: updatedProduct,
  });
});
// DELETE /api/products/:id
router.delete('/:pid', async (req, res) => {
  const productId = Number(req.params.pid);
  const deletedProduct = await productManager.deleteProduct(productId);
  if (!deletedProduct) {
    res.status(404).json({ message: 'Producto no encontrado' });
  } else {
    return res.status(200).json({
      status: "success delete",
      msg: "producto ",
      data: deletedProduct,
    });
  }
});

export default router;