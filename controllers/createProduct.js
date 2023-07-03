const verifyToken = require('../middlewares/verifyToken');
const Product = require('../models/product');
const productSchema = require('../validation/createProductVal')


const createProduct = (verifyToken, async (req, res) => {
  try {
    const { name, price, description } = req.body;
    
    const { error } = productSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
  
    const newProduct = new Product({
      name,
      price,
      description
    });

    const savedProduct = await newProduct.save();

    res.status(201).json({ message: 'Product created successfully', product: savedProduct });
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = createProduct;
