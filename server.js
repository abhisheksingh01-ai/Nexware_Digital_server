const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT;
const paymentRoutes = require("./routes/paymentRoutes");
const contactRoutes = require("./routes/contactRoutes");

const app = express();

// "https://technexwaredigital.in"
app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);

app.use(express.json());

// Routes
app.use("/api/payment", paymentRoutes);
app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => res.send("Server is running!"));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
