const Product = require('../models/product');
const verifyToken = require ('../middlewares/verifyToken');


const deleteProduct = (verifyToken, async (req, res) => {
  try {
    const productId = req.params.id;

    
    const deletedProduct = await Product.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = deleteProduct;
