const express = require("express");
const router = express.Router();
const path = require('path')
const rootDir = require('../util/path')
router.get('/add-product',(req,res,next) => {
    //console.log('In another middleware');
    //next();//Allows the next middleware to continue
    //res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>')
    //res.sendFile(path.join(__dirname,'../', 'views', 'add-product.html'))
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
});

router.post('/add-product',(req,res,next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;
