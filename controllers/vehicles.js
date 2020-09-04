const express = require('express')

const { vehicles } = require('../data/vehicles')
const router = express.Router()

const getAllVehicles = (req, res) => {
    res.json(vehicles);
};


const getVehicleId = (req, res) => {

    const found = vehicles.some(user => user._id == req.params.id);
    if (found) {
        res.send(vehicles.filter(user => user._id == req.params.id));
    } else {
        res.status(400).json({ msg: `User id ${req.params.id} not found.` });
    }
};



const postVehicle = (req, res) => {
    newIDN = vehicles.length + 1
    const newPost = {
        _id: newIDN,
        imgUrl: req.body.imgUrl,
        year: req.body.year,
        make: req.body.make,
        model: req.body.model,
        price: req.body.price,
        km: req.body.km,
        miles: req.body.miles,
        fuel: req.body.fuel,
        city: req.body.city,
        isNew: req.body.isNew

    }
    //pushing the new user into the array
    vehicles.push(newPost)
    //requesting the list of users
    res.json(vehicles)
};


module.exports = { getAllVehicles, getVehicleId, postVehicle }
