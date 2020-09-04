const express = require('express')


const router = express.Router()

const VehiclesController = (require('../controllers/vehicles.js'))

router.get('/', VehiclesController.getAllVehicles);
router.get("/:id", VehiclesController.getVehicleId);
router.post('/', VehiclesController.postVehicle);


module.exports = router