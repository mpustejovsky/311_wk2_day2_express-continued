
const express = require('express')

const router = express.Router()

router.use('/contacts', require('./contacts'))
router.use('/products', require('./products'))
router.use('/vehicles', require('./vehicles'))
router.use('/comments', require('./comments'))


module.exports = router