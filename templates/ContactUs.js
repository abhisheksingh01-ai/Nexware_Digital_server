module.exports = function (name, email, message) {
  return `
    <div style="
      font-family: 'Segoe UI', Arial, sans-serif;
      padding: 24px;
      background: #f5f7fa;
      border-radius: 10px;
      border: 1px solid #e5e7eb;
      max-width: 600px;
      margin: auto;
    ">
      <div style="text-align: center; margin-bottom: 20px;">
        <h2 style="
          color: #111827;
          margin: 0;
          font-size: 22px;
        ">
          📬 New Contact Form Submission
        </h2>
        <p style="color: #6b7280; font-size: 14px; margin-top: 6px;">
          A user has sent a new message through your website.
        </p>
      </div>

      <div style="
        background: #ffffff;
        padding: 20px;
        border-radius: 8px;
        border: 1px solid #e5e7eb;
      ">
        <p style="margin: 0 0 10px; font-size: 15px;">
          <strong style="color: #111827;">Name:</strong> ${name}
        </p>
        <p style="margin: 0 0 10px; font-size: 15px;">
          <strong style="color: #111827;">Email:</strong> ${email}
        </p>

        <p style="margin: 15px 0 8px; font-size: 15px; color: #111827;">
          <strong>Message:</strong>
        </p>

        <div style="
          padding: 15px;
          background: #f9fafb;
          border-left: 4px solid #3b82f6;
          font-size: 14px;
          white-space: pre-line;
          border-radius: 4px;
          color: #374151;
        ">
          ${message}
        </div>
      </div>

      <p style="
        font-size: 12px;
        text-align: center;
        color: #6b7280;
        margin-top: 20px;
      ">
        This email was automatically generated from your website contact page.
      </p>
    </div>
  `;
};
