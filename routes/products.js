const express = require('express')

const router = express.Router()

const ProductsController = (require('../controllers/products.js'))

router.get('/', ProductsController.getAllProducts);
router.get("/:id", ProductsController.getProductId);
router.post('/', ProductsController.postProduct);


module.exports = router