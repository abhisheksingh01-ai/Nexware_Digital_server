const express = require("express");
const { sendContactEmail } = require("../controllers/contactController");

const router = express.Router();

router.post("/contact-detail", sendContactEmail);

module.exports = router;
