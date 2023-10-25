const express = require("express");
const router = express.Router();
const VAController = require("../controllers/VAController");

router.post("/addVA", VAController.addVA);

module.exports = router;
