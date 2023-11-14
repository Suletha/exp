const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const adminRoute = require('./router/admin');
const shopRoute = require('./router/shop')

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoute);
app.use(shopRoute);
app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
});
app.listen(3000);

// app.use('/',(req,res,next) => {
//     console.log('This always Run!!!!');
//     next();//Allows the next middleware to continue
// });



// app.use('/add-product',(req,res,next) => {
//     console.log('In another middleware');
//     //next();//Allows the next middleware to continue
//     res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>')
// });

// app.post('/product',(req,res,next) => {
//     console.log(req.body);
//     res.redirect('/');
// });

// app.use('/',(req,res,next) => {
//     //console.log('In another middleware');
//     //next();//Allows the next middleware to continue
//     res.send('<h1>Hello from Express js</h1>')
// });


// const server = http.createServer(app);
// server.listen(3000);

