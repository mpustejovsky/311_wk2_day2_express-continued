const express = require('express')

const { products } = require('../data/products')
const router = express.Router()

const getAllProducts = (req, res) => {
    res.json(products);
};


const getProductId = (req, res) => {

    const found = products.some(user => user._id == req.params.id);
    if (found) {
        res.send(products.filter(user => user._id == req.params.id));
    } else {
        res.status(400).json({ msg: `User id ${req.params.id} not found.` });
    }
};



const postProduct = (req, res) => {

    newIDN = products.length + 1
    const newPost = {
        _id: newIDN,
        name: req.body.name,
        description: req.body.description,
        rating: req.body.rating,
        imgUrl: req.body.imgUrl,
        price: req.body.price,
        category: req.body.category,
        reviews: req.body.reviews,
    }
    //pushing the new user into the array
    products.push(newPost)
    //requesting the list of users
    res.json(products)
};


module.exports = { getAllProducts, getProductId, postProduct }
