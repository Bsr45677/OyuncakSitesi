'use strict';
var express = require('express');
var router = express.Router();

/* GET home page.
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});

module.exports = router;
 */

router.get('/', function (req, res) {
    res.render('index');
});


router.get('/about', function (req, res, next) {
    res.render('about', { title: 'Success', content: 'about' });
});


router.get('/products', function (req, res, next) {
    res.render('products', { title: 'Success', content: 'products' });
});


router.get('/contact', function (req, res, next) {
    res.render('contact', { title: 'Success', content: 'contact' });
});

router.get('/urunler', function (req, res, next) {
    res.render('urunler', { title: 'Success', content: 'contact' });
});

module.exports = router;