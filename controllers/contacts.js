const express = require('express')

const { contacts } = require('../data/contacts')
const router = express.Router()

const getAllContacts = (req, res) => {
    res.json(contacts);

};


const getContactId = (req, res) => {

    const found = contacts.some(user => user._id == req.params.id);
    if (found) {
        res.send(contacts.filter(user => user._id == req.params.id));
    } else {
        res.status(400).json({ msg: `User id ${req.params.id} not found.` });
    }
};



const postContact = (req, res) => {

    newIDN = contacts.length + 1
    const newPost = {
        _id: newIDN,
        name: req.body.name,
        occupation: req.body.occupation,
        avatar: req.body.avatar
    }

    //pushing the new user into the array
    contacts.push(newPost)
    //requesting the list of users
    res.json(contacts)
}


module.exports = { getAllContacts, getContactId, postContact }
