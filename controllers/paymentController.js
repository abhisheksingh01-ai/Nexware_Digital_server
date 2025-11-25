const transporter = require("../config/mailer");
const paymentEmail = require("../templates/paymentEmail");

exports.sendPaymentEmail = async (req, res) => {
  try {
    const { name, utrid, phone } = req.body;

    if (!req.file) {
      return res.json({ success: false, error: "Payment screenshot/file is required" });
    }

    const emailHtml = paymentEmail({
      name,
      utrid,
      phone
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Payment Received – ${name}`,
      html: emailHtml,
      attachments: [
        {
          filename: req.file.originalname || "payment-proof",
          content: req.file.buffer,
          contentType: req.file.mimetype
        }
      ]
    };

    await transporter.sendMail(mailOptions);

    return res.json({ success: true, message: "Payment details sent successfully!" });
  } catch (err) {
    return res.json({ success: false, error: err.message });
  }
};
