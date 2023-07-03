const express = require('express');
const router = express.Router();
const signUp = require('../controllers/signUp');
const logIn = require('../controllers/logIn');
const changePassword = require('../controllers/changePassword');
const createProduct = require('../controllers/createProduct');

router.post('/signUp', signUp);
router.post('/login', logIn);
router.post('/changepassword', changePassword);
router.post('/product', createProduct);

module.exports = router;