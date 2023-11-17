const express = require("express");
const router = express.Router();
const path = require('path');

router.get('/',(req,res,next) => {
    //console.log('In another middleware');
    //next();//Allows the next middleware to continue
    //res.send('<h1>Hello from Express js</h1>')
    res.sendFile(path.join(__dirname,'../', 'views', 'shop.html'));
});
module.exports = router;