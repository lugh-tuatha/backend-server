const express = require("express");
const app = express();
const router = express.Router();

router.use('/v1/stoic', require('./stoic-routes'))

module.exports = router;