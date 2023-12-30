const express = require('express');
const router = express.Router();
const StoicController = require('../controllers/stoic-module/stoic-controller');

router.get("/reflection", StoicController.fetchReflections);

module.exports = router;