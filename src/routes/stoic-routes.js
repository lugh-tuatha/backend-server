const express = require('express');
const router = express.Router();
const StoicController = require('../controllers/stoic-module/stoic-controller');

router.get("/reflections", StoicController.fetchReflections);

router.post("/reflections", StoicController.addReflection);

module.exports = router;  