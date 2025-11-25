const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const emailTemplate = require("./templates/ContactUs.js");

const app = express();
app.use(
  cors({
    origin: ["https://technexwaredigital.in"],
  })
);

app.use(express.json());

app.get("/", (req, res) => res.send("Server is running!"));

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Message from ${name}`,
      html: emailTemplate(name, email, message),
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: "Email sent!" });
  } catch (err) {
    res.json({ success: false, error: err.message });
  }
});

module.exports = app;
