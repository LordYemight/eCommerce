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
const verifyToken = require('../middlewares/verifyToken');

router.post('/signUp', signUp);
router.post('/login', logIn);
router.post('/changepassword', verifyToken, changePassword);
router.post('/product', verifyToken, createProduct);
router.get('/getproductAll', verifyToken, getProductAll);
router.get('/getproduct/:id', verifyToken, getProduct);
router.put('/product/:id', verifyToken, updateProduct);
router.delete('/product/:id', verifyToken, deleteProduct);


module.exports = router;
