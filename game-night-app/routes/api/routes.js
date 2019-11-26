const express = require("express");
const router = express.Router();

//  import other routers
router.use(require("./playerCharacterRoutes"));
router.use(require("./login"));

module.exports = router;
