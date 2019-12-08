const express = require("express");
const router = express.Router();

//  import other routers
router.use(require("./playerCharacterRoutes"));
router.use(require("./loginRoutes"));
// router.use(require("./chat"));

module.exports = router;
