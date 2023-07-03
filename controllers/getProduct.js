const verifyToken = require('../middlewares/verifyToken');
const Product = require('../models/product');

const getProduct =  (verifyToken, async (req, res) => {
  try {
    const productId = req.params.id;
    
    const product = await Product.findById(productId, 'name price description');

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json({ product });
  } catch (error) {
    console.error('Error getting product:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = getProduct;
