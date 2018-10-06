const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const Product = require('../models/product');

// Add Product
router.post('/add', (req, res, next) => {
  console.log('hellooww');
    let newProduct = new Product ({
      name: req.body.productName,
      quantity: req.body.productQty,
      quality: req.body.productype    
    });
  
    Product.addProduct(newProduct, (err, user) => {
      if(err) {    
        res.json({success: false, msg: 'Failed to add Product.'});
      } else {
        res.json({success: true, msg: 'Product Added Successfully.'});
      }
    });
});

//get All Products
router.get('/getAll', (req,res,next) =>{

  Product.getAllProducts( (err,data) => {
    if(err) {    
      res.json({success: false, msg: 'Failed to get All Product.'});
    } else {
      res.json({success: true, msg: 'All Products fetched Successfully.', products : data});
    }
  })
})

//make product Invisible
router.post('/makeInvisible/:id', (req,res,next) => {
  let id = req.params.id;
  Product.makeInvisble(id, (err,user) => {
    if(err){
      res.json({success: false, msg: 'Something Went Wrong'});
    } else {
      res.json({success: true, msg: 'Product Invisible Set.'});
    }
  })
})

//make product visible
router.post('/makeVisible/:id', (req,res,next) => {
  let id = req.params.id;
  Product.makeVisble(id, (err,user) => {
    if(err){
      res.json({success: false, msg: 'Something Went Wrong'});
    } else {
      res.json({success: true, msg: 'Product Invisible Set.'});
    }
  })
})

//Delete the Product
router.post('/delete/:id', (req,res,next) => {
  let id = req.params.id;
  Product.deleteProduct(id, (err,user) => {
    if(err){
      res.json({success: false, msg: 'Something Went Wrong'});
    } else {
      res.json({success: true, msg: 'Product Deleted Set.'});
    }
  })
})


module.exports = router;
