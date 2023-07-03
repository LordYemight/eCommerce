const verifyToken = require('../middlewares/verifyToken');
const Product = require('../models/product');
const productSchema = require('../validation/productVal')
// Create product route (requires authentication)
const createProduct = (verifyToken, async (req, res) => {
  try {
    const { name, price, description } = req.body;

    // Validate product input using the product schema
    const { error } = productSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    // Create a new product object
    const newProduct = new Product({
      name,
      price,
      description
    });

    // Save the product to the database
    const savedProduct = await newProduct.save();

    res.status(201).json({ message: 'Product created successfully', product: savedProduct });
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = createProduct;
