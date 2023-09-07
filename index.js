const express = require('express');
const path = require('path');
const product = require('./controller/product.controller'); // Use require for CommonJS modules
// const layout =require('express-ejs-layouts')// import ejs layout for view
const bodyParser = require('body-parser');

const server = express();
server.use(bodyParser.urlencoded({ extended: true }));
// server.use(layout)// use for view
// installition of ejs seting
server.set("view engine","ejs");// server know that we are using view engine
server.set("views",path.join(path.resolve(), "src", "view"))// here is path deifind
// okey get it

//server.use(layout)// use for view

const productController = new product();
server.get('/', productController.getProduct); // Use getProduct instead of getproduct
// server.get('/new',productController.newproduct)
server.post('/',productController.contact)



server.use(express.static('src/view')); // Correct the path for static files

server.listen(7500, () => {
  console.log("Server is running on port no 7500");
});
