const transporter = require("../config/mailer");
const emailTemplate = require("../templates/ContactUs");

exports.sendContactEmail = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const mailOptions = {
      from: email,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Message from ${name}`,
      html: emailTemplate(name, email, message),
    };

    await transporter.sendMail(mailOptions);

    return res.json({ success: true, message: "Email sent!" });
  } catch (err) {
    return res.json({ success: false, error: err.message });
  }
};
