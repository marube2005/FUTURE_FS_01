
// Load environment variables first!
require('dotenv').config();

const userRoutes = require('./app2')
const express = require('express'); // Import Express
const cors = require('cors');
const nodemailer = require('nodemailer');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const PORT = process.env.PORT || 5000;
//const PORT = process.env.PORT || 5000; // Use PORT from .env

const app = express();

// Security & Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 })); // Limit to 100 requests/15min

// Create a Nodemailer transporter
// Replace with your SMTP server details or use a service like Gmail, SendGrid, etc.
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com', // e.g., 'smtp.gmail.com' for Gmail
  port: 587,                // Use 465 for secure connection with Gmail or your provider's port
  secure: false,            // Set to true if using port 465
  auth: {
    user: 'emarube89@gmail.com', // Your email address
    pass: 'cluc lbcm fsif hzra'     // Your email password or app-specific password
  }
});

app.post('/api/contact', (req, res) => {
  // Handle form submission here
  const { name, email, subject, message } = req.body;

   // Simple validation: ensure all fields are provided
   if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const mailOptions = {
    from: email, // Sender's email address (you might set a fixed address in production)
    to: 'emarube89@gmail.com', // Your email where messages are sent
    subject: `Contact Form Submission: ${subject}`,
    text: `You have received a new message from your contact form.\n\n` +
          `Name: ${name}\n` +
          `Email: ${email}\n` +
          `Subject: ${subject}\n` +
          `Message: ${message}\n`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      // Return an error response
      return res.status(500).json({ error: 'Failed to send email. Please try again later.' });
    } else {
      console.log('Email sent:', info.response);
      // Return a success response
      return res.status(200).json({ message: 'Email sent successfully!' });
    }
  });
});


// Example API endpoint for projects
app.get('/api/projects', (req, res) => {
  res.json([
    { title: "Project 1", description: "A cool project" },
    { title: "Project 2", description: "Another awesome project" },
  ]);
});

// Basic route to check if the server works
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

  app.use(express.urlencoded({ extended: true }));

// Start server
