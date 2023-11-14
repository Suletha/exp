const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded());

app.use('/',(req,res,next) => {
    console.log('This always Run!!!!');
    next();//Allows the next middleware to continue
});

app.use('/',(req,res,next) => {
    console.log('In another middleware');
    //next();//Allows the next middleware to continue
    res.send('<h1>Hello from Express js</h1>')
});

app.use('/add-product',(req,res,next) => {
    console.log('In another middleware');
    //next();//Allows the next middleware to continue
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>')
});

app.use('/',(req,res,next) => {
    console.log(req.body);
    res.redirect('/');
});


// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000);