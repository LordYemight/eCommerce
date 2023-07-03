const verifyToken = require('../middlewares/verifyToken');
const Product = require('../models/product');

const getProductAll = (verifyToken, async (req, res) => {
  try {
    const products = await Product.find();

    res.json({ products });
  } catch (error) {
    console.error('Error getting products:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = getProductAll;

