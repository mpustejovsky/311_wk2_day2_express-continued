const express = require('express')


const router = express.Router()
const ContactsController = (require('../controllers/contacts.js'))

router.get('/', ContactsController.getAllContacts);
router.get("/:id", ContactsController.getContactId);
router.post('/', ContactsController.postContact);


module.exports = router