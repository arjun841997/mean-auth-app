const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User Schema
const ProductSchema = mongoose.Schema ({
  name: {
    type: String
  },
  quantity: {
    type: String,
    required: true
  },
  quality: {
    type: String,
    required: true
  },
  isVisible: {
    type : Boolean,
    default : true
  }  
});

const Product = module.exports = mongoose.model('Product', ProductSchema);


module.exports.addProduct = function(newProduct, callback) {
    
    newProduct.save(callback);    
}


module.exports.getAllProducts = function(callback) {
    
  Product.find({},callback);
}

module.exports.makeVisble = function(id,callback){

  Product.findByIdAndUpdate(id,{isVisible : true},callback);
}

module.exports.makeInvisble = function(id,callback){

  Product.findByIdAndUpdate(id,{isVisible : false},callback);
}

module.exports.deleteProduct = function(id,callback){

  Product.findByIdAndRemove(id,callback);
}

