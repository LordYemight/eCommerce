const Product = require ('../models/product');
const verifyToken = require('../middlewares/verifyToken');


const updateProduct =  (verifyToken, async (req, res) => {
  try {
    const productId = req.params.id;
    const { name, price, description } = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      { name, price, description },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json({ message: 'Product updated successfully', product: updatedProduct });
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = updateProduct;