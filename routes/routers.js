const express = require('express');
const router = express.Router();
const signUp = require('../controllers/signUp');
const logIn = require('../controllers/logIn');
const changePassword = require('../controllers/changePassword');
const createProduct = require('../controllers/createProduct');
const getProductAll = require('../controllers/getProductAll');
const getProduct = require('../controllers/getProduct');
const updateProduct = require('../controllers/updateProduct');
const deleteProduct = require('../controllers/deleteProduct');

router.post('/signUp', signUp);
router.post('/login', logIn);
router.post('/changepassword', changePassword);
router.post('/product', createProduct);
router.get('/getproductAll', getProductAll);
router.get('/getproduct/:id', getProduct);
router.put('/product/:id', updateProduct);
router.delete('/product/:id', deleteProduct);


module.exports = router;
