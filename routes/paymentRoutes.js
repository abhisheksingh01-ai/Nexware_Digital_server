const express = require("express");
const multer = require("multer");
const { sendPaymentEmail } = require("../controllers/paymentController");

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 },
});

router.post("/Payment-detail", upload.single("screenshot"), sendPaymentEmail);

module.exports = router;
