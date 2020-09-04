const express = require('express')

const { comments } = require('../data/comments')
const router = express.Router()

const getAllComments = (req, res) => {
    res.json(comments);

};


const getCommentId = (req, res) => {

    const found = comments.some(user => user._id == req.params.id);
    if (found) {
        res.send(comments.filter(user => user._id == req.params.id));
    } else {
        res.status(400).json({ msg: `User id ${req.params.id} not found.` });
    }
};


const postComment = (req, res) => {

    newIDN = comments.length + 1
    const newPost = {
        _id: newIDN,
        body: req.body.body,
        postID: req.body.postID,
    }
    //pushing the new user into the array
    comments.push(newPost)
    //requesting the list of users
    res.json(comments)
};

module.exports = { getAllComments, getCommentId, postComment }
