const express = require("express");
const app = express();
const router = express.Router();

router.use('/v1/stoic', require('./stoic-routes'))
router.use('/v1/aclc-library', require('./aclc-library-routes'))

module.exports = router;