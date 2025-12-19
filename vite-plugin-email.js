import express from 'express';
import nodemailer from 'nodemailer';

// Create transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'joelkalimbwe3@gmail.com',
    pass: 'yxdk iwgj rftt beel',
  },
});

export function emailServer() {
  return {
    name: 'email-server',
    configureServer(server) {
      // Create Express app for API routes
      const app = express();
      app.use(express.json());

      // Email endpoint
      app.post('/api/send-consultation-email', async (req, res) => {
        try {
          const { name, businessName, email, phone } = req.body;

          if (!name || !businessName || !email || !phone) {
            return res.status(400).json({ error: 'All fields are required' });
          }

          // Email HTML template
          const htmlContent = `
            <!DOCTYPE html>
            <html>
              <head>
                <meta charset="utf-8">
                <style>
                  body {
                    font-family: Arial, sans-serif;
                    line-height: 1.6;
                    color: #333;
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                  }
                  .header {
                    background: linear-gradient(135deg, #1c2a36 0%, #2d4a5a 100%);
                    color: white;
                    padding: 30px;
                    text-align: center;
                    border-radius: 8px 8px 0 0;
                  }
                  .content {
                    background: #f9f9f9;
                    padding: 30px;
                    border-radius: 0 0 8px 8px;
                  }
                  .info-box {
                    background: white;
                    padding: 20px;
                    margin: 15px 0;
                    border-radius: 5px;
                    border-left: 4px solid #00b4b4;
                  }
                  .label {
                    font-weight: bold;
                    color: #1c2a36;
                    display: inline-block;
                    min-width: 150px;
                  }
                  .value {
                    color: #555;
                  }
                  .footer {
                    text-align: center;
                    margin-top: 30px;
                    padding-top: 20px;
                    border-top: 1px solid #ddd;
                    color: #777;
                    font-size: 12px;
                  }
                </style>
              </head>
              <body>
                <div class="header">
                  <h1 style="margin: 0;">New Consultation Request</h1>
                  <p style="margin: 10px 0 0 0;">SimplyFound Website</p>
                </div>
                <div class="content">
                  <p>You have received a new consultation request:</p>
                  
                  <div class="info-box">
                    <div style="margin-bottom: 10px;">
                      <span class="label">Name:</span>
                      <span class="value">${name}</span>
                    </div>
                    <div style="margin-bottom: 10px;">
                      <span class="label">Business Name:</span>
                      <span class="value">${businessName}</span>
                    </div>
                    <div style="margin-bottom: 10px;">
                      <span class="label">Email:</span>
                      <span class="value">${email}</span>
                    </div>
                    <div>
                      <span class="label">Phone:</span>
                      <span class="value">${phone}</span>
                    </div>
                  </div>
                  
                  <p style="margin-top: 20px;">Please contact them at your earliest convenience.</p>
                </div>
                <div class="footer">
                  <p>This email was sent from SimplyFound consultation form.</p>
                </div>
              </body>
            </html>
          `;

          // Send email
          const mailOptions = {
            from: 'joelkalimbwe3@gmail.com',
            to: ['joel.kalimbwe@futuremedia.com.na', 'yoelowelly@gmail.com'],
            subject: `New Consultation Request from ${businessName}`,
            html: htmlContent,
            replyTo: email,
          };

          await transporter.sendMail(mailOptions);

          res.json({ success: true, message: 'Email sent successfully' });
        } catch (error) {
          console.error('Error sending email:', error);
          res.status(500).json({ error: 'Failed to send email' });
        }
      });

      // Mount Express app as middleware
      server.middlewares.use(app);
    },
  };
}

