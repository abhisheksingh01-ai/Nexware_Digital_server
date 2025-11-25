// Import required dependencies
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

// Create Express app instance
const app = express();

// CORS setup (update origin for production)
app.use(
  cors({
    origin: ["https://technexwaredigital.in"],
  })
);

// Middleware to parse JSON request body
app.use(express.json());

// Default route
app.get("/", (req, res) => res.send("Server is running!"));

// Email sending route
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Setup transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Mail configuration
    const mailOptions = {
      from: email,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Message from ${name}`,
      html: `
        <h2>New Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: "Email sent!" });
  } catch (err) {
    res.json({ success: false, error: err.message });
  }
});

// ❌ DO NOT USE app.listen() on Vercel
// Vercel handles server listening automatically

// ✅ Export the app for Vercel serverless function
module.exports = app;
